import { cn } from '@/lib/utils';
import { IosTextInput, type IosTextInputProps } from '@/modules/ios-text-input';
import { RefAttributes, useContext } from 'react';
import { TextInput, View } from 'react-native';
import { useResolveClassNames } from 'uniwind';
import { InputGroupContext } from './context';

export type InputGroupInputProps = IosTextInputProps & {
  className?: string;
};

const InputGroupInput = ({
  className,
  onFocus,
  onBlur,
  ...props
}: InputGroupInputProps & RefAttributes<TextInput>) => {
  const { setIsFocused } = useContext(InputGroupContext);
  const style = useResolveClassNames(
    cn(
      'flex-1 bg-transparent text-base leading-5 text-foreground placeholder:text-muted-foreground py-0 focus:outline-none lg:text-sm h-full',
      className,
    ),
  );

  return (
    <View className="flex-1 px-3">
      <IosTextInput
        autoCapitalize="none"
        style={style}
        onFocus={() => {
          setIsFocused(true);
          onFocus?.();
        }}
        onBlur={() => {
          setIsFocused(false);
          onBlur?.();
        }}
        {...props}
      />
    </View>
  );
};

InputGroupInput.displayName = 'InputGroupInput';

export { InputGroupInput };
