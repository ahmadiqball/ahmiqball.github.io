import "./Projects.css";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-wrap">
        <h1>Projects</h1>
        <p>
          As part of my learning journey. I have create some projects that you
          could see bellow. You could click the project card to find out more
          about the project that i have published.
        </p>
        <div className="projects-card">
          {ProjectData.map((data) => (
            <ProjectCard projectData={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
