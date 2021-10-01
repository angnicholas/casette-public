import React from "react";
import styles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">CASETTE</a>
      <hr></hr>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/#/contact">Contact</a></li>
        <li><a href="/#/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
