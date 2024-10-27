import React from "react";
import styles from "./Projects.module.css";

import CardProjects from "../../components/CardProjects";

const Projects = () => {
  return (
    <div className={styles.container_projects} id="projects">
      <h1>Projetos</h1>
      <div className={styles.card_container}>
        <CardProjects
          nomeProjeto={"Projeto em desenvolvimento"}
          descricao={"Projeto ainda esta em desenvolvimento"}
          linkGithub={"link1"}
          linkProjeto={"link2"}
        />
        <CardProjects
          nomeProjeto={"Projeto em desenvolvimento"}
          descricao={"Projeto ainda esta em desenvolvimento"}
          linkGithub={"link1"}
          linkProjeto={"link2"}
        />
        <CardProjects
          nomeProjeto={"Projeto em desenvolvimento"}
          descricao={"Projeto ainda esta em desenvolvimento"}
          linkGithub={"link1"}
          linkProjeto={"link2"}
        />
      </div>
    </div>
  );
};

export default Projects;
