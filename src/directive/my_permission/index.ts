import { DirectiveBinding } from 'vue';
import { useUserStore } from '@/store';

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding;
  const userStore = useUserStore();
  const { permission } = userStore;

  if (typeof value === 'string') {

    console.log('判断权限---->',value)
    console.log('该用户所有权限---->',permission)

    const hasPermission = permission.includes(value);
    if (!hasPermission && el.parentNode) {
      el.parentNode.removeChild(el);
    }

  } else {
    throw new Error(`v-permission 的值必须是字符串，例如：v-has="'admin'"`);
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
