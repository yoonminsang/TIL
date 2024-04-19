import { addUrlPathParams } from './utils';

describe('addUrlPathParams', () => {
  it('pathParams이 없을 때 원본 URL을 반환한다.', () => {
    const url = 'http://example.com/:id';
    expect(addUrlPathParams(url)).toBe(url);
  });

  it('pathParams가 한 개 일 때 URL 변환에 성공한다.', () => {
    const url = 'http://example.com/:id';
    const pathParams = { id: 123 };
    const expected = 'http://example.com/123';
    expect(addUrlPathParams(url, pathParams)).toBe(expected);
  });

  it('pathParams가 두 개 일 때 URL 변환에 성공한다.', () => {
    const url = 'http://example.com/:userId/posts/:postId';
    const pathParams = { userId: 'user1', postId: 456 };
    const expected = 'http://example.com/user1/posts/456';
    expect(addUrlPathParams(url, pathParams)).toBe(expected);
  });
});
