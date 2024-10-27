import React from "react";
import styles from "./CardProjects.module.css";

import developing from "../assets/developing.jpg";

const CardProjects = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.projects}>
        <img src={developing} className={styles.card_img} />
        <h3>{props.nomeProjeto}</h3>
        <p>{props.descricao}</p>
      </div>
    </div>
  );
};

export default CardProjects;
