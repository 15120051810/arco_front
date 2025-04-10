import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';

// 在 Pinia 中的使用
// 1 通常，我们会 默认导出 pinia 实例，具名导出多个 store：
// 2 在 main.ts 中 导入 pinia 并使用 

// 用于创建和配置 Pinia store，并导出 store 实例和相关的 store 模块。以下是详细解释：

const pinia = createPinia(); // 创建一个 Pinia 实例，这是Pinia的核心store实例，用于管理应用中的所有 store。
// 导出 store 模块，允许其他模块通过导入这些 store 模块来访问它们的状态和方法。
export { useAppStore, useUserStore, useTabBarStore }; // 多个sore

// 导出 Pinia 实例，以便在应用中使用，例如在 main.ts 中将 Pinia 实例传递给 Vue 应用。
export default pinia; 
