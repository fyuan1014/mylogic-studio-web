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
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
