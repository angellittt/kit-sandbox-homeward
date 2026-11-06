// design-system-kit 0.45.0 · profile shadcn · design entry: the specs
//
// What a designer reads beside a preview: a token as a swatch or a shape with
// its live value and usage note, and under each component page, what it is
// for, where its code lives and every token it uses (system.ts).
import { useTheme } from "next-themes";
import { PAGES } from "./pages";
import {
  foundationSlug,
  parseUsage,
  reference,
  slugOf,
  sourceFiles,
  tokensFor,
  usedByWritten,
  useCssValues,
  type Token,
} from "./system";

export const TokenVisual = ({ kind, name }: { kind: string; name: string }) => {
  const v = `var(--${name})`;
  switch (kind) {
    case "color":
      return <span className="ds-swatch" style={{ background: v }} />;
    case "spacing":
      return <span className="ds-bar" style={{ width: v }} />;
    case "radius":
      return <span className="ds-shape" style={{ borderRadius: v }} />;
    case "shadow":
      return (
        <span className="ds-shape ds-shape-raised" style={{ boxShadow: v }} />
      );
    case "icon":
      return <span className="ds-shape" style={{ width: v, height: v }} />;
    case "border":
      return <span className="ds-line" style={{ height: v }} />;
    case "control":
      return name.includes("height") ? (
        <span className="ds-shape" style={{ height: v, width: 48 }} />
      ) : (
        <span className="ds-visual" />
      );
    default:
      return <span className="ds-visual" />;
  }
};

export const TokenRow = ({ kind, token }: { kind: string; token: Token }) => {
  const { resolvedTheme = "light" } = useTheme();
  const css = useCssValues();
  const { note, choice, usedBy } = parseUsage(token.usage);
  const ref = reference(token, resolvedTheme);
  return (
    <li className="ds-token" id={`token-${token.name}`}>
      <span className="ds-token-visual">
        <TokenVisual kind={kind} name={token.name} />
      </span>
      <span className="ds-token-text">
        <code className="ds-token-name">{token.name}</code>
        <span className="ds-token-value">
          {ref && <code>{ref}</code>}
          <code>{css(token.name) || "—"}</code>
        </span>
        {note && <span className="ds-token-note">{note}</span>}
        {choice && <span className="ds-token-choice">{choice}</span>}
        {usedBy.length > 0 && (
          <span className="ds-token-used">
            Used by{" "}
            {usedBy.map((c, i) => (
              <span key={c}>
                {i > 0 && ", "}
                {PAGES.some((p) => p.name === c) ? (
                  <a href={`#${slugOf(c)}`}>{c}</a>
                ) : (
                  c
                )}
              </span>
            ))}
          </span>
        )}
      </span>
    </li>
  );
};

// A token in a component's specs: its visual, name and live value. The usage
// note shows on hover; the chip opens the token's row in Foundations
// (#<page>/<token>, shell.tsx), where the note, choice and "Used by" are.
const TokenChip = ({ kind, token }: { kind: string; token: Token }) => {
  const css = useCssValues();
  return (
    <li>
      <a
        className="ds-chip"
        href={`#${foundationSlug(kind)}/${token.name}`}
        title={parseUsage(token.usage).note}
      >
        <span className="ds-chip-visual">
          <TokenVisual kind={kind} name={token.name} />
        </span>
        <code className="ds-token-name">{token.name}</code>
        <code className="ds-chip-value">{css(token.name) || "—"}</code>
      </a>
    </li>
  );
};

export const ComponentSpecs = ({
  name,
  slug,
  group,
  summary,
}: {
  name: string;
  slug: string;
  group: string;
  summary?: string;
}) => {
  const sections = tokensFor(name);
  return (
    <section className="ds-specs" aria-label={`${name} specs`}>
      <div className="ds-specs-about">
        {summary && <p>{summary}</p>}
        <dl>
          <dt>Code</dt>
          <dd>
            {sourceFiles(name, slug, group).map((f) => (
              <code key={f}>{f}</code>
            ))}
          </dd>
        </dl>
      </div>
      <h2>Tokens</h2>
      {sections.length === 0 && !usedByWritten ? (
        <p className="note">
          The token lists aren't written yet: the next push to the design system
          writes which tokens each component uses.
        </p>
      ) : sections.length === 0 ? (
        <p className="note">
          No token lists this component. Its look comes from the components it
          is built from.
        </p>
      ) : (
        sections.map((s) => (
          <div key={s.key} className="ds-specs-group">
            <h3>
              {s.title} <span>{s.tokens.length}</span>
            </h3>
            <ul className="ds-chips">
              {s.tokens.map((t) => (
                <TokenChip key={t.name} kind={s.key} token={t} />
              ))}
            </ul>
          </div>
        ))
      )}
    </section>
  );
};
