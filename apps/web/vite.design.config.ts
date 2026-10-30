// design-system-kit 0.37.2 · profile shadcn · wiring (Vite): design build
/**
 * The app's own Vite config with the design entry (`design.html`) as a second
 * page, for a hosted preview deploy: `build:design` runs `vite build --config
 * vite.design.config.ts`. The app's `vite build` never reads this file, so it
 * still builds only `index.html` and the design entry never ships to
 * production. Beside `vite.config.ts`, in `tsconfig.node.json`'s `include`.
 */
import { fileURLToPath } from "node:url";
import { defineConfig, type ConfigEnv, type UserConfigExport } from "vite";
import app from "./vite.config";

const page = (name: string) => fileURLToPath(new URL(name, import.meta.url));
// Any form vite.config exports: an object, a promise, or a function of the command and mode.
const resolveConfig = async (config: UserConfigExport, env: ConfigEnv) =>
  typeof config === "function" ? config(env) : config;

export default defineConfig(async (env) => {
  const config = await resolveConfig(app, env);
  // The app's own pages, if it names them; otherwise Vite's default, index.html.
  const own = config.build?.rollupOptions?.input;
  const pages =
    own == null
      ? { index: page("index.html") }
      : typeof own === "string"
        ? { index: own }
        : Array.isArray(own)
          ? Object.fromEntries(own.map((p, i) => [`page${i}`, p]))
          : own;
  return {
    ...config,
    build: {
      ...config.build,
      rollupOptions: {
        ...config.build?.rollupOptions,
        input: { ...pages, design: page("design.html") },
      },
    },
  };
});
