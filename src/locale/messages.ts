import {enMessage} from "@/locale/en-us";
import {zhMessage} from "@/locale/zh-cn";
import enLocale from 'element-plus/lib/locale/lang/en';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';

export const messages = {
  en: {
    el: enLocale.el,
    message: enMessage
  },
  [zhLocale.name]: {
    el: zhLocale.el,
    message: zhMessage
  }
}