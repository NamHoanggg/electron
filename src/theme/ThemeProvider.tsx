import { MantineProvider } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import { theme } from '.';
// import Notifications from '../components/Notifications'

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="light"
      classNamesPrefix="app"
    >
      {children}
      {/* <Notifications /> */}
    </MantineProvider>
  );
};
