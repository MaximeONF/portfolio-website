import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import Signup from './pages/admin/Signup';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import HeroAdmin from './pages/admin/HeroAdmin';
import PresentationAdmin from './pages/admin/PresentationAdmin';
import ServicesAdmin from './pages/admin/ServicesAdmin';
import PortfolioAdmin from './pages/admin/PortfolioAdmin';
import PricingAdmin from './pages/admin/PricingAdmin';
import FaqAdmin from './pages/admin/FaqAdmin';
import ContactAdmin from './pages/admin/ContactAdmin';
import SettingsAdmin from './pages/admin/SettingsAdmin';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/signup" element={<Signup />} />

          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="hero" element={<HeroAdmin />} />
            <Route path="presentation" element={<PresentationAdmin />} />
            <Route path="services" element={<ServicesAdmin />} />
            <Route path="portfolio" element={<PortfolioAdmin />} />
            <Route path="pricing" element={<PricingAdmin />} />
            <Route path="faq" element={<FaqAdmin />} />
            <Route path="contact" element={<ContactAdmin />} />
            <Route path="settings" element={<SettingsAdmin />} />
          </Route>

          <Route
            path="/*"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;