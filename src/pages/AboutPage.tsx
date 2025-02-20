import { Text } from '@mantine/core';

/* eslint-disable react/button-has-type */
export default function AboutPage() {
  const openInNewWindow = () => {
    window.electron.ipcRenderer.createWindow({
      width: 800,
      height: 600,
      title: 'Window',
      route: '/profile',
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <div className="space-x-4">
        <button
          onClick={openInNewWindow}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Open in New Window <Text c="blue">hahaha</Text>
        </button>
      </div>
    </div>
  );
}
