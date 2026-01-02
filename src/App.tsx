import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import StudyingProcess from './components/StudyingProcess';
import Contact from './components/Contact';
import Blog from './pages/Blog';
import Seed from './pages/Seed';
import ScrollToTop from './components/ScrollToTop';
import CookieNotice from './components/CookieNotice';
import LanguageAvailabilityPopup from './components/LanguageAvailabilityPopup';

import { ModalProvider } from './contexts/ModalContext';

function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Features />
      <Pricing />
    </>
  );
}

function App() {
  useEffect(() => {
    // Restrictions removed to allow debugging
  }, []);

  return (
    <LanguageProvider>
      <ModalProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/process" element={<Layout><StudyingProcess /></Layout>} />
            <Route path="/contact" element={<Layout showFooter={false}><Contact /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/seed" element={<Seed />} />
          </Routes>
          <CookieNotice />
          <LanguageAvailabilityPopup />
        </Router>
      </ModalProvider>
    </LanguageProvider>
  );
}

export default App;
