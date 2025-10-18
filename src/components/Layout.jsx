import React from 'react';
import Navigation from './Navigation';

const Layout = ({ currentPage, onNavigate, children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <Navigation currentPage={currentPage} onNavigate={onNavigate} />
      </header>
      
      <main className="layout-main">
        <div className="main-container">
          {children}
        </div>
      </main>
      
      <footer className="layout-footer">
        <div className="footer-container">
          <p>&copy; 2024 Maxim Jackson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
