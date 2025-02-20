// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

// Định nghĩa các channels có thể sử dụng
export type Channels =
  | 'ipc-example'
  | 'create-new-window'
  | 'create-modal-window'
  | 'window-created'
  | 'modal-created';

export interface WindowConfig {
  width?: number;
  height?: number;
  title?: string;
  route?: string;
}

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    // Thêm các helper methods cho window management
    createWindow(config: WindowConfig) {
      ipcRenderer.send('create-new-window', config);
    },
    createModalWindow(config: WindowConfig) {
      ipcRenderer.send('create-modal-window', config);
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
