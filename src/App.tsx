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
import ScrollToTop from './components/ScrollToTop';
import CookieNotice from './components/CookieNotice';
import LanguageAvailabilityPopup from './components/LanguageAvailabilityPopup';
import DevelopmentPopup from './components/DevelopmentPopup';

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
    // Disable right click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I, J, C (DevTools)
      if (e.ctrlKey && e.shiftKey && (['I', 'J', 'C'].includes(e.key) || ['i', 'j', 'c'].includes(e.key))) {
        e.preventDefault();
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
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
          </Routes>
          <CookieNotice />
          <LanguageAvailabilityPopup />
          <DevelopmentPopup />
        </Router>
      </ModalProvider>
    </LanguageProvider>
  );
}

export default App;
