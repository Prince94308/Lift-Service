import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopNotificationBar from './components/layout/TopNotificationBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import QuickContactPills from './components/common/QuickContactPills';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceInstallationPage from './pages/ServiceInstallationPage';
import ServiceRepairPage from './pages/ServiceRepairPage';
import ServiceAMCPage from './pages/ServiceAMCPage';
import ServiceModernizationPage from './pages/ServiceModernizationPage';
import ServiceEmergencyPage from './pages/ServiceEmergencyPage';
import ProjectsPage from './pages/ProjectsPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import RequestQuotePage from './pages/RequestQuotePage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-darkText font-body">
      {/* 24/7 Notification Bar */}
      <TopNotificationBar />

      {/* Sticky Main Navigation */}
      <Navbar />

      {/* Main Content Router */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/installation" element={<ServiceInstallationPage />} />
          <Route path="/services/repair" element={<ServiceRepairPage />} />
          <Route path="/services/amc" element={<ServiceAMCPage />} />
          <Route path="/services/modernization" element={<ServiceModernizationPage />} />
          <Route path="/services/emergency" element={<ServiceEmergencyPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<RequestQuotePage />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Floating Action Pills (WhatsApp & 24/7 Dispatch) */}
      <QuickContactPills />

      {/* Scroll to Top floating button & route listener */}
      <ScrollToTop />

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
