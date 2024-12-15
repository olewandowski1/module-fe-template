// Import global styles
import '@node_modules/@module/fe-core/src/styles/globals.css';

import { TemplateComponent } from '@/components/template-component';
import en from '@/locales/en.json';
import { Ref, Route, ROUTE_PATHS } from '@module/fe-core';

// Main entry point for the module, include all configurations here
const TEMPLATE_MODULE_CONFIG = {
  translations: { en },
  refs: [
    {
      key: 'template-component',
      value: TemplateComponent,
    },
  ] as Ref[],
  routes: [
    {
      path: ROUTE_PATHS.TEMPLATE._SELF,
      component: TemplateComponent,
    },
  ] as Route[],
};

export default TEMPLATE_MODULE_CONFIG;
