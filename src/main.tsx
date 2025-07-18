import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/Home/home.tsx';
import ServicesPage from './pages/Services/services.tsx';
import RootLayout from './layouts/RootLayout.tsx';
import AboutPage from './pages/About/about-page.tsx';
import ContactPage from './pages/Contact/contact-page.tsx';
import ProjectDetailsPage from './pages/ProjectDetails/project-detail-page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<ServicesPage />} path="/services" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<ProjectDetailsPage />} path="/projects/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
