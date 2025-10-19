import { useResponsive } from '../hooks/useResponsive';

const Home = ({ onNavigate }) => {
  const { isMobile } = useResponsive();

  return (
    <div className="home-page">
      {/* Hero Section with Background Video */}
      <section className="section-block section-block--dark hero-section">
        <div className="hero-background">
          <div className="hero-video-placeholder">
            <span>🎮</span>
            <small>Background Video Placeholder</small>
          </div>
        </div>
        <div className="section-content">
          <div className="hero-content">
            <h1 className="hero-title">
              {isMobile ? "Maxim Jackson" : "Welcome to Maxim Jackson's Portfolio"}
            </h1>
            <p className="hero-subtitle">
              {isMobile ? "Developer & Problem Solver" : "Passionate Developer & Creative Problem Solver"}
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Profile Image */}
      <section className="section-block section-block--light about-section">
        <div className="section-content">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-heading">About Me</h2>
              <p className="intro-text">
                Hello! I'm Maxim Jackson, a passionate developer creating innovative 
                solutions with modern web technologies. I specialize in building 
                user-focused applications that combine clean design with robust functionality.
              </p>
              <p className="intro-text">
                {isMobile 
                  ? "Explore my projects and CV to learn more about my work and experience."
                  : "Explore my projects to see examples of my work, or check out my CV to learn more about my professional background and experience."
                }
              </p>
            </div>
            <div className="about-image">
              <div className="profile-image-placeholder">
                <span>👨‍💻</span>
                <small>Profile Photo</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="section-block section-block--accent skills-preview-section">
        <div className="section-content">
          <h2 className="section-heading">Tech Stack</h2>
          <div className="skills-showcase">
            <div className="skill-category-preview">
              <h3>Frontend</h3>
              <div className="skill-icons">
                <div className="skill-icon">⚛️ React</div>
                <div className="skill-icon">🟢 Vue.js</div>
                <div className="skill-icon">📘 TypeScript</div>
              </div>
            </div>
            <div className="skill-category-preview">
              <h3>Backend</h3>
              <div className="skill-icons">
                <div className="skill-icon">🟢 Node.js</div>
                <div className="skill-icon">🐍 Python</div>
                <div className="skill-icon">🗄️ MongoDB</div>
              </div>
            </div>
            <div className="skill-category-preview">
              <h3>Tools</h3>
              <div className="skill-icons">
                <div className="skill-icon">🐙 Git</div>
                <div className="skill-icon">🐳 Docker</div>
                <div className="skill-icon">☁️ AWS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* Navigation Cards Section */}
      <section className="section-block section-block--dark navigation-section">
        <div className="section-content">
          <h2 className="section-heading">Explore My Work</h2>
          <div className="home-navigation">
            <button 
              className="nav-card nav-card-button" 
              onClick={() => onNavigate('project1')}
              aria-labelledby="projects-card"
              aria-describedby="projects-description"
            >
              <div className="card-icon">🚀</div>
              <h3 id="projects-card">{isMobile ? "Projects" : "My Projects"}</h3>
              <p id="projects-description">
                {isMobile 
                  ? "See my applications and solutions"
                  : "Discover the applications and solutions I've built"
                }
              </p>
              <div className="card-preview-images">
                <div className="preview-image">📱</div>
                <div className="preview-image">💻</div>
                <div className="preview-image">🌐</div>
              </div>
            </button>
            
            <button 
              className="nav-card nav-card-button" 
              onClick={() => onNavigate('cv')}
              aria-labelledby="cv-card"
              aria-describedby="cv-description"
            >
              <div className="card-icon">📄</div>
              <h3 id="cv-card">{isMobile ? "CV" : "Professional Background"}</h3>
              <p id="cv-description">
                {isMobile 
                  ? "View my experience and skills"
                  : "View my experience, education, and technical skills"
                }
              </p>
              <div className="card-achievements">
                <span className="achievement">🎓 Computer Science</span>
                <span className="achievement">💼 2+ Years Experience</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
