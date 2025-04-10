// 1. vite.config.base.ts
// 位置与作用：该文件通常包含通用的配置，所有环境下都会使用的配置项。比如插件的配置、基础路径、构建的公共配置等。这个文件的内容会被其他环境特定的配置文件（如 vite.config.dev.ts 和 vite.config.prod.ts）继承或合并。
// 常见配置：
// 插件：在这个文件中配置的插件会在所有环境下生效。
// 路径别名：可以设置 @ 或其他路径别名，方便在项目中引用。
// 构建输出：如设置输出目录、是否开启代码分割等。
// 为什么使用 base.ts 文件：为了避免每个环境都重复配置相同的东西，可以将这些通用的配置放在 base.ts 中，其他环境的配置文件只需要继承和覆盖个别差异化的部分。

// 2. vite.config.dev.ts
// 位置与作用：该文件包含专门针对开发环境（development）的配置。当你运行开发服务器时（vite 命令），Vite 会读取这个文件中的设置，调整开发模式下的构建配置。例如设置本地开发服务器的代理、热更新等开发特性。
// 常见配置：
// 开发服务器设置：比如端口、热重载、代理等。
// 代理设置：开发模式下，可能需要代理 API 请求（比如将前端请求代理到后端服务器）。
// 环境变量注入：不同环境下的环境变量可以在这里设置。
// 为什么使用 dev.ts 文件：开发模式下的配置通常与生产模式有很大差异，例如开发时需要快速重载代码、开启调试工具等，生产模式下则需要优化代码、进行压缩等。通过单独配置开发环境，使得配置更具可维护性。

// 3. vite.config.prod.ts
// 位置与作用：该文件包含生产环境（production）的配置。当你执行生产打包命令（如 vite build）时，Vite 会使用这个文件的配置来构建最终的项目。生产环境的构建需要关注性能、资源优化、代码压缩等问题。
// 常见配置：
// 压缩和优化：使用插件来压缩代码、图片、字体等资源，减少最终打包文件的大小。
// 环境变量：可以为生产环境注入不同的 API 地址或其他关键配置。
// 静态资源路径：可以设置公共资源的路径，避免生产环境中的路径出错。
// 为什么使用 prod.ts 文件：生产环境需要进行更多的优化，比如代码压缩、缓存优化等，而开发环境需要更多的调试信息和热更新支持。分开配置使得环境之间的设置更加清晰，且可维护性更强。


import { resolve } from 'path'; // resolve：是 Node.js 的 path 模块的一个方法，用于解析文件路径。通常用于指定别名时，确保路径是绝对路径。
import { defineConfig } from 'vite'; // 是 Vite 提供的一个函数，用于定义配置文件，增强类型推导和编辑器支持。
import vue from '@vitejs/plugin-vue'; // 这是官方插件，用于支持 Vue 3 的单文件组件（.vue 文件）处理。
import vueJsx from '@vitejs/plugin-vue-jsx'; // 这是官方插件，用于在 Vue 3 中支持 JSX 语法。
import svgLoader from 'vite-svg-loader'; // 是一个用于加载 SVG 文件的插件，可以将 SVG 文件直接作为组件使用。
import configArcoStyleImportPlugin from './plugin/arcoStyleImport'; // 这是一个自定义插件，应该是你自己在项目中配置的，用于控制 Arco Design 的样式按需引入。

export default defineConfig({
  server:{ // 这是开发服务器的相关配置。
    port:6888 // 设置开发服务器的端口号为 6888。即开发时运行 vite 时，会在浏览器中打开 http://localhost:6888。
  },
  plugins: [
    vue(), // vue(): 启用 Vue 3 插件，允许 Vite 处理 .vue 文件。
    vueJsx(), //  启用 Vue JSX 插件，支持在 Vue 中使用 JSX 语法。
    svgLoader({ svgoConfig: {} }), // 启用 SVG 加载器插件，用于将 SVG 文件加载为 Vue 组件。svgoConfig 是用于配置 SVG 优化的参数，可以在此处设置相关优化。
    configArcoStyleImportPlugin(), // 这是你自定义的插件，应该是为了按需加载 Arco Design 的样式。这个插件的作用一般是通过按需引入的方式，减少不必要的 CSS，提升打包效率。
  ],
  resolve: { // resolve用于配置模块解析的一些规则。
    alias: [ // 通过别名来简化路径引用。例如：
      {
        find: '@', // '@': 将 @ 映射到 src 目录。这样可以在代码中直接使用 @/components 来代替 ../../src/components，提高代码可读性。
        replacement: resolve(__dirname, '../src'),
      },
      {
        find: 'assets', // 将 assets 映射到 src/assets 目录，方便引用。
        replacement: resolve(__dirname, '../src/assets'),
      },
      {
        find: 'vue-i18n', //  解决 vue-i18n 库的一些警告问题，指向其 CommonJS 版本。
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js', // Resolve the i18n warning issue
      },
      {
        find: 'vue', // 设置 Vue 的别名，使得在 Vite 中正确地编译模板。这里指向了 Vue 的 ESM 构建版本，保证 Vue 代码正确处理。
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.ts', '.js'], // 指定在模块导入时，如果没有提供文件扩展名，自动尝试解析 .ts 和 .js 文件。
  },
  define: { // define: 用于在编译过程中定义全局常量。这些常量会在编译时直接替换为指定的值。
    'process.env': {}, // 清空 process.env，这通常是为了避免前端代码中不必要的 process.env 引用，或者防止某些库误用 process.env。
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false' //  这是一个 Vue 的生产模式相关的配置，设置为 false 用来禁用 Vue 生产环境下的“水合不匹配详细信息”警告

  },
  css: { // 这是对 CSS 相关配置的设置，主要影响 CSS 编译和处理。
    preprocessorOptions: { // 用于配置 CSS 预处理器选项。在这里使用的是 less 预处理器。
      less: {
        modifyVars: { // modifyVars 通过修改 LESS 变量来定制样式。这里引用了一个 breakpoint.less 文件，并通过 @import (reference) 的方式让它在全局中生效。
          hack: `true; @import (reference) "${resolve(
            'src/assets/style/breakpoint.less'
          )}";`,
        },
        javascriptEnabled: true, // javascriptEnabled: 启用 JavaScript，这样 LESS 中可以执行 JavaScript 表达式，确保某些功能正常工作。
      },
    },
  },
});
