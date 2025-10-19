import { useState, useEffect, useRef } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import CV from "./pages/CV";
import { logAccessibilityAudit } from "./utils/accessibility";
import "./styles/index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mainContentRef = useRef(null);

  // Valid pages for navigation
  const validPages = ["home", "project1", "project2", "cv"];

  const handleNavigate = (page) => {
    // Validate page exists
    if (!validPages.includes(page)) {
      console.warn(`Invalid page: ${page}`);
      return;
    }

    // Don't navigate if already on the same page
    if (page === currentPage) {
      return;
    }

    // Start transition
    setIsTransitioning(true);
    
    // Small delay for smooth transition effect
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      
      // Focus management: move focus to main content after navigation
      if (mainContentRef.current) {
        mainContentRef.current.focus();
      }
    }, 150);
  };

  // Handle browser back/forward buttons (basic implementation)
  useEffect(() => {
    const handlePopState = () => {
      // This is a basic implementation - in a real app you'd use React Router
      // For now, we'll just stay on the current page
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Run accessibility audit in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Run audit after component mounts and updates
      const timer = setTimeout(() => {
        logAccessibilityAudit();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "project1":
        return <Project1 onNavigate={handleNavigate} />;
      case "project2":
        return <Project2 onNavigate={handleNavigate} />;
      case "cv":
        return <CV onNavigate={handleNavigate} />;
      default:
        return (
          <div className="content-section" role="alert">
            <h1 className="section-title">Page Not Found</h1>
            <p>The requested page could not be found.</p>
            <button 
              onClick={() => handleNavigate("home")} 
              className="nav-link"
              aria-label="Return to home page"
            >
              Return to Home
            </button>
          </div>
        );
    }
  };

  return (
    <>
      <Layout 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        isTransitioning={isTransitioning}
        mainContentRef={mainContentRef}
      >
        <div 
          className={`page-content ${isTransitioning ? 'transitioning' : ''}`}
          ref={mainContentRef}
          tabIndex="-1"
          aria-live="polite"
          aria-label={`${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} page content`}
        >
          {renderPageContent()}
        </div>
      </Layout>
    </>
  );
}

export default App;
