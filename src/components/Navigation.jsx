import React from 'react';
import { useResponsive, useTouch } from '../hooks/useResponsive';

const Navigation = ({ currentPage, onNavigate, isTransitioning }) => {
  const { isMobile, isTablet } = useResponsive();
  const isTouch = useTouch();

  const handleNavClick = (page) => {
    // Prevent navigation during transitions
    if (isTransitioning) {
      return;
    }
    onNavigate(page);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, page) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(page);
    }
  };

  // Add touch feedback for touch devices
  const handleTouchStart = (e) => {
    if (isTouch) {
      e.currentTarget.style.transform = 'scale(0.98)';
    }
  };

  const handleTouchEnd = (e) => {
    if (isTouch) {
      setTimeout(() => {
        e.currentTarget.style.transform = '';
      }, 100);
    }
  };

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'project1', label: 'Projects' },
    { key: 'cv', label: 'CV' }
  ];

  return (
    <nav className="main-navigation" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-brand">
            MJ
          </div>
          <ul className="nav-links">
            {navItems.map(({ key, label }) => (
              <li key={key}>
                <button 
                  onClick={() => handleNavClick(key)} 
                  onKeyDown={(e) => handleKeyDown(e, key)}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  className={`nav-link ${currentPage === key ? 'active' : ''} ${isTransitioning ? 'disabled' : ''}`}
                  disabled={isTransitioning}
                  aria-current={currentPage === key ? 'page' : undefined}
                  aria-label={`Navigate to ${label} page`}
                  tabIndex={isTransitioning ? -1 : 0}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
