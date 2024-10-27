import React from "react";
import styles from "./Connect.module.css";
import {
  AiFillMail,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillPhone,
} from "react-icons/ai";

const Connect = () => {
  return (
    <div className={styles.contact_container} id="contact">
      <h1>Connect</h1>
      <p>Será um prazer trabalhar com você! 😄</p>
      <div className={styles.contact_item}>
        <a href="mailto:diogouoma3105@gmail.com?client=Gmail">
          <AiFillMail />
        </a>
        <a href="https://wa.me/5544999073105">
          <AiOutlineWhatsApp />
        </a>
        <a href="https://www.linkedin.com/in/diogouoma/">
          <AiFillLinkedin />
        </a>
        <a href="tel:5544999073105">
          <AiFillPhone />
        </a>
      </div>
    </div>
  );
};

export default Connect;
