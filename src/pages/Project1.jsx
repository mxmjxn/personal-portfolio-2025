import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjectById } from '../data/projects';

const Project1 = () => {
  const project = getProjectById('project1');

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
            This e-commerce platform represents a comprehensive full-stack solution 
            designed to handle modern online retail requirements. The project demonstrates 
            proficiency in both frontend and backend development, with particular emphasis 
            on user experience, security, and scalability.
          </p>
        </div>
        
        <div className="technical-highlights">
          <h3>Technical Highlights</h3>
          <ul>
            <li>Implemented secure JWT-based authentication system</li>
            <li>Integrated Stripe API for secure payment processing</li>
            <li>Built responsive design using CSS Grid and Flexbox</li>
            <li>Developed RESTful API with Express.js and MongoDB</li>
            <li>Created admin dashboard with real-time inventory management</li>
            <li>Optimized performance with lazy loading and code splitting</li>
          </ul>
        </div>
        
        <div className="challenges-solutions">
          <h3>Challenges & Solutions</h3>
          <div className="challenge-item">
            <h4>Challenge: Secure Payment Processing</h4>
            <p>
              Implementing secure payment handling while maintaining user experience 
              required careful integration with Stripe's API and proper error handling 
              for various payment scenarios.
            </p>
          </div>
          <div className="challenge-item">
            <h4>Challenge: Real-time Inventory Management</h4>
            <p>
              Ensuring accurate inventory tracking across multiple concurrent users 
              required implementing proper database transactions and optimistic locking 
              mechanisms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
