import React from "react";
import styles from "../styles/Footer.module.scss";

const Nav = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.socialmedia}>
        <a href="https://facebook.com"><img src="fb.png"></img></a>
        <a href="https://instagram.com"><img src="ig.png"></img></a>
        <a href="https://linkedin.com"><img src="in.png"></img></a>
        
      </div>
      
      <p>©2021 by Casette.</p>
    </footer>
  );
};

export default Nav;
