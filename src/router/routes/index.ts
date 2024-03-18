
// 从 Vue Router 中导入 RouteRecordNormalized 类型，表示路由记录的规范化表示。
import type { RouteRecordNormalized } from 'vue-router';


// 通过 import.meta.glob 方法来动态导入模块文件，并将它们格式化成路由记录（RouteRecordNormalized）数组。让我们逐步解释它：

// 使用 import.meta.glob 方法动态导入位于 ./modules 目录下的所有 .ts 文件，并将结果存储在 modules 变量中。{ eager: true } 参数表示在应用启动时立即执行导入，而不是等到需要时再导入。
const modules = import.meta.glob('./modules/*.ts', { eager: true });

// 类似的 使用 import.meta.glob 方法动态导入位于 ./externalModules 目录下的所有 .ts 文件，并将结果存储在 externalModules 变量中。
const externalModules = import.meta.glob('./externalModules/*.ts', {
  eager: true,
});

// 定义了一个名为 formatModules 的函数，用于格式化导入的模块列表，
// 并将其添加到路由记录数组中。它接收两个参数： _modules 表示导入的模块列表，result 表示待格式化的路由记录数组。
function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  
  // console.log("模块列表",_modules)
  // console.dir(_modules)
  // 遍历导入的模块列表 _modules 中的键（模块文件路径）。
  Object.keys(_modules).forEach((key) => {

    // 获取当前模块的 default 导出。
    const defaultModule = _modules[key].default;
    console.log('defaultModule',defaultModule)

    // 如果模块没有默认导出，则跳过当前模块的处理。
    if (!defaultModule) return;

    // 将默认导出转换为数组形式，以便处理多个路由记录的情况。
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    // 将当前模块的路由记录列表添加到 result 数组中。
    result.push(...moduleList);
  });
  return result; // 返回格式化后的路由记录数组。

}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, []);

export const appExternalRoutes: RouteRecordNormalized[] = formatModules(
  externalModules,
  []
);
