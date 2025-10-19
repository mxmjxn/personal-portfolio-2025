import React from 'react';

const ProjectCard = ({ project, isDetailView = false }) => {
  if (!project) {
    return (
      <div className="project-card error" role="alert">
        <p>Project information not available</p>
      </div>
    );
  }

  return (
    <article className={`project-card ${isDetailView ? 'detail-view' : 'summary-view'}`} aria-labelledby={`project-title-${project.id || 'unknown'}`}>
      <header className="project-header">
        <h2 id={`project-title-${project.id || 'unknown'}`} className="project-title">{project.title}</h2>
        {project.status && (
          <span className={`project-status ${project.status}`} aria-label={`Project status: ${project.status}`}>
            {project.status}
          </span>
        )}
      </header>

      <div className="project-description">
        <p>{project.description}</p>
      </div>

      {isDetailView && (
        <>
          <section className="project-technologies" aria-labelledby={`tech-heading-${project.id || 'unknown'}`}>
            <h3 id={`tech-heading-${project.id || 'unknown'}`}>Technologies Used</h3>
            <ul className="tech-list" role="list">
              {project.technologies.map((tech, index) => (
                <li key={index} className="tech-item" role="listitem">{tech}</li>
              ))}
            </ul>
          </section>

          <section className="project-features" aria-labelledby={`features-heading-${project.id || 'unknown'}`}>
            <h3 id={`features-heading-${project.id || 'unknown'}`}>Key Features</h3>
            <ul className="feature-list" role="list">
              {project.features.map((feature, index) => (
                <li key={index} className="feature-item" role="listitem">{feature}</li>
              ))}
            </ul>
          </section>

          {project.images && project.images.length > 0 && (
            <section className="project-images" aria-labelledby={`images-heading-${project.id || 'unknown'}`}>
              <h3 id={`images-heading-${project.id || 'unknown'}`}>Project Screenshots</h3>
              <div className="image-gallery" role="img" aria-label="Project screenshot gallery">
                {project.images.map((image, index) => (
                  <div key={index} className="image-placeholder" role="img" aria-label={`Screenshot ${index + 1}: ${image}`}>
                    <span aria-hidden="true">Screenshot {index + 1}</span>
                    <small aria-hidden="true">{image}</small>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <nav className="project-links" aria-label="Project links">
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link live-link"
            aria-label={`View live ${project.title} project (opens in new tab)`}
          >
            View Live Project
          </a>
        )}
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link github-link"
            aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
          >
            View Source Code
          </a>
        )}
      </nav>

      {project.completionDate && (
        <footer className="project-meta">
          <small aria-label={`Project completed on ${project.completionDate}`}>
            Completed: {project.completionDate}
          </small>
        </footer>
      )}
    </article>
  );
};

export default ProjectCard;
