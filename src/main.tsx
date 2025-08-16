import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import './utils/colors.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { DashboardProvider } from './contexts/Dashboard.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </BrowserRouter>
  </StrictMode>,
)
