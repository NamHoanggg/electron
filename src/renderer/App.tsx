import './App.css';
import { ThemeProvider } from '../theme/ThemeProvider';
import { RouterApp } from '../Router';

export default function App() {
  return (
    <ThemeProvider>
      <RouterApp />
    </ThemeProvider>
  );
}
