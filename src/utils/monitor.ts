const filePath = new URL('', import.meta.url).pathname
console.log(filePath,'此文件开始执行.....')

import { App, ComponentPublicInstance } from 'vue';
import axios from 'axios';

export default function handleError(Vue: App, baseUrl: string) {
  if (!baseUrl) {
    return;
  }
  Vue.config.errorHandler = (
    err: unknown,
    instance: ComponentPublicInstance | null,
    info: string
  ) => {
    // send error info
    axios.post(`${baseUrl}/report-error`, {
      err,
      instance,
      info,
      // location: window.location.href,
      // message: err.message,
      // stack: err.stack,
      // browserInfo: getBrowserInfo(),
      // user info
      // dom info
      // url info
      // ...
    });
  };
}
