// 前沿 
// 这段代码用于动态导入和格式化应用路由模块，并将它们组织成 RouteRecordNormalized[] 类型的数组。以下是详细解释：

// 从 Vue Router 中导入 RouteRecordNormalized 类型，用于表示标准化的路由记录。
import type { RouteRecordNormalized } from 'vue-router';
const filePath = new URL('', import.meta.url).pathname 
console.log(filePath,'此文件开始执行.....')


// import.meta.glob : Vite 特性，用于动态导入符合指定模式的所有模块。
// 使用 import.meta.glob 方法动态导入位于 ./modules 目录下的所有 .ts 文件，并将结果存储在 modules 变量中。{ eager: true } 参数表示在应用启动时立即执行导入，而不是等到需要时再导入。
const modules = import.meta.glob('./modules/*.ts', { eager: true });


// 类似的 使用 import.meta.glob 方法动态导入位于 ./externalModules 目录下的所有 .ts 文件，并将结果存储在 externalModules 变量中。
const externalModules = import.meta.glob('./externalModules/*.ts', {
  eager: true,
});

// 定义了一个名为 formatModules 的函数，用于格式化导入的模块列表，
// 并将其添加到路由记录数组中。它接收两个参数： 
    // _modules 表示导入的模块列表对象，键是模块路径，值是模块的内容。
    // result 存储格式化后的路由记录的数组。
function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  
  // console.log("模块列表",_modules)
  // console.dir(_modules)
  // 遍历导入的模块列表 _modules 中的键（模块文件路径）。
  Object.keys(_modules).forEach((key) => {

    // 模块的默认导出，假设是一个路由记录数组或单个路由记录。获取当前模块的 default 导出。
    const defaultModule = _modules[key].default;

    // 输出的defaultModule-> {"path":"/dashboard","name":"dashboard","meta":{"locale":"menu.dashboard","requiresAuth":true,"icon":"icon-dashboard","order":0},"children":[{"path":"workplace","name":"Workplace","meta":{"locale":"menu.dashboard.workplace","requiresAuth":true,"roles":["*"]}}]}
    // console.log('defaultModule',JSON.stringify(defaultModule))

    // 如果模块没有默认导出，则跳过当前模块的处理。
    if (!defaultModule) return;

    // 将默认导出转换为数组形式，以便处理多个路由记录的情况。
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    // 将模块的路由记录列表添加到 result 数组中。
    result.push(...moduleList);
  });
  console.log(filePath,'格式化后的路由数组',result)
  return result; // 返回格式化后的路由记录数组。

}

// 调用 formatModules 函数，将 modules 和 externalModules 中的路由记录格式化为标准的 RouteRecordNormalized[] 类型数组。
// debugger;
console.log('Current module:', import.meta.url);
console.trace('Tracking the import origin');  // 记录调用栈
export const appRoutes: RouteRecordNormalized[] = formatModules(modules, []);
// debugger;
console.log(filePath,'appRoutes',appRoutes) // 输出结果 [{},{},{}] 元素是一个个的defaultModule路由信息
export const appExternalRoutes: RouteRecordNormalized[] = formatModules(
  externalModules,
  []
);
console.log(filePath,'appExternalRoutes',appExternalRoutes) // 输出结果 [{},{},{}] 元素是一个个的defaultModule路由信息


// 总结
// 动态导入：使用 Vite 的 import.meta.glob 动态导入所有匹配的路由模块。
// 格式化模块：通过 formatModules 函数，将模块中的路由记录整理为 RouteRecordNormalized[] 数组。
// 导出路由：将格式化后的路由记录数组 appRoutes 和 appExternalRoutes 导出，用于应用中的路由配置。
// 这段代码使得路由配置的管理变得更加模块化和灵活，允许通过动态导入模块来组织和维护路由。