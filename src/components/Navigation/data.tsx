import { JSX } from 'react';
import { IconMeteor, IconNews } from '@tabler/icons-react';
import { NewsPage } from '../../pages/News';
import { MarketSymbolPage } from '../../pages/Market/MarketSymbol';
import { MarketFeaturePage } from '../../pages/Market/MarketFeature';
import { FeatureMicroPage } from '../../pages/Market/FeatureMicro';
import { MarketStockPage } from '../../pages/Market/MarketStock';
import { StockMicroPage } from '../../pages/Market/StockMicro';
import { SettingsPage } from '../../pages/Settings';

export type IconType = typeof IconNews;

export type NavigationItemType = {
  label: string;
  Icon: IconType;
  router: string;
  element: JSX.Element;
};

export const navigationItems: NavigationItemType[] = [
  {
    label: 'News',
    Icon: IconNews,
    router: 'new',
    element: <NewsPage />,
  },
  {
    label: 'Market Symbol',
    Icon: IconMeteor,
    router: 'market-symbol',
    element: <MarketSymbolPage />,
  },
  {
    label: 'Market Feature',
    Icon: IconMeteor,
    router: 'market-feature',
    element: <MarketFeaturePage />,
  },
  {
    label: 'Market Feature Microseconds',
    Icon: IconMeteor,
    router: 'feature-micro',
    element: <FeatureMicroPage />,
  },
  {
    label: 'Market Stock',
    Icon: IconMeteor,
    router: 'market-stock',
    element: <MarketStockPage />,
  },
  {
    label: 'Market Stock Microseconds',
    Icon: IconMeteor,
    router: 'stock-micro',
    element: <StockMicroPage />,
  },
  {
    label: 'Settings',
    Icon: IconMeteor,
    router: 'settings',
    element: <SettingsPage />,
  },
];
