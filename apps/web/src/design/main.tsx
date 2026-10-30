// design-system-kit 0.37.3 · profile shadcn · design entry: the start
//
// The app's global CSS (Tailwind, the theme block, the tokens and fonts) and
// the theme provider, then the shell. Nothing else of the app: its router,
// providers and env check never run here, so the page works with nothing set
// up. The first import is the app's global CSS (components.json →
// tailwind.css), where the starter template keeps it; Setup points it
// elsewhere when the app's is elsewhere. Then the design-only themes
// (themes.css, Wireframe), which ds-tokens.mjs generates with the app's token
// file: the design entry is the one place in the app that loads them. The
// theme provider knows them too, under a storage key of its own, so choosing
// Wireframe here never reaches the app.
import "@/config/global.css";
import "./themes.css";
import "./design.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider";
import { DesignShell } from "./shell";
import { THEME_KEY, THEMES } from "./theme";

const root = document.getElementById("root");
if (root)
  createRoot(root).render(
    <StrictMode>
      <ThemeProvider themes={THEMES.map((t) => t.value)} storageKey={THEME_KEY}>
        <DesignShell />
      </ThemeProvider>
    </StrictMode>,
  );
