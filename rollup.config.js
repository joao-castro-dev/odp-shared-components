import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import fs from "fs";
import path from "path";
import pkg from "./package.json";

const components = fs
    .readdirSync("./src/components")
    .filter((name) =>
        fs.statSync(path.join("./src/components", name)).isDirectory()
    );

export default [
    ...components.map((component) => ({
        input: `src/components/${component}/index.tsx`,
        output: [
            {
                file: `dist/components/${component}/index.js`,
                format: "cjs",
                exports: "named",
            },
            {
                file: `dist/components/${component}/index.es.js`,
                format: "es",
                exports: "named",
            },
        ],
        plugins: [
            postcss({
                modules: true,
            }),
            external(),
            babel({
                babelHelpers: "bundled",
                exclude: "node_modules/**",
            }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
        external: Object.keys(pkg.peerDependencies || {}),
    })),
    {
        input: "src/index.ts",
        output: [{ file: pkg.types, format: "es" }],
        plugins: [dts()],
    },
];