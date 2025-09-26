import { lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/Home/home.tsx';
import RootLayout from './layouts/RootLayout.tsx';
import ScrollHandoffLayout from './pages/testscroll/ScrollPage.tsx';

const AboutPage = lazy(() => import('./pages/About/about-page.tsx'));
const ContactPage = lazy(() => import('./pages/Contact/contact-page.tsx'));
const ProjectDetailsPage = lazy(
  () => import('./pages/ProjectDetails/project-detail-page.tsx')
);
const TermsOfUse = lazy(() => import('./pages/TermsOfUse/terms-of-use.tsx'));
const NotFound = lazy(() => import('./pages/NotFound/not-found.tsx'));
const PrivacyPolicy = lazy(
  () => import('./pages/PrivacyPolicy/privacy-policy.tsx')
);
const ServicesPage = lazy(() => import('./pages/Services/services.tsx'));
const ReviewsPage = lazy(() => import('./pages/Reviews/reviews.tsx'));

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
