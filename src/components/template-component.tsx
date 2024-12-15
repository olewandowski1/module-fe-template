import { cn, formatMessage } from '@module/fe-core';

export const TemplateComponent = () => {
  return (
    <div>
      <h1
        className={cn('text-blue-500', {
          'text-lg': true,
        })}
      >
        {formatMessage('template', 'TemplateComponent.welcome')}
      </h1>
    </div>
  );
};
