import React from 'react';

const ProjectCard = ({ project, isDetailView = false }) => {
  if (!project) {
    return (
      <div className="project-card error">
        <p>Project information not available</p>
      </div>
    );
  }

  return (
    <div className={`project-card ${isDetailView ? 'detail-view' : 'summary-view'}`}>
      <div className="project-header">
        <h2 className="project-title">{project.title}</h2>
        {project.status && (
          <span className={`project-status ${project.status}`}>
            {project.status}
          </span>
        )}
      </div>

      <div className="project-description">
        <p>{project.description}</p>
      </div>

      {isDetailView && (
        <>
          <div className="project-technologies">
            <h3>Technologies Used</h3>
            <ul className="tech-list">
              {project.technologies.map((tech, index) => (
                <li key={index} className="tech-item">{tech}</li>
              ))}
            </ul>
          </div>

          <div className="project-features">
            <h3>Key Features</h3>
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index} className="feature-item">{feature}</li>
              ))}
            </ul>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="project-images">
              <h3>Project Screenshots</h3>
              <div className="image-gallery">
                {project.images.map((image, index) => (
                  <div key={index} className="image-placeholder">
                    <span>Screenshot {index + 1}</span>
                    <small>{image}</small>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <div className="project-links">
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link live-link"
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
          >
            View Source Code
          </a>
        )}
      </div>

      {project.completionDate && (
        <div className="project-meta">
          <small>Completed: {project.completionDate}</small>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
