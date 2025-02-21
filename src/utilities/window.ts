export const openInNewWindow = (route: string) => {
  window.electron.ipcRenderer.createWindow({
    width: 800,
    height: 600,
    route: `/${route}`,
  });
};
