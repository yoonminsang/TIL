import axios, { AxiosInstance, AxiosRequestHeaders, Method } from 'axios';
import { addUrlPathParams } from './utils';

interface RequestOptions {
  pathParams?: Record<string, any>;
  queryParams?: Record<string, any>;
  body?: any;
  headers?: AxiosRequestHeaders;
}

/** 클래스를 상속해서 api를 만들어주세요 */
export abstract class Api {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create();
    this.client.defaults.baseURL = '';
  }

  private async request<T>(method: Method, url: string, options?: RequestOptions): Promise<T> {
    const { pathParams, queryParams, body, headers } = options ?? {};

    const { data } = await this.client({
      method,
      headers,
      data: body,
      url: addUrlPathParams(url, pathParams),
      params: queryParams,
    });

    return data;
  }

  protected async get<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request<T>('GET', url, options);
  }

  protected async post<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request<T>('POST', url, options);
  }

  protected async patch<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request<T>('PATCH', url, options);
  }

  protected async put<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request<T>('PUT', url, options);
  }

  protected async delete<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request<T>('DELETE', url, options);
  }
}
