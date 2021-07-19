import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import vitePluginImp from 'vite-plugin-imp';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

module.exports = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vitePluginImp({
      libList: [
        {
          libName: 'vant',
          style(name) {
            if (/CompWithoutStyleFile/i.test(name)) {
              // This will not import any style file
              return false;
            }
            return `vant/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  ],
  alias: {
    '@': pathResolve('./src'),
  },
});
