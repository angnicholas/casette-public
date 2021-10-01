import React from "react";
import styles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <a href={process.env.PUBLIC_URL}>CASETTE</a>
      <hr></hr>
      <ul>
        <li><a href={process.env.PUBLIC_URL}>Home</a></li>
        <li><a href={process.env.PUBLIC_URL+"/#/contact"}>Contact</a></li>
        <li><a href={process.env.PUBLIC_URL+"/#/about"}>About</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
