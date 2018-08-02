import { rollup } from 'rollup';
import minify from 'rollup-plugin-minify-es';
import resolve from 'rollup-plugin-node-resolve';

let fileName = 'demo';
let objName = 'Demo';

let plugins = {
  full: [
    resolve()
  ],
  min: [
    resolve(),
    minify({
      output: {
        wrap_iife: true
      }
    })
  ]
};


export default [
  {
    input: `src/${fileName}.js`,
    plugins: plugins.full,
    output: {
      file: `dist/${fileName}.js`,
      name: objName,
      format: 'iife'
    }
  },
  {
    input: `src/${fileName}.js`,
    plugins: plugins.min,
    output: {
      file: `dist/${fileName}.min.js`,
      name: objName,
      format: 'iife'
    }
  },
  {
    input: `src/${fileName}.js`,
    plugins: plugins.full,
    output: {
      file: `dist/${fileName}.mjs`,
      name: objName,
      format: 'es'
    }
  },
  {
    input: `src/${fileName}.js`,
    plugins: plugins.min,
    output: {
      file: `dist/${fileName}.min.mjs`,
      name: objName,
      format: 'es'
    }
  },
];
