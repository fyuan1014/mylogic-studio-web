import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import LegalHubPage from './pages/LegalHubPage';
import ColorCrafterLegalPage from './pages/ColorCrafterLegalPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NarrativeFlowLegalPage from './pages/NarrativeFlowLegalPage';
import NarrativeFlowPrivacyPolicyPage from './pages/NarrativeFlowPrivacyPolicyPage';
import NarrativeFlowTermsOfServicePage from './pages/NarrativeFlowTermsOfServicePage';

const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#main-content">Skip to Main Content</a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/privacy_policy" element={<LegalHubPage />} />
          <Route path="/colorcrafter/legal" element={<ColorCrafterLegalPage />} />
          <Route path="/colorcrafter/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/colorcrafter/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/narrativeflow/legal" element={<NarrativeFlowLegalPage />} />
          <Route path="/narrativeflow/privacy-policy" element={<NarrativeFlowPrivacyPolicyPage />} />
          <Route path="/narrativeflow/terms-of-service" element={<NarrativeFlowTermsOfServicePage />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/about" element={<Navigate to="/#approach" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
