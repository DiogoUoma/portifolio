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
      <a href="https:\\www.twitch.tv/joyaruki" className={styles.icon}>
        <AiFillHome />
      </a>
      <hr />
      <ul className={styles.navbar_list}>
        <li className="navbar_list_link">
          <a href="#">
            <IoPersonCircle className={styles.icon} />
          </a>
        </li>
        <li className="navbar_list_link">
          <a href="#">
            <AiFillMerge className={styles.icon} />
          </a>
        </li>
        <li className="navbar_list_link">
          <a href="#">
            <AiOutlineMail className={styles.icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
