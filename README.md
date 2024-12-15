## Introduction

The `module-fe-template` is a template module designed to provide a starting point for creating new modules in the modular app architecture. This template module includes the necessary configuration and structure to ensure consistency and reusability across different modules.

### Purpose

The primary purpose of the `template` module is to:

- Provide a standardized starting point for new modules.
- Ensure consistency and reusability across different modules.
- Serve as a reference for creating new modules.

## Tech Stack

The `template` module leverages modern technologies to create a robust and efficient development environment:

- Foundation: **React 19 with TypeScript**
- Build Tool: **Vite 6**
- Styling: **Tailwind CSS**
- UI Library: **shadcn/ui**
- State Management: **Zustand**

## Getting Started

To get started with the `module-fe-template` module, follow these steps:

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/olewandowski1/module-fe-template
   cd module-fe-template
   ```

### Installing Dependencies

2. Install the required dependencies:
   ```bash
   pnpm install
   ```

### Linking Modules for Development

3. Link `template` for local development. First, create a link from the `template` package. Then, inside the `assembly` module, link it.

   ```bash
   pnpm link --global

   cd ../module-fe-assembly
   pnpm link --global @module/fe-template
   ```

### Enable HMR

4. Start the Vite development server to enable Hot Module Replacement (HMR) by running the following command.

   ```bash
   pnpm start
   ```

## How-To?

### How to modify the App theme?

- The `module-fe-template` module uses Tailwind CSS for styling. **NOTE:** You can modify the `core-tailwind-preset.ts` file (`core` module), which is distributed to all linked modules (linked to `assembly`). If you want to overwrite any value, you can do it through the `tailwind.config.ts` file.

### How to create a new route?

- First, you need to define a **unique** path inside the `routes.ts` file (`ROUTE_PATHS` constant).

  - **Static Routes**: You can define static routes inside the `/services/router.ts` file. **NOTE**: Defining a static route is possible only in `core` module.
  - **Dynamic Routes**: You can export a dynamic route from the `index.tsx` file. It will be fetched from the module and initialized inside the Router.

### How to handle new translation?

- To handle a new translation, you need to add a new entry to the `en.json` file. In the `template` module, this has to be in a namespace called `template`. The pattern for adding it is `COMPONENT_NAME.DETAIL`. Then, you can use the `formatMessage` function to utilize the new translation.

  - Example:
    ```json
    // locales/en.json
    {
      "template": {
        "TemplateComponent.welcome": "Welcome from the `fe-template` TemplateComponent component.",
        "NewComponent.message": "This is a new message for the NewComponent."
      }
    }
    ```
  - Usage:

    ```typescript
    import { formatMessage } from '@/lib/translations';

    // components/new-component.tsx
    const NewComponent = () => {
      return (
        <div>
          <p>{formatMessage('template', 'NewComponent.message')}</p>
        </div>
      );
    };
    ```
