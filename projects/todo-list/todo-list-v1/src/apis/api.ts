import axios, { AxiosInstance, AxiosRequestHeaders, Method } from 'axios';
import { addUrlPathParams } from './utils';

interface RequestOptions<B> {
  body?: B;
  params?: Record<string, any>;
  pathParams?: Record<string, any>;
  headers?: AxiosRequestHeaders;
}

export class Api {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create();
    // this.client.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : '';
    // this.client.defaults.withCredentials = true;
  }

  private async request<T, B = any>(method: Method, url: string, options?: RequestOptions<B>): Promise<T> {
    const { body, params, pathParams, headers } = options ?? {};

    const { data } = await this.client({
      method,
      headers,
      data: body,
      url: addUrlPathParams(url, pathParams),
      params,
    });

    return data;
  }

  protected async get<T>(url: string, options?: RequestOptions<undefined>): Promise<T> {
    return this.request<T>('GET', url, options);
  }

  protected async post<T, B>(url: string, options?: RequestOptions<B>): Promise<T> {
    return this.request<T, B>('POST', url, options);
  }

  protected async patch<T, B>(url: string, options?: RequestOptions<B>): Promise<T> {
    return this.request<T, B>('PATCH', url, options);
  }

  protected async put<T, B>(url: string, options?: RequestOptions<B>): Promise<T> {
    return this.request<T, B>('PUT', url, options);
  }

  protected async delete<T>(url: string, options?: RequestOptions<undefined>): Promise<T> {
    return this.request<T>('DELETE', url, options);
  }
}
