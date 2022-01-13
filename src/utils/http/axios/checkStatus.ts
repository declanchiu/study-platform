import type { ErrorMessageMode } from '#/axios';

export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: ErrorMessageMode = 'message',
): void {
  let errMessage = '';
  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    case 401:
      errMessage = '用户没有权限';
      break;
    case 403:
      errMessage = '用户得到授权，但是访问被禁止';
      break;
    case 404:
      errMessage = '网络请求错误， 未找到该资源';
      break;
    case 405:
      errMessage = '网络请求错误， 请求方法未允许';
      break;
    default:
  }

  if (errMessage) {
    if (errorMessageMode === 'modal') {
      console.error(`Modal --> ${errMessage}`);
    } else if (errorMessageMode === 'message') {
      console.error(`Message --> ${errMessage}`);
    }
  }
}
