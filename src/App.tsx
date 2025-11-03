import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ProductCategoryPage } from './components/pages/ProductCategoryPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';
import { SolutionsPage } from './components/pages/SolutionsPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { MediaPage } from './components/pages/MediaPage';
import { NewsDetailPage } from './components/pages/NewsDetailPage';
import { PartnersPage } from './components/pages/PartnersPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/' || path.includes('preview_page')) return 'home';
    if (path.startsWith('/products')) return 'products';
    if (path === '/solutions') return 'solutions';
    if (path === '/services') return 'services';
    if (path === '/projects') return 'projects';
    if (path === '/media') return 'media';
    if (path === '/partners') return 'partners';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const handlePageChange = (page: string) => {
    const routes: Record<string, string> = {
      'home': '/',
      'products': '/products',
      'solutions': '/solutions',
      'services': '/services',
      'projects': '/projects',
      'media': '/media',
      'partners': '/partners',
      'about': '/about',
      'contact': '/contact',
    };
    navigate(routes[page] || '/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-corporate-light-blue/10 to-white overflow-x-hidden" dir="rtl">
      <Header currentPage={getCurrentPage()} onPageChange={handlePageChange} />
      <AnimatePresence mode="wait">
        <main className="flex-1 relative">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <HomePage />
              </motion.div>
            } />
            <Route path="/products" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ProductsPage />
              </motion.div>
            } />
            <Route path="/products/:category" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ProductCategoryPage />
              </motion.div>
            } />
            <Route path="/products/:category/:productId" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ProductDetailPage />
              </motion.div>
            } />
            <Route path="/solutions" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <SolutionsPage />
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ServicesPage />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ProjectsPage />
              </motion.div>
            } />
            <Route path="/media" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <MediaPage />
              </motion.div>
            } />
            <Route path="/news/:id" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <NewsDetailPage />
              </motion.div>
            } />
            <Route path="/partners" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <PartnersPage />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <AboutPage />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ContactPage />
              </motion.div>
            } />
            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <HomePage />
              </motion.div>
            } />
          </Routes>
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default function App() {
  // Handle preview_page.html in the URL by using basename
  const basename = window.location.pathname.includes('preview_page.html') 
    ? window.location.pathname.split('preview_page.html')[0] 
    : '/';
    
  return (
    <Router basename={basename}>
      <AnimatedRoutes />
    </Router>
  );
}