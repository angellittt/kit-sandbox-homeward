// design-system-kit 0.38.0 · profile shadcn · wiring: theme switching
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * next-themes writes data-theme="light" | "dark" on <html>, which is what the
 * generated token file keys off; despite the name, it doesn't need Next.js.
 * Wrap the app in it once, in the root render in `main.tsx`
 * (`<ThemeProvider><App /></ThemeProvider>`).
 *
 * Before the first paint: React renders next-themes' own script on the
 * client, where it never runs, so the kit's theme script at the top of
 * index.html's <head> sets the theme instead, from the same storage key
 * ("theme") and default ("system").
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      // Colours and shadows change with the theme; animating them mid-switch
      // reads as a flash rather than a transition.
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
