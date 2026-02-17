import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps, useContext, useState } from 'react';
import { TextInput, View } from 'react-native';
import { InputGroupContext } from './context';

const InputGroup = ({
  className,
  children,
  borderClassName,
  ...props
}: ComponentProps<typeof View> & {
  'aria-invalid'?: boolean;
  borderClassName?: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isError = props['aria-invalid'] === true;

  return (
    <InputGroupContext.Provider value={{ isFocused, isError, setIsFocused }}>
      <View
        className={cn(
          'relative flex-row items-center w-full h-10 rounded-lg bg-background overflow-hidden',
          props['aria-disabled'] && 'opacity-50',
          className,
        )}
        {...props}
      >
        {children}
        <InputGroupBorder className={borderClassName} />
      </View>
    </InputGroupContext.Provider>
  );
};

const InputGroupBorder = ({ className }: { className?: string }) => {
  const { isFocused, isError } = useContext(InputGroupContext);

  let borderClass = 'border border-input';

  if (isError) {
    borderClass = 'border-2 border-destructive';
  } else if (isFocused) {
    borderClass = 'border-2 border-ring';
  }

  return (
    <View
      className={cn(
        'pointer-events-none absolute inset-0 rounded-lg z-50',
        borderClass,
        className,
      )}
    />
  );
};

const inputGroupAddonVariants = cva(
  'items-center justify-center px-2.5 h-full',
  {
    variants: {
      align: {
        'inline-start': 'border-r border-input',
        'inline-end': 'border-l border-input',
        'block-start': 'w-full border-b border-input py-2',
        'block-end': 'w-full border-t border-input py-2',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  },
);

const InputGroupAddon = ({
  className,
  align = 'inline-start',
  children,
  ...props
}: React.ComponentProps<typeof View> &
  VariantProps<typeof inputGroupAddonVariants>) => {
  return (
    <View
      className={cn(inputGroupAddonVariants({ align }), className)}
      {...props}
    >
      {typeof children === 'string' ? (
        <InputGroupText>{children}</InputGroupText>
      ) : (
        children
      )}
    </View>
  );
};

const InputGroupButton = ({
  className,
  variant = 'ghost',
  size = 'xs',
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>) => {
  return (
    <Button
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
};

const inputGroupButtonVariants = cva('items-center gap-2 shadow-none', {
  variants: {
    size: {
      xs: 'h-8 rounded-none px-2.5',
      sm: 'h-9 rounded-none px-3',
      'icon-xs': 'h-8 w-8 rounded-none p-0',
      'icon-sm': 'h-9 w-9 rounded-none p-0',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

const InputGroupText = ({
  className,
  ...props
}: React.ComponentProps<typeof TextInput>) => {
  const { Text } = require('react-native');
  return (
    <Text
      className={cn('text-sm font-medium text-muted-foreground', className)}
      {...props}
    />
  );
};

export * from './input-group-input';

export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText };
