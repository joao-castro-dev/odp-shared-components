import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import sass from "sass";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      // terser(),
      postcss({
        extract: true,
        minimize: true,
        sourceMap: true,
        extensions: [".scss", ".css"],
        parser: require("postcss-scss"),
        use: [["sass", { implementation: sass }]],
      }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
  },
];
