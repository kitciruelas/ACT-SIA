import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const loadScripts = () => {
  const scripts = [
    'src/vendors/popper/popper.min.js',
    './src/vendors/bootstrap/bootstrap.min.js',
    'src/vendors/is/is.min.js',
    'src/vendors/countup/countUp.umd.js',
    'src/vendors/swiper/swiper-bundle.min.js',
    'src/vendors/lodash/lodash.min.js',
    'https://polyfill.io/v3/polyfill.min.js?features=window.scroll',
    'src/assets/js/theme.js',
  ];

  scripts.forEach((src) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  });
};

const RootComponent = () => {
  useEffect(() => {
    loadScripts();
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<RootComponent />);