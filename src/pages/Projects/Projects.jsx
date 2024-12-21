import "./Projects.css";
import MainCard from "../../components/MainCard.jsx";

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="background_title">
        <div className="title">
          <h1>Projects</h1>
        </div>
      </div>
      <div className="content">
        <div className="main_projects">
          <MainCard
            name={"Projeto em andamento"}
            description={"Descrição do primeiro porjeto principal"}
          />
          <MainCard
            name={"Projeto em andamento"}
            description={"A descrição do segundo projeto"}
          />
        </div>
        <div className="other_projects"></div>
      </div>
    </div>
  );
};

export default Projects;
