import { IconMeteor, IconNews } from '@tabler/icons-react';
import AboutPage from '../../pages/AboutPage';
import { ProfilePage } from '../../pages/ProfilePage';

export type IconType = typeof IconNews;

export type NavigationItemType = {
  label: string;
  Icon: IconType;
  router: string;
  element: JSX.Element;
};

export const navigationItems: NavigationItemType[] = [
  {
    label: 'About',
    Icon: IconNews,
    router: 'about',
    element: <AboutPage />,
  },
  {
    label: 'Profile',
    Icon: IconMeteor,
    router: 'profile',
    element: <ProfilePage />,
  },
];
