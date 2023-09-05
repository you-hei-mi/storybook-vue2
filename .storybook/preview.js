/** @type { import('@storybook/vue').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

import { Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 在这里注册您要使用的组件
export const storybook = {
  global: {
    components: {
      Button,
    },
  },
};