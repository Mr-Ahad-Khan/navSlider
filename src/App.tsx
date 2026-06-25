import { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/auth';
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { loading } = useAuth();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Slider />
            <HomePage onNavigate={setCurrentPage} />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage />;
      default:
        return (
          <>
            <Slider />
            <HomePage onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-16">{renderPage()}</main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
