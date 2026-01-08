import { useState, useEffect } from 'react';
import { getCurrentRoute, Route } from './utils/router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Scribbles from './pages/Scribbles';
import Contact from './pages/Contact';

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>(getCurrentRoute());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getCurrentRoute());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'cv':
        return <CV />;
      case 'scribbles':
        return <Scribbles />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation currentRoute={currentRoute} />
      <main className="flex-1 pt-16">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
