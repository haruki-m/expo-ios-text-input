import { cn } from '@/lib/utils';
import { RefAttributes, useContext } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { InputGroupContext } from './context';

type Props = TextInputProps &
  RefAttributes<TextInput> & {
    showDoneButton?: boolean;
  };

const InputGroupInput = ({ className, onFocus, onBlur, ...props }: Props) => {
  const { setIsFocused } = useContext(InputGroupContext);

  return (
    <TextInput
      textAlignVertical="center"
      autoCapitalize="none"
      {...{ includeFontPadding: false }}
      className={cn(
        'flex-1 bg-transparent px-3 text-base leading-5 text-foreground placeholder:text-muted-foreground py-0 focus:outline-none lg:text-sm h-full',
        className,
      )}
      onFocus={(e) => {
        setIsFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur?.(e);
      }}
      {...props}
    />
  );
};

InputGroupInput.displayName = 'InputGroupInput';

export { InputGroupInput };
