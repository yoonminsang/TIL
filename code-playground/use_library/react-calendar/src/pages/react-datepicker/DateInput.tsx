import { ComponentPropsWithoutRef, forwardRef } from 'react';
import Input from './Input';

interface Props extends ComponentPropsWithoutRef<'input'> {}

const DateInput = forwardRef<HTMLInputElement, Props>(function ButtonSearchInput(props, ref) {
  return <Input {...props} ref={ref} />;
});

export default DateInput;
