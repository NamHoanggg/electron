import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link
            to="/"
            className="mr-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mr-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            About
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
