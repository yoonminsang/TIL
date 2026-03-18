import { addUrlPathParams } from './utils';

describe('addUrlPathParams', () => {
  it('should not replace path param when path param undefined', () => {
    const url = '/api/user/:id';
    const pathParams = undefined;
    const expected = '/api/user/:id';
    expect(addUrlPathParams(url, pathParams)).toEqual(expected);
  });

  it('should replace path param when correctly', () => {
    const url = '/api/user/:id/:name';
    const pathParams = { id: 1, name: 'john' };
    const expected = '/api/user/1/john';
    expect(addUrlPathParams(url, pathParams)).toEqual(expected);
  });

  it('should not replace path param when path param is not provided', () => {
    const url = '/api/user/:id/:name';
    const pathParams = { id: 1 };
    const expected = '/api/user/1/:name';
    expect(addUrlPathParams(url, pathParams)).toEqual(expected);
  });
});
