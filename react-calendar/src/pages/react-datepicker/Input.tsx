import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'input'> {}

const Input = forwardRef<HTMLInputElement, Props>(function ButtonSearchInput(props, ref) {
  return <StyledInput {...props} ref={ref} />;
});

export default Input;

const StyledInput = styled.input``;
