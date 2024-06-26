import { ClassAttributes, ComponentClass, JSXElementConstructor } from 'react';

/** Infers prop type from component C */
export type GetProps<C> =
  C extends JSXElementConstructor<infer P>
    ? C extends ComponentClass<P>
      ? ClassAttributes<InstanceType<C>> & P
      : P
    : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ResolveReturnType<T> = T extends (value: infer R) => any ? R : never;
