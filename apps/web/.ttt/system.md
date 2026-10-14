# System

How Homeward is set up. The rules every TTT design system follows live in the kit, not here.

| | |
|---|---|
| **Versions** | schema `ttt-ds/1` · profile `shadcn` 1.11 · kit 0.16.0 |
| **Editors** | Angelli Dimatulac, Diana — anyone with edit access can update it; add more from its Share menu |
| **Code** | [angellittt/kit-sandbox-homeward](https://github.com/angellittt/kit-sandbox-homeward), app `apps/web` · config `.ttt/design-system.json` |
| **Figma** | [Homeward — Design System](https://www.figma.com/design/bKpKPW0E8HLfmotzHOp9vv) · file key `bKpKPW0E8HLfmotzHOp9vv` · not yet published as a library |
| **Tracker** | https://app.clickup.com/8593845/v/l/li/901115555981 |
| **Components** | 0 implemented · 38 validated |
| **Guide** | [How to use the design system kit](https://claude.ai/artifact/CXAdV2SCptjbrijSaaUpPz): what Setup asks, and what each `/ds-sync` command does |

**Homeward-specific choices** — client extensions, client-added ramps and decisions that differ from the profile, one line each.

- Global CSS at `src/config/global.css` (the profile's default is `src/styles/globals.css`) — the starter's existing entry CSS.

**Provisional** — inputs still standing in for the client's own, one line each, with where they came from; `/ds-sync restyle` replaces them.

- `brand.primary` — kit default (placeholder `#2f4bda`)
- `brand.secondary` — kit default (placeholder `#41c8bd`)
- `brand.accent` — kit default (placeholder `#f0bf4c`)
- `neutralTint` — kit default (TTT cool grey)
- `fonts` — kit default (system stack)
- `logo` — kit default (none; the cover shows the name)
- `guidelines` — kit default (TTT default principles and voice)
- `radius` — kit default
- `motion` — kit default
- `status.positive` — kit default (TTT green)
- `status.cautionary` — kit default (TTT amber)
- `status.negative` — kit default (TTT red)
- `clientRamps` — kit default (none)
- `cover` — kit default (summary as tagline, no motif)

**Open deviations** — none.
