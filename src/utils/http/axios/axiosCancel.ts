import type { AxiosRequestConfig, Canceler } from 'axios';

import axios from 'axios';
import { isFunction } from '@/utils/is';

// 使用Map集合储存请求标识,和取消的功能
let pendingMap = new Map<string, Canceler>();

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&');

export class AxiosCanceler {
  /**
   *  新增请求
   * @param { Object } config
   */
  addPending(config: AxiosRequestConfig) {
    this.removePending(config);
    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          // 如果挂起中没有当前请求，则添加它
          pendingMap.set(url, cancel);
        }
      });
  }

  /**
   * @description 清除所有挂起中的请求
   */
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel();
    });
    pendingMap.clear();
  }

  /**
   * 移除重复的请求
   * @param { Object } config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config);

    if (pendingMap.has(url)) {
      // 如果挂起中有请求标识
      // 当前请求需要请求和删除
      const cancel = pendingMap.get(url);
      cancel && cancel(url);
      pendingMap.delete(url);
    }
  }

  /**
   * @description 复原Map
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>();
  }
}
