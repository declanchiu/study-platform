// Ts静态类型
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { RequestOptions, Result } from '#/axios';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  // 认证计划
  authenticationScheme?: string;
  // 服务处理
  transform?: AxiosTransform;
  // 请求选项
  requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {
  /**
   * @description 在请求之前进行配置
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  /**
   * @description 请求成功之后的处理
   */
  transformRequestHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  /**
   * @description 请求失败处理
   */
  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

  /**
   * @description 请求之前的拦截器
   */
  requestInterceptors?: (
    config: AxiosRequestConfig,
    options: CreateAxiosOptions,
  ) => AxiosRequestConfig;

  /**
   * @description 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
