import ProjectCard from '../components/ProjectCard';
import { getProjectById } from '../data/projects';

const Project2 = ({ onNavigate }) => {
  const project = getProjectById('project2');

  if (!project) {
    return (
      <article className="content-section" role="alert">
        <h1 className="section-title">Project Not Found</h1>
        <p>The requested project could not be found.</p>
      </article>
    );
  }

  return (
    <article className="content-section">
      <nav className="project-navigation" aria-label="Project navigation">
        <button 
          className="nav-arrow nav-arrow-left"
          onClick={() => onNavigate('project1')}
          aria-label="Go to previous project"
        >
          ← Project 1
        </button>
        <span className="project-nav-title">Project 2 of 2</span>
        <button 
          className="nav-arrow nav-arrow-right"
          onClick={() => onNavigate('cv')}
          aria-label="Go to CV page"
        >
          CV →
        </button>
      </nav>

      <header className="page-header">
        <h1 className="section-title">Project Details</h1>
        <p className="page-subtitle">Detailed overview of {project.title}</p>
      </header>
      
      <ProjectCard project={project} isDetailView={true} />
      
      <div className="project-additional-info">
        <section className="project-overview" aria-labelledby="overview-heading">
          <h3 id="overview-heading">Project Overview</h3>
          <p>
            This task management application showcases modern frontend development 
            with Vue.js and real-time collaboration features. The project emphasizes 
            user experience, team productivity, and offline functionality through 
            Progressive Web App technologies.
          </p>
        </section>
        
        <section className="technical-highlights" aria-labelledby="highlights-heading">
          <h3 id="highlights-heading">Technical Highlights</h3>
          <ul>
            <li>Implemented real-time collaboration using WebSocket connections</li>
            <li>Built Progressive Web App with offline functionality</li>
            <li>Created intuitive drag-and-drop interface for task organization</li>
            <li>Integrated Firebase for real-time database and authentication</li>
            <li>Developed advanced filtering and search capabilities</li>
            <li>Implemented push notifications for team collaboration</li>
          </ul>
        </section>
        
        <section className="challenges-solutions" aria-labelledby="challenges-heading">
          <h3 id="challenges-heading">Challenges & Solutions</h3>
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
        </section>
        
        <section className="project-impact" aria-labelledby="impact-heading">
          <h3 id="impact-heading">Project Impact</h3>
          <p>
            This application demonstrates proficiency in modern frontend frameworks, 
            real-time web technologies, and Progressive Web App development. The focus 
            on user experience and team collaboration showcases understanding of both 
            technical implementation and practical business requirements.
          </p>
        </section>
      </div>

      <nav className="project-navigation project-navigation-bottom" aria-label="Project navigation">
        <button 
          className="nav-arrow nav-arrow-left"
          onClick={() => onNavigate('project1')}
          aria-label="Go to previous project"
        >
          ← Project 1
        </button>
        <span className="project-nav-title">Project 2 of 2</span>
        <button 
          className="nav-arrow nav-arrow-right"
          onClick={() => onNavigate('cv')}
          aria-label="Go to CV page"
        >
          CV →
        </button>
      </nav>
    </article>
  );
};

export default Project2;
