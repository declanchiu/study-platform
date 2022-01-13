// Ts静态类型
import type { FC } from 'react';

// React生态相关
import React, { useEffect } from 'react';

// 引入静态文件
import './home.css';

// 引入方法
import { getBookListApi } from '@/api/Demo/BookModel';

// 引入组件

const Home: FC = () => {
  useEffect(() => {
    getBookListApi().then((res) => {
      console.log('res', res);
    });
  }, []);
  return (
    <div className="home-wrapper">
      <span>后台开发中</span>
    </div>
  );
};

export default Home;
