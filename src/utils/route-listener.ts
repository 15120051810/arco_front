/**
 * Listening to routes alone would waste rendering performance. Use the publish-subscribe model for distribution management
 * 单独监听路由会浪费渲染性能。使用发布订阅模式去进行分发管理。
 */

// 从第三方库 mitt 中导入 mitt 函数和 Handler 类型，用于创建一个事件发射器和事件处理器。
import mitt, { Handler } from 'mitt';
// 从 Vue Router 中导入 RouteLocationNormalized 类型，用于定义规范化的路由位置。它包含了路由的各种信息，如路径、参数、查询等。
import type { RouteLocationNormalized } from 'vue-router';

// 创建一个事件发射器实例，用于管理路由变化事件的发布和订阅。
const emitter = mitt();

// 定义了一个唯一的符号作为路由变化事件的标识符。
const key = Symbol('ROUTE_CHANGE');

// 声明一个变量 latestRoute，用于存储最新的路由位置。
let latestRoute: RouteLocationNormalized;


// 定义了一个名为 setRouteEmitter 的函数，用于设置路由变化事件的发布。它接收一个 RouteLocationNormalized 类型的参数 to，表示当前的路由位置。
export function setRouteEmitter(to: RouteLocationNormalized) {

  // emitter.emit(key, to) 通过事件发射器 emitter 发布路由变化事件，将当前路由位置作为参数传递给订阅者。
  emitter.emit(key, to);
  console.log('路由改变emit触发-->to', key, to)
  latestRoute = to; // latestRoute = to; 将当前路由位置保存到 latestRoute 变量中，以便在订阅时立即执行处理函数。
}


// 定义了一个名为 listenerRouteChange 的函数，用于监听路由变化事件，并在路由变化时执行相应的处理函数。
export function listenerRouteChange(
  
  handler: (route: RouteLocationNormalized) => void, // 这是参数 handler 的类型定义，它是一个接受 RouteLocationNormalized 类型参数的函数，并且不返回任何值。
  immediate = true // 这是函数的第二个参数 immediate 的默认值，默认为 true。这个参数用于指定是否在添加监听器时立即执行处理函数。
) {
  emitter.on(key, handler as Handler); // 通过事件发射器 emitter 订阅路由变化事件，注册处理函数 handler。
  console.log('路由改变，订阅消息emitter.on', key, latestRoute)

  if (immediate && latestRoute) { //如果设置了立即执行且存在最新的路由位置，则立即调用处理函数 handler 并传入最新的路由位置。
    handler(latestRoute);
  }
}
// 定义了一个名为 removeRouteListener 的函数，用于移除路由变化事件的监听器。
export function removeRouteListener() {
  // 通过事件发射器 emitter 移除路由变化事件的所有监听器。
  emitter.off(key);
}
