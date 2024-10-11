import React from "react";
import styles from "./About.module.css";
import programmer from "../../assets/programmer.jpg";

import {
  BiLogoJavascript,
  BiLogoJava,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoSass,
  BiLogoGithub,
  BiLogoTypescript,
  BiLogoNodejs,
} from "react-icons/bi";

const About = () => {
  return (
    <div>
      <div className={styles.container_about}>
        <img src={programmer} className={styles.about_img} />
        <div className={styles.about_text}>
          <h1>Sobre mim</h1>
          <p>
            Olá! Meu nome é Diogo e sou desenvolvedor web. Tenho experiência em
            criar soluções web modernas e eficientes, desde sites institucionais
            até aplicações web dinâmicas. Trabalho com tecnologias como HTML,
            CSS, JavaScript, React, Node.js e bancos de dados, sempre buscando
            entregar produtos com alta performance e boa experiência de usuário.
            Estou sempre aprendendo novas ferramentas e tendências para garantir
            que meus projetos estejam atualizados com o que há de mais recente
            no mercado.
          </p>
          <div className={styles.skills_container}>
            <h2>Minhas habilidades</h2>
            <div className={styles.skill_list}>
              <ul>
                <li className={styles.skills_icon}>
                  <BiLogoHtml5 />
                </li>
                <li className={styles.skills_icon}>
                  <BiLogoCss3 />
                </li>
                <li className={styles.skills_icon}>
                  <BiLogoJavascript />
                </li>
                <li className={styles.skills_icon}>
                  <BiLogoReact />
                </li>
                <li className={styles.skills_icon}>
                  <BiLogoTypescript />
                </li>
                <li className={styles.skills_icon}>
                  <BiLogoSass />
                </li>
                <li className={styles.skills_icon}>
                  <BiLogoJava />
                </li>
                <li className={styles.skills_icon}>
                  <BiLogoNodejs />
                </li>
                <li className={styles.skills_icon}>
                  <BiLogoGithub />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
