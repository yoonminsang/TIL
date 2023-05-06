import { ClassAttributes, ComponentClass, JSXElementConstructor } from 'react';

// Infers prop type from component C
export type GetProps<C> = C extends JSXElementConstructor<infer P>
  ? C extends ComponentClass<P>
    ? ClassAttributes<InstanceType<C>> & P
    : P
  : never;

export * from './errorMessage';
