import { getCVData } from '../data/cv';

const CV = () => {
  const cv = getCVData();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv.downloadUrl;
    link.download = 'Maxim-Jackson-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cv-page">
      {/* Hero Section - Dark */}
      <section className="section-block section-block--dark">
        <div className="section-content">
          <div className="cv-hero">
            <h1 className="cv-name">{cv.personalInfo.name}</h1>
            <h2 className="cv-title">{cv.personalInfo.title}</h2>
            <button 
              className="cv-download-btn"
              onClick={handleDownloadCV}
              aria-label="Download CV as PDF document"
            >
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section - Light */}
      <section className="section-block section-block--light">
        <div className="section-content">
          <div className="cv-contact">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href={`mailto:${cv.personalInfo.contact.email}`} className="contact-value">
                {cv.personalInfo.contact.email}
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">{cv.personalInfo.contact.location}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a href={cv.personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-value">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Dark */}
      <section className="section-block section-block--dark">
        <div className="section-content">
          <h3 className="section-heading">Experience</h3>
          <div className="cv-experience">
            {cv.experience.slice(0, 2).map((job, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h4 className="job-title">{job.position}</h4>
                  <span className="job-duration">{job.duration}</span>
                </div>
                <div className="job-company">{job.company}</div>
                <p className="job-summary">{job.responsibilities[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Accent */}
      <section className="section-block section-block--accent">
        <div className="section-content">
          <h3 className="section-heading">Skills</h3>
          <div className="skills-grid">
            <div className="skill-group">
              <div className="skill-icon-header">
                <span className="skill-category-icon">⚛️</span>
                <h4>Frontend</h4>
              </div>
              <div className="skill-tags">
                {cv.skills.frontend.slice(0, 4).map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-icon-header">
                <span className="skill-category-icon">🔧</span>
                <h4>Backend</h4>
              </div>
              <div className="skill-tags">
                {cv.skills.backend.slice(0, 4).map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Achievement Highlights */}
          <div className="achievement-highlights">
            <div className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <div className="achievement-text">
                <h4>Top Performer</h4>
                <p>Consistently delivered high-quality projects</p>
              </div>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🚀</span>
              <div className="achievement-text">
                <h4>Innovation Focus</h4>
                <p>Implemented cutting-edge solutions</p>
              </div>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">👥</span>
              <div className="achievement-text">
                <h4>Team Player</h4>
                <p>Collaborated effectively in cross-functional teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
