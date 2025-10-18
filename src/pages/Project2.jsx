import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjectById } from '../data/projects';

const Project2 = () => {
  const project = getProjectById('project2');

  if (!project) {
    return (
      <div className="content-section">
        <h1 className="section-title">Project Not Found</h1>
        <p>The requested project could not be found.</p>
      </div>
    );
  }

  return (
    <div className="content-section">
      <div className="page-header">
        <h1 className="section-title">Project Details</h1>
        <p className="page-subtitle">Detailed overview of {project.title}</p>
      </div>
      
      <ProjectCard project={project} isDetailView={true} />
      
      <div className="project-additional-info">
        <div className="project-overview">
          <h3>Project Overview</h3>
          <p>
            This task management application showcases modern frontend development 
            with Vue.js and real-time collaboration features. The project emphasizes 
            user experience, team productivity, and offline functionality through 
            Progressive Web App technologies.
          </p>
        </div>
        
        <div className="technical-highlights">
          <h3>Technical Highlights</h3>
          <ul>
            <li>Implemented real-time collaboration using WebSocket connections</li>
            <li>Built Progressive Web App with offline functionality</li>
            <li>Created intuitive drag-and-drop interface for task organization</li>
            <li>Integrated Firebase for real-time database and authentication</li>
            <li>Developed advanced filtering and search capabilities</li>
            <li>Implemented push notifications for team collaboration</li>
          </ul>
        </div>
        
        <div className="challenges-solutions">
          <h3>Challenges & Solutions</h3>
          <div className="challenge-item">
            <h4>Challenge: Real-time Collaboration</h4>
            <p>
              Implementing seamless real-time collaboration required careful handling 
              of concurrent edits, conflict resolution, and maintaining data consistency 
              across multiple users working on the same tasks.
            </p>
          </div>
          <div className="challenge-item">
            <h4>Challenge: Offline Functionality</h4>
            <p>
              Creating a robust offline experience involved implementing service workers, 
              local data synchronization, and conflict resolution when reconnecting 
              to the network after offline usage.
            </p>
          </div>
        </div>
        
        <div className="project-impact">
          <h3>Project Impact</h3>
          <p>
            This application demonstrates proficiency in modern frontend frameworks, 
            real-time web technologies, and Progressive Web App development. The focus 
            on user experience and team collaboration showcases understanding of both 
            technical implementation and practical business requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project2;
