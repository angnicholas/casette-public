import React from "react";
import styles from "../styles/Footer.module.scss";

const Nav = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.socialmedia}>
        <a href="https://facebook.com"><img src="%PUBLIC_URL%/fb.png"></img></a>
        <a href="https://instagram.com"><img src="%PUBLIC_URL%/fg.png"></img></a>
        <a href="https://linkedin.com"><img src="%PUBLIC_URL%/in.png"></img></a>
        
      </div>
      
      <p>©2021 by Casette.</p>
    </footer>
  );
};

export default Nav;
