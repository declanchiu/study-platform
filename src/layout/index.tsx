// Ts静态类型
import type { FC } from 'react';

// React生态相关
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// 静态文件
import './layout.less';

// 引入方法

// 引入组件

const LayoutPage: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, []);
  return (
    <>
      <div className="layout-header" />
      <Outlet />
    </>
  );
};

export default LayoutPage;
