/** 개발환경에 따라 로그를 분리해주세요 */
export const logError = (error: Error, data?: Record<string, unknown>) => {
  console.error('error', error);

  if (data) {
    console.error('error data', data);
  }
  return;
};
