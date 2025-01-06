import "./Skills.css";

import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Habilidades</h1>
      <div className="skills_container">
        {/* HTML, CSS, REACT, JAVA, SPRING BOOT, Node */}
        {/* Primeira coluna de skills */}
        <div className="column">
          <div className="row">
            <p>HTML</p>
            <FaHtml5 className="icon" />
          </div>
          <div className="row">
            <p>CSS</p>
            <FaCss3Alt className="icon" />
          </div>
          <div className="row">
            <p>JS</p>
            <FaJs className="icon" />
          </div>
        </div>

        {/* Segunda coluna de skills */}
        <div className="column">
          <div className="row">
            <FaReact className="icon" />
            <p>React</p>
          </div>
          <div className="row">
            <BiLogoSpringBoot className="icon" />
            <p>Spring Boot</p>
          </div>
          <div className="row">
            <FaJava className="icon" />
            <p>Java</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
