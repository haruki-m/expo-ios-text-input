import { createContext } from 'react';

type InputGroupContextValue = {
  isFocused: boolean;
  isError: boolean;
  setIsFocused: (value: boolean) => void;
};

export const InputGroupContext = createContext<InputGroupContextValue>({
  isFocused: false,
  isError: false,
  setIsFocused: () => {},
});
