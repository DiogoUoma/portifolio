import React from "react";
import styles from "./Navbar.module.css";
import {
  AiFillHome,
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillMerge,
} from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="#home" className={styles.icon}>
        <AiFillHome />
      </a>
      <hr />
      <div>
        <ul className={styles.navbar_list}>
          <li className="navbar_list_link">
            <a href="#about">
              <IoPersonCircle className={styles.icon} />
            </a>
          </li>
          <li className="navbar_list_link">
            <a href="#projects">
              <AiFillMerge className={styles.icon} />
            </a>
          </li>
          <li className="navbar_list_link">
            <a href="#contact">
              <AiOutlineMail className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.socials_link}>
          <li className="navbar_social_link">
            <a href="https://github.com/DiogoUoma">
              <AiFillGithub className={styles.icon} />
            </a>
          </li>
          <li className="navbar_social_link">
            <a href="https://www.linkedin.com/in/diogouoma/">
              <AiFillLinkedin className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
