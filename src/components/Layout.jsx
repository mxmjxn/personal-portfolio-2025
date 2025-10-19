import React from 'react';
import Navigation from './Navigation';
import { useResponsive } from '../hooks/useResponsive';

const Layout = ({ currentPage, onNavigate, isTransitioning, children, mainContentRef }) => {
  const { isMobile, deviceType } = useResponsive();

  return (
    <div className={`layout responsive-container ${deviceType}`}>
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          if (mainContentRef?.current) {
            mainContentRef.current.focus();
          }
        }}
      >
        Skip to main content
      </a>
      
      <header className="layout-header" role="banner">
        <Navigation 
          currentPage={currentPage} 
          onNavigate={onNavigate}
          isTransitioning={isTransitioning}
        />
      </header>
      
      <main className="layout-main" role="main" id="main-content">
        <div className="main-container">
          {children}
        </div>
      </main>
      
      <footer className="layout-footer" role="contentinfo">
        <div className="footer-container">
          <p>
            &copy; 2024 Maxim Jackson. 
            {!isMobile && ' All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
