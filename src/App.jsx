import { useState } from "react";
import Layout from "./components/Layout";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import CV from "./pages/CV";
import "./styles/index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="content-section">
            <h1 className="section-title">
              Welcome to Maxim Jackson's Portfolio
            </h1>
            <p className="intro-text">
              Hello! I'm Maxim Jackson, a passionate developer creating
              innovative solutions with modern web technologies. Explore my
              projects and professional background to learn more about my work
              and experience.
            </p>
          </div>
        );
      case "project1":
        return <Project1 />;
      case "project2":
        return <Project2 />;
      case "cv":
        return <CV />;
      default:
        return (
          <div className="content-section">
            <h1 className="section-title">Page Not Found</h1>
            <p>The requested page could not be found.</p>
          </div>
        );
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPageContent()}
    </Layout>
  );
}

export default App;
