import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import 'antd/dist/reset.css'; // 重置样式
import 'dayjs/locale/zh-cn'; //  默认中文
const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
