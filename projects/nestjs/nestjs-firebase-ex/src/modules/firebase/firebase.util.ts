export const extractToken = (request: any): string | null => {
  const authorization: string | undefined = request.headers.authorization;
  if (!authorization) {
    return null;
  }
  if (!authorization.startsWith('Bearer ')) {
    return null;
  }
  const [, token] = authorization.split(' ');
  return token;
};
