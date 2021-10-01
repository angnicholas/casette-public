import React from "react";
import styles from "../styles/Contact.module.scss";

const About = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainContent}>

        <p className="redTitle">ABOUT THE BLOG</p>

        <p>The Story</p>

        <p>What is it that fuels you? For me, it’s Casette. I
          love writing about my passions, what interest me, what
          interests others, and sharing all of my thoughts with my 
          readers.</p>

        <p>Casette is truly my own little passion project, gaining 
          more and more traction each day. I hope you enjoy browsing 
          my site and all of the unique content I have to offer. 
          Take a look around; perhaps you’ll discover what fuels you 
          as well. Read on and enjoy!</p>
          
      </div>      
    </div>    
  );
};

export default About;