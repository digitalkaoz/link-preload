import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/_common.js',
    plugins: [
        babel({
            extends: __dirname+"/.babelrc"
        }),
        uglify()
    ],
    output: {
      file: 'index.js',
      format: 'iife',
      name: 'linkPreloadPolyfill'
    }
};
