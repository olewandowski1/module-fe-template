import { Button, cn } from '@module/fe-core';

export const TemplateComponent = () => {
  return (
    <div>
      <h1
        className={cn('text-blue-500', {
          'text-lg': true,
        })}
      >
        Template Component 1
      </h1>
      <Button />
    </div>
  );
};
