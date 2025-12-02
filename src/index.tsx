import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Loader from './loader/Loader';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<OverlayedApp />);
}

function OverlayedApp() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 400); // 600ms ou à ajuster
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <App />
      {showLoader && <Loader />}
    </>
  );
}
