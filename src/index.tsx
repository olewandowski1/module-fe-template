// Import global styles
import '@node_modules/@module/fe-core/src/styles/globals.css';

import { TemplateComponent } from '@/components/template-component';
import { Ref } from '@module/fe-core';

// Main entry point for the module, include all configurations here
const TEMPLATE_MODULE_CONFIG = {
  refs: [
    {
      key: 'template-component',
      value: TemplateComponent,
    },
  ] as Ref[],
};

export default TEMPLATE_MODULE_CONFIG;
