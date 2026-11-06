// design-system-kit 0.45.0 · profile shadcn · design entry: the shell
//
// The page list by group on the left, one component on the right (#<slug> in
// the address, so a link or the agent can open one directly), and the theme
// switch (Light, Dark and the design-only Wireframe, theme.ts). Pages are
// shown one at a time: several open a dialog, menu or tooltip on load, as
// their design system cards do. Above the components, the project and its
// links, and the Foundations (foundations.tsx); under each component, its
// specs (specs.tsx). The pages' labels show here only (labels.tsx). Below
// the md breakpoint (design.css) the page list folds behind a Pages button
// at the top: choosing a page or Escape closes it.
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { FoundationPage } from "./foundations";
import { ShowLabels } from "./labels";
import { GROUPS, PAGES } from "./pages";
import { ComponentSpecs } from "./specs";
import { FOUNDATIONS, KIT_VERSION, LINKS, PROJECT } from "./system";
import { THEMES } from "./theme";

const subscribe = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
};
const currentSlug = () => {
  const hash = window.location.hash.slice(1);
  try {
    return decodeURIComponent(hash);
  } catch {
    // A malformed hash (`#100%`) would throw during render and blank the page.
    return hash;
  }
};

export const DesignShell = () => {
  // #<page>, or #<foundation>/<token> to open a token's row (a specs chip).
  const [slug, token] = useSyncExternalStore(
    subscribe,
    currentSlug,
    () => "",
  ).split("/");
  const { resolvedTheme, setTheme } = useTheme();
  const foundation = FOUNDATIONS.find((p) => p.slug === slug);
  const component = PAGES.find((p) => p.slug === slug) ?? PAGES[0];
  const page = foundation ?? component;
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  // A page chosen from the open list: the list folds away, so focus goes to the page's title.
  const pick = () => {
    if (!open) return;
    setOpen(false);
    title.current?.focus({ preventScroll: true });
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  useEffect(() => {
    document.title = `${page.name} · Design system`;
  }, [page]);
  useEffect(() => {
    const row = token ? document.getElementById(`token-${token}`) : null;
    if (!row) {
      window.scrollTo(0, 0);
      return;
    }
    row.scrollIntoView({ block: "center" });
    row.dataset.flash = "";
    const timer = setTimeout(() => delete row.dataset.flash, 1600);
    return () => clearTimeout(timer);
  }, [page, token]);

  return (
    <div className="ds-shell">
      <nav
        className="ds-nav"
        aria-label="Components"
        data-open={open || undefined}
      >
        <Button
          ref={toggle}
          className="md:hidden"
          size="sm"
          variant="ghost"
          aria-expanded={open}
          aria-controls="ds-pages"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
          Pages
        </Button>
        <div id="ds-pages" className="ds-pages">
          <header className="ds-project">
            <strong>{PROJECT}</strong>
            {KIT_VERSION && <small>Kit {KIT_VERSION}</small>}
            <ul>
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </header>
          <section>
            <h2>Foundations</h2>
            <ul>
              {FOUNDATIONS.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`#${p.slug}`}
                    aria-current={p === page ? "page" : undefined}
                    onClick={pick}
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          {GROUPS.map((group) => (
            <section key={group}>
              <h2>{group}</h2>
              <ul>
                {PAGES.filter((p) => p.group === group).map((p) => (
                  <li key={p.slug}>
                    <a
                      href={`#${p.slug}`}
                      aria-current={p === page ? "page" : undefined}
                      onClick={pick}
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </nav>
      <main className="ds-main">
        <header className="ds-header">
          <h1 ref={title} tabIndex={-1}>
            {page.name}
          </h1>
          <fieldset className="row ds-theme">
            <legend className="sr-only">Theme</legend>
            {THEMES.map((t) => (
              <Button
                key={t.value}
                size="sm"
                variant={resolvedTheme === t.value ? "secondary" : "ghost"}
                aria-pressed={resolvedTheme === t.value}
                onClick={() => setTheme(t.value)}
              >
                {t.label}
              </Button>
            ))}
          </fieldset>
        </header>
        <div className="ds-body">
          <div className="ds-page">
            <ShowLabels>
              {foundation ? (
                <FoundationPage key={foundation.slug} slug={foundation.slug} />
              ) : (
                <component.Page key={component.slug} />
              )}
            </ShowLabels>
          </div>
          {!foundation && (
            <ComponentSpecs
              key={component.slug}
              name={component.name}
              slug={component.slug}
              group={component.group}
              summary={component.summary}
            />
          )}
        </div>
      </main>
    </div>
  );
};
