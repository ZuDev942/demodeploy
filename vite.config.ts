import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, './') };

  return defineConfig({
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': '#00904a',
          },
          javascriptEnabled: true,
        },
        scss: {
          additionalData: `
              @import "./src/assets/styles/common/_variable.scss";
            `,
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      port: parseInt(process.env.VITE_APP_PORT) || 3000,
    },
  });
};
