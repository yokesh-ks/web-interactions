import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import posthtml from "rollup-plugin-posthtml-multi";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import fileSize from "rollup-plugin-filesize";

import PropTypes from "prop-types";
import React from "react";

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
        exports: "named",
      },
    ],
    plugins: [
      external(),
      resolve(),
      terser(),
      posthtml({
        watch: true,
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
          "react": Object.keys(React),
          "prop-types": Object.keys(PropTypes),
          "styled-components": ["styled", "css", "ThemeProvider"],
        },
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      fileSize(),
    ],
  },
];
