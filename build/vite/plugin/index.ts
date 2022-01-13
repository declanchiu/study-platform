import type { Plugin } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';

export function createVitePlugin(isBuild: boolean) {
  console.log('isBuild', isBuild);
  const vitePlugin: (Plugin | Plugin[])[] = [reactRefresh()];

  return vitePlugin;
}
