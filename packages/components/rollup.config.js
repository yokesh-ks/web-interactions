import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import posthtml from "rollup-plugin-posthtml-multi";
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: "./index.js",
    output: [
      {
        file: "./dist/index.js",
        format: "cjs",
      },
      {
        file: "./dist/index.es.js",
        format: "es",
        exports: 'named',
      },
    ],
    plugins: [
      external(),
      resolve(),
      terser(),
      posthtml({
        watch: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
    ],
  },
];
