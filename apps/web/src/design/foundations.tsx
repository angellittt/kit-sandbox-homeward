// design-system-kit 0.45.0 · profile shadcn · design entry: the foundations
//
// The tokens themselves, one page per kind, above the components in the
// shell: colour (the semantic tokens, then the primitive ramps they point
// at), type (every style, set in its own class), and each other section of
// the token file. Design-entry only: they are not component pages, so
// ds-cards never renders them as cards. The list of them is FOUNDATIONS
// (system.ts), so this file exports components only.
import { useTheme } from "next-themes";
import { TokenRow } from "./specs";
import {
  COLOURS,
  FAMILIES,
  RAMPS,
  SECTIONS,
  TYPE_GROUPS,
  TYPE_PREFIX,
  reference,
  type Section,
  type TypeStyle,
} from "./system";

const ColourPage = () => {
  const { resolvedTheme = "light" } = useTheme();
  return (
    <div className="ds-foundation">
      <p className="ds-lede">
        Components use only the semantic tokens. Each points at a step of a
        primitive ramp, per theme: switch the theme to see where it lands.
      </p>
      <ul className="ds-tokens">
        {COLOURS.map((t) => (
          <TokenRow key={t.name} kind="color" token={t} />
        ))}
      </ul>
      <h2>Primitive ramps</h2>
      <p className="note">
        Never used in components directly. A ring marks a step a semantic token
        uses in this theme.
      </p>
      {RAMPS.map((ramp) => {
        const used = new Set(COLOURS.map((t) => reference(t, resolvedTheme)));
        return (
          <div key={ramp.name} className="ds-ramp">
            <code>{ramp.name}</code>
            <ol>
              {ramp.tokens.map((t) => (
                <li
                  key={t.name}
                  title={`${t.name} ${String(t.value)}`}
                  data-used={used.has(t.name) || undefined}
                >
                  <span style={{ background: `var(--${t.name})` }} />
                  <small>{t.name.slice(ramp.name.length + 1)}</small>
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </div>
  );
};

const TypeRow = ({ style, family }: { style: TypeStyle; family: string }) => (
  <li className="ds-type">
    <span className={`${TYPE_PREFIX}${style.name} ds-type-sample`}>
      {style.sample ?? "The quick brown fox jumps over the lazy dog"}
    </span>
    <span className="ds-token-text">
      <code className="ds-token-name">{style.name}</code>
      <span className="ds-token-value">
        <code>{family}</code>
        <code>
          {style.fontSize}
          {style.mobileFontSize &&
            ` (${style.mobileFontSize} on mobile)`} / {style.lineHeight} ·{" "}
          {style.fontWeight}
        </code>
        <code>tracking {style.letterSpacing}</code>
      </span>
      {style.usage && <span className="ds-token-note">{style.usage}</span>}
    </span>
  </li>
);

const TypePage = () => (
  <div className="ds-foundation">
    <dl className="ds-families">
      {Object.entries(FAMILIES).map(([role, stack]) => (
        <div key={role}>
          <dt>{role}</dt>
          <dd style={{ fontFamily: `var(--font-${role})` }}>
            {stack.split(",")[0].replaceAll('"', "")}
          </dd>
        </div>
      ))}
    </dl>
    {TYPE_GROUPS.map((g) => (
      <section key={g.name}>
        <h2>{g.name}</h2>
        <ul className="ds-tokens">
          {g.styles.map((s) => (
            <TypeRow key={s.name} style={s} family={g.family} />
          ))}
        </ul>
      </section>
    ))}
  </div>
);

const SectionPage = ({ section }: { section: Section }) => (
  <div className="ds-foundation">
    {section.note && <p className="ds-lede">{section.note}</p>}
    <ul className="ds-tokens">
      {section.tokens.map((t) => (
        <TokenRow key={t.name} kind={section.key} token={t} />
      ))}
    </ul>
  </div>
);

// A Foundations page by its slug (FOUNDATIONS, system.ts).
export const FoundationPage = ({ slug }: { slug: string }) => {
  if (slug === "colour") return <ColourPage />;
  if (slug === "type") return <TypePage />;
  const section = SECTIONS.find((s) => s.key === slug);
  return section ? <SectionPage section={section} /> : null;
};
