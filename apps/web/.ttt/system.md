# System

How Homeward is set up. The rules every TTT design system follows live in the kit, not here.

| | |
|---|---|
| **Versions** | schema `ttt-ds/1` · profile `shadcn` 1.12 · kit 0.23.1 |
| **Editors** | Angelli Dimatulac, Diana — anyone with edit access can update it; add more from its Share menu |
| **Code** | [angellittt/kit-sandbox-homeward](https://github.com/angellittt/kit-sandbox-homeward), app `apps/web` · config `.ttt/design-system.json` |
| **Figma** | [Homeward — Design System](https://www.figma.com/design/bKpKPW0E8HLfmotzHOp9vv) · file key `bKpKPW0E8HLfmotzHOp9vv` · not yet published as a library |
| **Tracker** | https://app.clickup.com/8593845/v/l/li/901115555981 |
| **Components** | 39 implemented · 0 validated |
| **Guide** | [How to use the design system kit](https://claude.ai/artifact/CXAdV2SCptjbrijSaaUpPz): what Setup asks, and which command to run when, for designers and devs |

**Homeward-specific choices** — client extensions, client-added ramps and decisions that differ from the profile, one line each.

- Global CSS at `src/config/global.css` (the profile's default is `src/styles/globals.css`) — the starter's existing entry CSS.
- `on-primary` is ink (`neutral-10`) and `primary-strong` lightens to `brand-primary-60` on hover — the brand primary (Vibrant Coral since 2026-10-15) is too light for white labels (designer's choice at restyle, 2026-10-14; still holds after the coral restyle).
- Figma font for `mono`: JetBrains Mono — on the system stack in code.

**Provisional** — inputs still standing in for the client's own, one line each, with where they came from; `/ds-change` replaces them.

- `brand.primary` — Vibrant Coral `#F25C54`, extracted: coral palette image
- `brand.secondary` — Tangerine Dream `#F79D65`, extracted: coral palette image
- `brand.accent` — Amber `#F2A541`, extracted: designer's pick in /ds-change on 2026-10-19, warmer than the coral palette's Light Caramel
- `fonts` — mono only: kit default (system stack); display Nunito and sans Inter are decided
- `logo` — kit default (none; the cover shows the name)

**Open deviations** — none.
