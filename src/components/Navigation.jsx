import React from 'react';

const Navigation = ({ currentPage, onNavigate }) => {
  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <div className="nav-brand">Maxim Jackson</div>
        <ul className="nav-links">
          <li>
            <button 
              onClick={() => onNavigate('home')} 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('project1')} 
              className={`nav-link ${currentPage === 'project1' ? 'active' : ''}`}
            >
              Project 1
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('project2')} 
              className={`nav-link ${currentPage === 'project2' ? 'active' : ''}`}
            >
              Project 2
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate('cv')} 
              className={`nav-link ${currentPage === 'cv' ? 'active' : ''}`}
            >
              CV
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
