export interface GlobConfig {
  // 项目名称
  title: string;
  // 后台服务地址
  apiUrl: string;
  // 上传文件地址
  uploadUrl?: string;
  // 服务前缀
  urlPrefix?: string;
  // 项目简称
  shortName: string;
}
export interface GlobEnvConfig {
  // 项目title
  VITE_GLOB_APP_TITLE: string;
  // 后台服务地址
  VITE_GLOB_API_URL: string;
  // 服务前缀
  VITE_GLOB_API_URL_PREFIX?: string;
  // 项目简称
  VITE_GLOB_APP_SHORT_NAME: string;
  // 上传文件地址
  VITE_GLOB_UPLOAD_URL?: string;
}
