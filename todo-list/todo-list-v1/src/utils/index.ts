import { config } from '@/config';
import { ClassAttributes, ComponentClass, JSXElementConstructor } from 'react';

// Infers prop type from component C
export type GetProps<C> = C extends JSXElementConstructor<infer P>
  ? C extends ComponentClass<P>
    ? ClassAttributes<InstanceType<C>> & P
    : P
  : never;

/**
 * @param message
 * @param context - files/* - outerContexts/*
 * @param err
 * @description 발생하지 말아햐 하는 에러 메세지를 확인하기 위해 사용하는 함수
 * @example
 *   use-filter-list라는 파일의 filter 함수에서 에러가 발생
 *   => logMessage('백엔드 dto와 status가 다릅니다', 'hooks/list/use-filter-list - filter', err)
 */
export const logMessage = ({
  message,
  context,
  err,
}: {
  message: string;
  context?: string;
  err?: any;
}) => {
  if (config.NODE_ENV === 'production') {
    logMessageInProd();
  } else {
    logMessageInDev();
  }
  /** dev에서는 로컬에서 볼 수 있는 에러 */
  function logMessageInDev() {
    console.log(`message: ${message} \n context: ${context} \n err: ${err}`);
  }
  /** prod에서는 에러 로그를 전송 */
  function logMessageInProd() {
    console.log(`message: ${message} \n context: ${context} \n err: ${err}`);
  }
};
