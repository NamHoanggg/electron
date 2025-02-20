/* eslint-disable react/button-has-type */
export default function HomePage() {
  const openInNewWindow = () => {
    window.electron.ipcRenderer.createWindow({
      width: 800,
      height: 600,
      title: 'Home Page Window',
    });
  };

  const openInModalWindow = () => {
    window.electron.ipcRenderer.createModalWindow({
      width: 500,
      height: 400,
      title: 'Home Modal',
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <div className="space-x-4">
        <button
          onClick={openInNewWindow}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Open in New Window
        </button>
        <button
          onClick={openInModalWindow}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Open as Modal
        </button>
      </div>
    </div>
  );
}
