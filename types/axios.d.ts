// 通知组件类型
export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

// 请求配置
export interface RequestOptions {
  // 将请求参数拼接到url
  joinParamsToUrl?: boolean;
  // 格式化请求参数时间
  formatDate?: boolean;
  // 是否直接返回请求结构: (config, data, headers, request, status, statusText)
  isTransformResponse?: boolean;
  // 是否直接返回响应体: (data里面接口返回的直接数据)
  isReturnNativeResponse?: boolean;
  // 是否加入网址前缀
  joinPrefix?: boolean;
  // 接口地址如果为空，那默认使用缺省页的apiUrl
  apiUrl?: string;
  // 请求拼接路径
  urlPrefix?: string;
  // 消息错误提示类型
  errorMessageMode?: ErrorMessageMode;
  // 是否添加时间戳
  joinTime?: boolean;
  // 忽略重复请求
  ignoreCancelToken?: boolean;
  // 需要在请求头发送token
  withToken?: boolean;
}

// 这里要根据当前后端的返回格式来修改
export interface Result<T = any> {
  code: number;
  message: string;
  err_message: string;
  data: T;
}

// 文件上传 采用multipart/form-data格式
export interface UploadFileParams {
  // 其他参数
  data?: Recordable;
  // 文件参数接口字段名字
  name?: string;
  // 文件类型
  file: File | Blob;
  // 文件名称
  filename?: string;
  [key: string]: any;
}
