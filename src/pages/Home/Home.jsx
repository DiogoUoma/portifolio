import React from "react";
import styles from "./Home.module.css";
import myImg from "../../assets/me2.jpg";

const Home = () => {
  return (
    <div className={styles.container_home} id="home">
      <div className={styles.home_text}>
        <h1>Bem-vindo!</h1>
        <p>me chamo</p>
        <h2>Diogo Uoma</h2>
        <p>
          Desenvolvedor <span>fullstack</span>
        </p>
      </div>
      <img src={myImg} className={styles.home_img} />
    </div>
  );
};

export default Home;
