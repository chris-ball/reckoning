import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  shims: true,
  dts: true,
  clean: true,
  treeshake: true,
  skipNodeModulesBundle: true,
})
