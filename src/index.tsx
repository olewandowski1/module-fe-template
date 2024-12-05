// Import global styles
import '@node_modules/@module/fe-core/src/styles/globals.css';

import { TemplateComponent } from '@/components/template-component';

// Main entry point for the module, include all configurations here
const TEMPLATE_MODULE_CONFIG = {
  contributionExample: ['TemplateComponent'],
};

// Export all components and utils to be used by other modules
export { TemplateComponent };

export default TEMPLATE_MODULE_CONFIG;
