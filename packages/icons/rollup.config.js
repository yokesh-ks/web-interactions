import { babel } from "@rollup/plugin-babel";
import fileSize from "rollup-plugin-filesize";

const config = {
  input: "src/index.js",
  output: {
    dir: "dist/index.esm.js",
    format: "esm",
  },
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    babel({
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    fileSize(),
  ],
};

export default config;
