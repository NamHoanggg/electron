import React from 'react';
import { Button } from '@mantine/core';
import type { NavigationItemType } from './data';
import { openInNewWindow } from '../../utilities/window';

export const NavigationItem: React.FC<NavigationItemType> = ({
  router,
  Icon,
  label,
}) => {
  return (
    <Button leftSection={<Icon />} onClick={() => openInNewWindow(router)}>
      {label}
    </Button>
  );
};
