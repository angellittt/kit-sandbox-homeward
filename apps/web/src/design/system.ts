// design-system-kit 0.45.0 · profile shadcn · design entry: the system's data
//
// What the pages say about the design system, read from the app's own files
// so it is always the code's: the tokens (.ttt/tokens.json, the usage notes
// and the "Used by" lists ds-styling-maps writes), the config's links and the
// System section's Figma link. Values are read live from the CSS, so they
// follow the theme switch. The files are globbed, not imported: one that
// isn't there (a repo whose .ttt is elsewhere: point these at it) leaves its
// part of the page empty instead of failing the build.
import { useEffect, useState } from "react";

const json = import.meta.glob<Record<string, unknown>>(
  ["../../.ttt/design-system.json", "../../.ttt/tokens.json"],
  {
    eager: true,
    import: "default",
  },
);
const text = import.meta.glob<string>("../../.ttt/system.md", {
  eager: true,
  query: "?raw",
  import: "default",
});
const config = json["../../.ttt/design-system.json"] ?? {};
const tokenFile = json["../../.ttt/tokens.json"] ?? {};
const systemMd = text["../../.ttt/system.md"] ?? "";

export type Token = {
  name: string;
  value: string | Record<string, string>;
  usage?: string;
};
export type Section = {
  key: string;
  title: string;
  note?: string;
  tokens: Token[];
};
export type TypeStyle = {
  name: string;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
  fontWeight: number;
  usage?: string;
  sample?: string;
  mobileFontSize?: string;
};
type TypeGroup = { name: string; family: string; styles: TypeStyle[] };
type TokenFile = {
  name: string;
  color: { tokens: Token[] };
  type: { families: Record<string, string>; groups: TypeGroup[] };
};

const file = {
  color: { tokens: [] },
  type: { families: {}, groups: [] },
  ...tokenFile,
} as unknown as TokenFile;
const cfg = config as {
  designSystem?: string;
  tracker?: string;
  kitVersion?: string;
  typeClassPrefix?: string;
  componentFiles?: Record<string, string[]>;
};
// The token file's other sections and the config's componentFiles, looked up
// by a name from the file itself, so read through Maps.
const parts = new Map(
  Object.entries(
    tokenFile as Record<string, { note?: string; tokens?: Token[] }>,
  ),
);
const componentFiles = new Map(Object.entries(cfg.componentFiles ?? {}));

export const PROJECT = file.name;
export const KIT_VERSION = cfg.kitVersion;
export const TYPE_PREFIX = cfg.typeClassPrefix ?? "type-";
export const TYPE_GROUPS = file.type.groups;
export const FAMILIES = file.type.families;

export const LINKS = [
  { label: "Design system", href: cfg.designSystem },
  {
    label: "Figma",
    href: /https:\/\/www\.figma\.com\/design\/[^)\s]+/.exec(systemMd)?.[0],
  },
  { label: "Tracker", href: cfg.tracker },
  { label: "Guide", href: "https://claude.ai/artifact/CXAdV2SCptjbrijSaaUpPz" },
].filter((l): l is { label: string; href: string } => Boolean(l.href));

// Primitive steps end in a number; chart-1… are semantic series colours.
const STEP = /-\d+$/;
const isPrimitive = (t: Token) =>
  STEP.test(t.name) && !t.name.startsWith("chart-");
const PRIMITIVES = file.color.tokens.filter(isPrimitive);
export const COLOURS = file.color.tokens.filter((t) => !isPrimitive(t));
export const RAMPS = [
  ...new Set(PRIMITIVES.map((t) => t.name.replace(STEP, ""))),
].map((name) => ({
  name,
  tokens: PRIMITIVES.filter((t) => t.name.replace(STEP, "") === name),
}));

const TITLES = new Map([
  ["spacing", "Spacing"],
  ["radius", "Radius"],
  ["shadow", "Shadow"],
  ["control", "Controls"],
  ["icon", "Icons"],
  ["border", "Borders"],
  ["easing", "Easing"],
  ["duration", "Duration"],
  ["layer", "Layers"],
  ["breakpoint", "Breakpoints"],
]);
export const SECTIONS: Section[] = [...TITLES].flatMap(([key, title]) => {
  const part = parts.get(key);
  return part?.tokens
    ? [{ key, title, note: part.note, tokens: part.tokens }]
    : [];
});

// The Foundations pages, above the components (foundations.tsx draws them),
// and the page a token's kind opens in.
export const FOUNDATIONS = [
  { slug: "colour", name: "Colour" },
  { slug: "type", name: "Typography" },
  ...SECTIONS.map((s) => ({ slug: s.key, name: s.title })),
];
export const foundationSlug = (kind: string) =>
  kind === "color" ? "colour" : kind;

// Page slugs are the component names in kebab case (pages/index.ts).
export const slugOf = (name: string) =>
  name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

// A usage note, split: the note itself, a designer's choice in [brackets],
// and the components its "Used by" list names.
const USED_BY = /\s*Used by ([^.]*)\.\s*$/;
const CHOICE = /\s*\[([^\]]+)\]/;
export const parseUsage = (usage = "") => {
  const usedBy = USED_BY.exec(usage)?.[1].split(/,\s*/) ?? [];
  const choice = CHOICE.exec(usage)?.[1];
  const note = usage.replace(USED_BY, "").replace(CHOICE, "").trim();
  return { note, choice, usedBy };
};

// Every token a component's code uses, by the "Used by" lists.
const ALL = [{ key: "color", title: "Colour", tokens: COLOURS }, ...SECTIONS];
// Whether the token file has any "Used by" list: a push (or Setup) writes them, so none at all means not yet.
export const usedByWritten = ALL.some((s) =>
  s.tokens.some((t) => parseUsage(t.usage).usedBy.length > 0),
);
export const tokensFor = (component: string) =>
  ALL.map((s) => ({
    ...s,
    tokens: s.tokens.filter((t) =>
      parseUsage(t.usage).usedBy.includes(component),
    ),
  })).filter((s) => s.tokens.length > 0);

export const sourceFiles = (component: string, slug: string, group: string) =>
  group === "Wireframe"
    ? [`src/design/wireframe/${slug}.tsx`]
    : (componentFiles.get(component) ?? [`${slug}.tsx`]).map(
        (f) => `src/components/ui/${f}`,
      );

// The theme's value for a token as the token file writes it: a reference to
// a primitive ("brand-primary-70") or a literal.
export const reference = (token: Token, theme: string) => {
  const raw =
    typeof token.value === "string"
      ? token.value
      : (new Map(Object.entries(token.value)).get(theme) ?? token.value.light);
  return /^\{(.+)\}$/.exec(raw)?.[1];
};

// The live CSS value of a token, re-read whenever the theme changes.
export const useCssValues = () => {
  const [, setTick] = useState(0);
  useEffect(() => {
    const observer = new MutationObserver(() => setTick((t) => t + 1));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });
    return () => observer.disconnect();
  }, []);
  const style = getComputedStyle(document.documentElement);
  return (name: string) => style.getPropertyValue(`--${name}`).trim();
};
