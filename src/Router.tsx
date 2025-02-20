import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { navigationItems } from './components/Navigation/data';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  ...navigationItems.map((item) => ({
    path: `/${item.router}`,
    element: item.element,
  })),
]);

export function RouterApp() {
  return <RouterProvider router={router} />;
}
