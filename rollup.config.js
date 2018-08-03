import { rollup } from 'rollup';
import minify from 'rollup-plugin-minify-es';
import resolve from 'rollup-plugin-node-resolve';
import glob from 'glob';
import path from 'path';

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

function configureFileBundle(fileName) {
  return [
    {
      input: `src/${fileName}.js`,
      plugins: plugins.full,
      output: {
        file: `dist/${fileName}.js`,
        name: fileName,
        format: 'iife'
      }
    },
    {
      input: `src/${fileName}.js`,
      plugins: plugins.min,
      output: {
        file: `dist/${fileName}.min.js`,
        name: fileName,
        format: 'iife'
      }
    },
    {
      input: `src/${fileName}.js`,
      plugins: plugins.full,
      output: {
        file: `dist/${fileName}.mjs`,
        name: fileName,
        format: 'es'
      }
    },
    {
      input: `src/${fileName}.js`,
      plugins: plugins.min,
      output: {
        file: `dist/${fileName}.min.mjs`,
        name: fileName,
        format: 'es'
      }
    }
  ];
}

async function createBundles(extension, locator) {
  return new Promise(function(resolve, reject) {
    glob(locator, null, function(er, files) {
      if (!er && files) {
        let result = files.reduce(function(prev, curr) {
          let name = path.basename(curr, extension);
          let bundle = configureFileBundle(name);
          let result = prev.concat(bundle);
          return result;
        }, []);
        resolve(result);
      } else {
        reject();
      }
    })
  });
}

export default createBundles('.js', 'src/*.js');
