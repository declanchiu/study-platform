// Ts静态类型
import type { RouteObject } from 'react-router';

import React from 'react';
import { Navigate } from 'react-router-dom';

import LayoutPage from '@/layout';
import Home from '@/views/Home';

export const routeList: RouteObject[] = [
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/home" />,
  },
];
