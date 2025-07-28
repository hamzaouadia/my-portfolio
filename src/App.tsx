import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Lock scroll immediately

    const handleLoaded = () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = ''; // Unlock scroll after fade
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoaded();
    } else {
      window.addEventListener('load', handleLoaded);
    }

    return () => {
      window.removeEventListener('load', handleLoaded);
      document.body.style.overflow = ''; // Cleanup in case of fast navigation
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-black text-white flex flex-col items-center justify-center">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-lg">Loading...</p>
        </div>
      )}

      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <CustomCursor />
        <NavBar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
