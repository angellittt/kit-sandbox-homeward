// design-system-kit 0.37.1 · profile shadcn · design entry: the shell
//
// The page list by group on the left, one component on the right (#<slug> in
// the address, so a link or the agent can open one directly), and the theme
// switch (Light, Dark and the design-only Wireframe, theme.ts). Pages are
// shown one at a time: several open a dialog, menu or tooltip on load, as
// their design system cards do.
import { useEffect, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { GROUPS, PAGES } from "./pages";
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
  const slug = useSyncExternalStore(subscribe, currentSlug, () => "");
  const { resolvedTheme, setTheme } = useTheme();
  const page = PAGES.find((p) => p.slug === slug) ?? PAGES[0];

  useEffect(() => {
    document.title = `${page.name} · Design system`;
  }, [page]);

  return (
    <div className="ds-shell">
      <nav className="ds-nav" aria-label="Components">
        {GROUPS.map((group) => (
          <section key={group}>
            <h2>{group}</h2>
            <ul>
              {PAGES.filter((p) => p.group === group).map((p) => (
                <li key={p.slug}>
                  <a
                    href={`#${p.slug}`}
                    aria-current={p === page ? "page" : undefined}
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
      <main className="ds-main">
        <header className="ds-header">
          <h1>{page.name}</h1>
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
        <div className="ds-page">
          <page.Page key={page.slug} />
        </div>
      </main>
    </div>
  );
};
