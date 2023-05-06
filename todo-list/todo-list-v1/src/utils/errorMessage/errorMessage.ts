import { config } from '@/config';

interface ErrorMessage {
  message: string;
  /** files/* - outerContexts/* */
  context?: string;
  err?: any;
}

/**
 * @description 발생하지 말아햐 하는 에러 메세지를 확인하기 위해 사용하는 함수
 * @example
 *   use-filter-list라는 파일의 filter 함수에서 에러가 발생
 *   => logMessage('백엔드 dto와 status가 다릅니다', 'hooks/list/use-filter-list - filter', err)
 */
export const errorMessage = (errorMessage: ErrorMessage) => {
  if (config.NODE_ENV === 'production') {
    errorMessageInProd(errorMessage);
  } else {
    errorMessageInDev(errorMessage);
  }
};

/** dev에서는 로컬에서 볼 수 있는 에러 */
export function errorMessageInDev({ message, context, err }: ErrorMessage) {
  console.log(`message: ${message} \n context: ${context} \n err: ${err}`);
}
/** prod에서는 에러 로그를 전송 */
export function errorMessageInProd({ message, context, err }: ErrorMessage) {
  console.log(`message: ${message} \n context: ${context} \n err: ${err}`);
}
