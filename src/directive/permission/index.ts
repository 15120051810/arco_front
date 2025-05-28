import { DirectiveBinding } from 'vue';
import { useUserStore } from '@/store';

// 使用角色权限
function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding;
  const userStore = useUserStore();
  const { role } = userStore;

  if (Array.isArray(value)) {
    if (value.length > 0) {
      const permissionValues = value;
      // 前端传入一个角色数组，比如 ['admin', 'superuser']，只要其中一个角色出现在 userStore.role 里，就判定为有权限。
      const hasPermission = permissionValues.some(r => role.includes(r));
      if (!hasPermission && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','user']"`);
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
};
