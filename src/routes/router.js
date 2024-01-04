import App from '@/pages/app/app';
import Home from '@/pages/home/home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        {
          Component: Home,
          index: true,
        },
      ],
    },
  ],
  {
    basename: '/',
    window: window,
  },
);

export default router;
