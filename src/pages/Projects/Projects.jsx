import "./Projects.css";
import MainCard from "../../components/MainCard.jsx";
import Cards from "../../components/Cards.jsx";

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="background_title">
        <div className="title">
          <h1>Projetos</h1>
        </div>
      </div>
      <div className="content_projects">
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

        <div className="more_projects">
          <Cards
            name={"Outro Projeto 1"}
            description={"Descrição do primeiro projeto"}
          />
          <Cards
            name={"Outro Projeto 2"}
            description={"Descrição do segundo projeto"}
          />
          <Cards
            name={"Outro Projeto 3"}
            description={"Descrição do terceiro projeto"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
