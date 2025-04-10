
const filePath = new URL('', import.meta.url).pathname
console.log(filePath,'此文件开始执行.....')
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/store';


// 这段代码定义了一个自定义 Hook usePermission，用于处理用户权限相关逻辑。
// 通过这个自定义 Hook，可以方便地在路由守卫中进行用户权限验证，
// 并根据用户角色找到合适的路由进行重定向。同时，你也可以根据实际需求在 usePermission 中添加其他权限相关的方法和规则。


export default function usePermission() {
  // 使用 useUserStore Hook 获取用户存储对象，用于获取用户的角色信息。
  const userStore = useUserStore();
  
  // return { ... }：返回一个包含两个方法的对象： 
  return {


    // 用于检查用户是否有权限访问指定的路由。它接收一个路由对象作为参数，
    // 并根据路由的元信息（meta）中定义的角色信息进行判断。
    // 表示用户有权限访问该路由，否则返回 false。
    accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
      const res =  ( 
        !route.meta?.requiresAuth || // 如果路由不需要验证权限（requiresAuth 为 false）
        !route.meta?.roles || 
        route.meta?.roles?.includes('*') ||
        route.meta?.roles?.includes(userStore.role) // 或用户角色包含在路由允许的角色列表中，则返回 true，
      ); 
      console.log(filePath,'开始判断要跳转路由的meta信息',JSON.stringify(route.meta),'是否有跳转权限',res)
      return res
    },

    // 用于查找用户在当前角色下的第一个有权限访问的路由。
    // 它接收路由配置数组 _routers 和用户角色 role 作为参数，并遍历路由配置数组，
    // 查找第一个满足用户角色要求的路由。如果找到了符合条件的路由，则返回该路由对象；
    // 如果没有找到符合条件的路由，则返回 null。
    findFirstPermissionRoute(_routers: any, role = 'admin') {
      const cloneRouters = [..._routers];
      while (cloneRouters.length) {
        const firstElement = cloneRouters.shift();
        if (
          firstElement?.meta?.roles?.find((el: string[]) => {
            return el.includes('*') || el.includes(role);
          })
        )
          return { name: firstElement.name };
        if (firstElement?.children) {
          cloneRouters.push(...firstElement.children);
        }
      }
      return null;
    },
    // You can add any rules you want
  };
}
