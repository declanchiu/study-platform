import type { UserConfig, ConfigEnv } from 'vite';

import { resolve } from 'path';
import { createVitePlugin } from './build/vite/plugin/index';

function pathResolve(dir: string) {
  return resolve('', '.', dir);
}

export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  return {
    plugins: createVitePlugin(isBuild),
    server: {
      strictPort: false,
      port: 3039,
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    define: {
      'process.env': {},
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  };
};
