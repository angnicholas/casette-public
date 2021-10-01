import React, { useEffect, useState } from "react";
import styles from "../styles/SinglePost.module.scss";
import { useParams, useHistory } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const SinglePost = ({post}) => {
  const date_created = new Date(post.date_created);
  const date_created_formatted = date_created.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  const date_modified = new Date(post.date_modified);
  const date_modified_formatted = date_modified.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <img src={process.env.BACKEND_URL+post.cover_image_url}></img>
        
        <div className={styles.postContentWithoutPicture}>
          <i className={styles.authorText}>Written by {post.author_name} • Created {date_created_formatted} • Modified {date_modified_formatted}</i>
          <h1 className={styles.titleText}>{post.title}</h1>          
          <div className={styles.postText} dangerouslySetInnerHTML={{__html:post.text}}></div>
        </div>

      </div>
    </div>
  );
};

