import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/Home/home.tsx';
import ServicesPage from './pages/Services/services.tsx';
import { SiteWrapper } from './layouts/SiteWrapper.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<SiteWrapper />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<ServicesPage />} path="/services" />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
