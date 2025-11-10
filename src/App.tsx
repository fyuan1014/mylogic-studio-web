import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ColorCrafterLegalPage from './pages/ColorCrafterLegalPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NarrativeFlowLegalPage from './pages/NarrativeFlowLegalPage';
import NarrativeFlowPrivacyPolicyPage from './pages/NarrativeFlowPrivacyPolicyPage';
import NarrativeFlowTermsOfServicePage from './pages/NarrativeFlowTermsOfServicePage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* ColorCrafter Legal Pages */}
          <Route path="/colorcrafter/legal" element={<ColorCrafterLegalPage />} />
          <Route path="/colorcrafter/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/colorcrafter/terms-of-service" element={<TermsOfServicePage />} />

          {/* NarrativeFlow Legal Pages */}
          <Route path="/narrativeflow/legal" element={<NarrativeFlowLegalPage />} />
          <Route path="/narrativeflow/privacy-policy" element={<NarrativeFlowPrivacyPolicyPage />} />
          <Route path="/narrativeflow/terms-of-service" element={<NarrativeFlowTermsOfServicePage />} />
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
