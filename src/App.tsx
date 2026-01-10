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
import BlogPostRouter from './pages/BlogPostRouter';
import Showcase from './pages/Showcase';
import Classes from './pages/Classes';
import Upcoming from './pages/Upcoming';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import CookieNotice from './components/CookieNotice';
import LanguageAvailabilityPopup from './components/LanguageAvailabilityPopup';
import SEOHead from './components/SEOHead';
import Unsubscribe from './pages/Unsubscribe';
import PaymentSuccess from './pages/PaymentSuccess';
import AuthListener from './components/AuthListener';
import UpdatePassword from './pages/UpdatePassword';

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
          <AuthListener />
          <ScrollToTop />
          <SEOHead />
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/process" element={<Layout><StudyingProcess /></Layout>} />
            <Route path="/classes" element={<Layout><Classes /></Layout>} />
            <Route path="/upcoming" element={<Layout><Upcoming /></Layout>} />
            <Route path="/contact" element={<Layout showFooter={false}><Contact /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/:id" element={<Layout showFooter={false}><BlogPostRouter /></Layout>} />
            <Route path="/showcase" element={<Layout><Showcase /></Layout>} />
            <Route path="/tx/s" element={<PaymentSuccess />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            {/* 404 Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieNotice />
          <LanguageAvailabilityPopup />
        </Router>
      </ModalProvider>
    </LanguageProvider>
  );
}

export default App;
