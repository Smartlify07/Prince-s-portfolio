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
import TermsOfUse from './pages/TermsOfUse/terms-of-use.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy/privacy-policy.tsx';
import { NotFound } from './pages/NotFound/not-found.tsx';
import ScrollHandoffLayout from './pages/testscroll/ScrollPage.tsx';
import { ReviewsPage } from './pages/Reviews/reviews.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<ServicesPage />} path="/services" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<TermsOfUse />} path="/termsofuse" />
          <Route element={<PrivacyPolicy />} path="/privacy-policy" />
          <Route element={<ProjectDetailsPage />} path="/projects/:id" />
          <Route element={<ReviewsPage />} path="/testimonials" />
        </Route>
        <Route element={<NotFound />} path="*" />
        <Route element={<ScrollHandoffLayout />} path="/scroll" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
