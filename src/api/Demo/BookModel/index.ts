import type { AxiosResponse } from 'axios';
import type { Result } from '#/axios';

import { defaultHttp } from '@/utils/http/axios';

enum Api {
  BOOK_LIST = '/getBookList',
}

interface BookListRes {
  id: number;
  name: string;
  age: number;
}

// 获取书本列表
export const getBookListApi = () => {
  return defaultHttp.get<AxiosResponse<Result<BookListRes>>>({
    url: Api.BOOK_LIST,
  });
};
