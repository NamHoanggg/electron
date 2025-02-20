import { Button } from '@mantine/core';
import type { NavigationItemType } from './data';

export const NavigationItem: React.FC<NavigationItemType> = ({
  router,
  Icon,
  label,
}) => {
  const openInNewWindow = () => {
    window.electron.ipcRenderer.createWindow({
      width: 800,
      height: 600,
      title: 'Window',
      route: `/${router}`,
    });
  };

  return (
    <Button leftSection={<Icon />} onClick={openInNewWindow}>
      {label}
    </Button>
  );
};
