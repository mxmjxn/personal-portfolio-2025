import React from 'react';
import { getCVData } from '../data/cv';

const CV = () => {
  const cv = getCVData();

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = cv.downloadUrl;
    link.download = 'Maxim-Jackson-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="content-section">
      <div className="cv-header">
        <div className="cv-title-section">
          <h1 className="section-title">{cv.personalInfo.name}</h1>
          <h2 className="cv-subtitle">{cv.personalInfo.title}</h2>
        </div>
        <button 
          className="cv-download-btn"
          onClick={handleDownloadCV}
          aria-label="Download CV as PDF"
        >
          Download CV
        </button>
      </div>

      <div className="cv-contact-info">
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href={`mailto:${cv.personalInfo.contact.email}`} className="contact-link">
            {cv.personalInfo.contact.email}
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <a href={`tel:${cv.personalInfo.contact.phone}`} className="contact-link">
            {cv.personalInfo.contact.phone}
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Location:</span>
          <span className="contact-text">{cv.personalInfo.contact.location}</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">LinkedIn:</span>
          <a 
            href={cv.personalInfo.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">GitHub:</span>
          <a 
            href={cv.personalInfo.contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      <div className="cv-section">
        <h3 className="cv-section-title">Professional Summary</h3>
        <p className="cv-summary">{cv.professionalSummary}</p>
      </div>

      <div className="cv-section">
        <h3 className="cv-section-title">Professional Experience</h3>
        {cv.experience.map((job, index) => (
          <div key={index} className="cv-experience-item">
            <div className="cv-job-header">
              <div className="cv-job-title">
                <h4 className="job-position">{job.position}</h4>
                <div className="job-company">{job.company} • {job.location}</div>
              </div>
              <div className="job-duration">{job.duration}</div>
            </div>
            <ul className="cv-responsibilities">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="responsibility-item">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h3 className="cv-section-title">Education</h3>
        {cv.education.map((edu, index) => (
          <div key={index} className="cv-education-item">
            <div className="cv-education-header">
              <div className="cv-education-title">
                <h4 className="education-degree">{edu.degree}</h4>
                <div className="education-institution">{edu.institution} • {edu.location}</div>
              </div>
              <div className="education-duration">{edu.duration}</div>
            </div>
            <ul className="cv-education-details">
              {edu.details.map((detail, idx) => (
                <li key={idx} className="education-detail-item">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h3 className="cv-section-title">Technical Skills</h3>
        <div className="cv-skills-grid">
          <div className="skill-category">
            <h4 className="skill-category-title">Frontend</h4>
            <div className="skill-tags">
              {cv.skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4 className="skill-category-title">Backend</h4>
            <div className="skill-tags">
              {cv.skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4 className="skill-category-title">Databases</h4>
            <div className="skill-tags">
              {cv.skills.databases.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4 className="skill-category-title">Tools & Technologies</h4>
            <div className="skill-tags">
              {cv.skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="cv-section">
        <h3 className="cv-section-title">Certifications</h3>
        <div className="cv-certifications">
          {cv.certifications.map((cert, index) => (
            <div key={index} className="cv-certification-item">
              <div className="certification-name">{cert.name}</div>
              <div className="certification-details">
                {cert.issuer} • {cert.date} • ID: {cert.credentialId}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CV;
