// design-system-kit 0.38.0 · profile shadcn · design entry: the themes
//
// The shell's theme switch. Wireframe is the design system's design-only
// theme: main.tsx loads its tokens (themes.css) for the design entry only,
// never for the app. The choice is kept under a key of its own, apart from
// the app's ("theme"), so Wireframe never reaches the app; design.html's
// script reads the same key before the first paint.
export const THEME_KEY = "design-theme";

export const THEMES = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "wireframe", label: "Wireframe" },
];
