import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';


// mergeConfig 函数的工作原理
// mergeConfig 函数接收两个参数：baseConfig 和 overrideConfig。
// 它将 overrideConfig 中的配置项合并到 baseConfig 中，如果有冲突，overrideConfig 中的配置项会覆盖 baseConfig 中的相应项。

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      fs: {
        strict: true,
      },
    },
    plugins: [
    ],
  },
  baseConfig
);
