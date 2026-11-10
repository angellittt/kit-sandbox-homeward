<!-- design-system-kit 0.53.0 · profile shadcn · wiring: CLAUDE.md design-system section -->

# Design system

**Homeward is the source of truth; shadcn is the scaffolding.** The look
comes from the design system (https://claude.ai/artifact/84WiUVMfsipcsUEcWha35d): brand rules, the Tailwind
names to build with ("Using in code"), and every component's docs and preview.
If a component renders differently from its preview, fix the port — don't adjust
the CSS to taste. Deviations go to the tracker: https://app.clickup.com/8593845/v/l/li/901115555981.

## Usage rules

- **Use the stock component** from `@/components/ui`, with the props it has —
  the kit's included (Table `density`, Card `variant`, Badge `tone`…; the
  design system's component docs list them). A client extension needs a
  stated reason — a capability neither offers. Don't fork a component to
  style it.
- **Components are code-owned, tokens are design-owned.** Token changes come
  down from the design system (`/ds-apply`); component changes are made
  here and published back (`/ds-sync push`). A component the library
  ships that the system lacks, or a new look for one, is proposed in the
  design system first (`/ds-change`), then built (`/ds-apply`).
- **Screens and compositions are app code**, built from the components and
  tokens; they never go in the design system. They follow its **Patterns**
  section (forms and validation; empty, loading and error states; confirm or
  undo; alert, toast or dialog; navigation): depart from one only for a
  reason stated in the task or PR.
- **Errors pair an icon and a word with colour**, and are written as fixes
  ("Use at least 8 characters", not "Invalid"). Sentence case; no emoji.
- Wrap anything that scales or slides in `motion-safe:`.
- **A state shown only by a fill disappears in Windows high contrast mode**
  (the OS paints every background Canvas). The kit's components are covered
  (the global CSS's `@layer forced-colors`); a custom one that marks
  selected, on or current by background alone adds a border or outline, or a
  `forced-colors:` rule with system colours (`forced-colors:bg-[Highlight]`).

### This project's usage rules

None yet.

## Styling

- Use **only** the Tailwind names in the design system's "Using in code": every
  semantic token is a utility of the same name (`text-label-strong`,
  `bg-status-positive-soft`); text styles are `type-<style>`;
  `p-4` is `space-4`. No hex, no arbitrary colours (`bg-[#…]`), no default
  palette classes (`bg-zinc-…`: the token file turns the palette off, so they
  style nothing). Lint enforces it outside `@/components/ui`:
  `design-system/no-raw-colour` errors (a raw colour or a default palette
  class), `design-system/no-arbitrary-size` warns (`p-[18px]`). An exception is an `eslint-disable` comment with its
  reason; a value the tokens keep missing is a token request to design.
- **Naming clash:** shadcn's `secondary` and `accent` are neutral greys. The
  brand ones are `brand-secondary` and `brand-accent`.
- **Generated, never hand-edited:** `src/styles/ds-tokens.css` and `.ttt/` (the token
  snapshot, the System snapshot, the config). A token change is a design
  change: log a deviation rather than editing a value here.

## Building a screen from a design

A designer hands over a screen as a Figma frame or as an artboard on a
claude.ai Design canvas. Either is a reference for layout, content and
states, not code to keep: both come out as generic markup with raw values.
A screen is app code: the Usage rules and Patterns apply as to any other.
When a designer reviewed the screen against the system first (`/ds-change`'s
screen review), its ticket has a **Design handoff · design-system-kit**
section: the app components to build (options, states, rules, what each is
built from), each screen's build notes, what **needs a dev** (behaviour and
data the drawing can't show), open questions, and the design PR the screen
waits on. Read it before the design, and don't build on a change that PR
makes until it has merged.

**Reading a Figma frame.** `get_design_context` for the node, and
`get_screenshot` to compare against. The frame is built from the design
system's Figma library, which the kit generates from this code, so its names
map straight back: an instance is a component, a variable's code syntax is
`var(--<token name>)`, a text style is `Text/<style>`. Its icons come from
the icon set's own Figma library (Material Symbols', lucide's), not the
system's. Never use the MCP's asset URLs for an icon or the logo. The logo
is the repo's own file, the one Setup and Sync copy from the design
system's Logos; none in the repo is a question for the designer.

**Reading a Design canvas.** Open its link with the Artifact tool (`read`;
never a web fetch): `project/canvas.json` lists the artboards (`title`,
pages, order), each one a `project/<name>.dc.html`. An artboard is HTML
with inline styles. The design system's components appear as
`<x-import component-from-global-scope="<Namespace>.<Comp>">` when the
canvas installed the system's bundle: the name is the component and the
attributes are its props, as in app code (a trigger's `button="outline"` is
`render={<Button variant="outline" />}`; `<Namespace>.Icon name="…"` is the
set's icon of that name). Without it they appear as markup. Its `data-props` editors (a Status enum, a count) are the
states to build; `sc-if`, `sc-for` and `renderVals()` are sample data and
conditions, which become the app's data. `project/ds/<folder>/tokens.json`
is a copy of the system from `copiedAt`, and may lag: this repo's token
file wins.

Then, from either:

1. **Components, not markup.** A library instance, or markup that draws one
   (a button, a pill, tabs, a field), is the stock component from
   `@/components/ui`: same name in Figma (a part `Tabs/Trigger` is
   `TabsTrigger`), same look on a canvas (a status pill is `Badge` with its
   `tone`). Figma's variant properties are its props, except `State`: hover
   and focus come with the component, and disabled or invalid is the prop or
   attribute its docs give. Never rebuild one from divs.
2. **Tokens, not values.** A semantic token, as a variable
   (`var(--label-strong)`), is the utility of that name from "Using in code"
   (`text-label-strong`; `var(--space-4)` is `p-4`); never the variable in
   an arbitrary class. A primitive (`var(--neutral-950)`), a name the system
   doesn't have, or a hex value is the semantic token for that role (text,
   fill, line) whose value matches in this repo's token file: primitives are
   never utilities. Type is a `type-<style>` class, whatever
   font the design loads. No match is a question, not `bg-[#…]` or
   `p-[18px]`: ask, or log a token request. A design's theme or mode is the
   one it was drawn in: the same utilities serve every theme the app has
   (Wireframe is a design mode, not one of them).
3. **Icons from the icon set, by name.** Import the set's icon of that name
   from the icon package the kit's components import from: `lucide-react`,
   or `@material-symbols/svg-<weight>` when the config's `icons` names
   Material Symbols. In Figma it's an instance from the set's library, named
   there (an older library's `Icon/<name>` names one too); on a canvas,
   `<Namespace>.Icon` names it, and an inline SVG is named by its drawing (a
   lucide path is that lucide icon).
   Its colour is the text token where it sits, not the fill it came with. A
   component's own glyphs (a Select's chevron) come with the component.
   `Icon/placeholder` is a slot the designer hasn't filled, and an icon from
   another set isn't this system's: ask, don't guess. Never paste a design's
   SVG (the logo included) and don't add an icon package. Content images (a
   photo, an illustration) may be downloaded into the app's assets.
4. **Check it** in the running app against the screenshot or the artboard,
   in each theme.

## Locale defaults

Locale, week start and date format live in `@/lib/locale` — app code, not
part of the design system. `DatePicker` and `Calendar` default to them; pass
a prop to override one instance. Change the defaults there (import a date-fns
locale only in that file).

## Component rules

- **Field:** `Field` → `FieldLabel` → control → `FieldDescription` /
  `FieldError`; `data-invalid` on the Field, `aria-invalid` on the control.
  Wire `aria-describedby` to the error's id by hand, and focus the first invalid
  control on a failed submit — Field does neither.
- **Loading buttons:** spinner, `disabled` and `aria-busy` together —
  `<Button disabled={saving} aria-busy={saving}>{saving && <Spinner />}Save</Button>`.

### Agreed for this project

None yet.

The design system's inventory says which components exist: `validated` ones are
agreed but not in code yet — don't import them.

## Gotchas already paid for

- **Global CSS outside a layer beats every utility** (Tailwind v4). App-wide
  rules go in `@layer base`: a top-level `*:not(dialog) { margin: 0 }` beats
  `mx-2`, whatever the specificity. `pnpm run ds:validate` names any it finds.
- **Type styles are utilities:** `type-<style> text-sm` takes
  text-sm's size and the rest from the style; `md:type-<style>`
  works.
- **`outline-none` kills focus rings** (Tailwind v4). Focus comes from one
  `:focus-visible` rule in the global CSS.
- **Base UI sets `aria-disabled`, not `disabled`,** on Tabs and Accordion
  triggers — style them with `aria-disabled:`.
- **Renamed event props type-check:** a Radix-style `onSelect` builds and never
  fires; Base UI's is `onClick`. Click it in the browser after primitive changes.
- **Sonner's stylesheet outranks utilities:** anything it sets needs `!` in
  `sonner.tsx`.
- **Vite:** restart the dev server after you change `vite.config.ts` (the
  Tailwind plugin). `build` and `build:safe` both run `vite build`.
- **`data-slot` stays on the element its classes are applied to** — the styling
  maps read the TSX.
- `@tanstack/react-table` stays on v8 (DataTable); v9 drops `useReactTable`.

## Tooling

The kit's tools run from the design-system-kit Claude Code plugin (`/ds-sync`),
not from this repo. The repo carries one: `scripts/ds-validate.mjs` with
`scripts/ds-drift.test.mjs`, its CI check. Fix kit files in the kit.

<!-- end design-system-kit -->
