import { getProjectById } from '../data/projects';

const Project1 = ({ onNavigate }) => {
  const project = getProjectById('project1');

  if (!project) {
    return (
      <div className="section-block section-block--dark">
        <div className="section-content">
          <h1 className="section-heading">Project Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      {/* Hero Section - Dark */}
      <section className="section-block section-block--dark">
        <div className="section-content">
          <div className="project-hero">
            <h1 className="project-name">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
                  View Live
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn project-btn--secondary">
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section - Light */}
      <section className="section-block section-block--light">
        <div className="section-content">
          <h3 className="section-heading">Technologies</h3>
          <div className="tech-grid">
            {project.technologies.slice(0, 6).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Images Section - Light */}
      <section className="section-block section-block--light">
        <div className="section-content">
          <h3 className="section-heading">Project Gallery</h3>
          <div className="project-gallery">
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🖥️</span>
                <small>Desktop View</small>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>📱</span>
                <small>Mobile View</small>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>⚡</span>
                <small>Performance Demo</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Accent */}
      <section className="section-block section-block--accent">
        <div className="section-content">
          <h3 className="section-heading">Key Features</h3>
          <div className="features-list">
            {project.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="feature-item">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project1;
