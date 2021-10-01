import React from "react";
import style from "../styles/Post.module.scss";

function Post({ post }) {
  const date_created = new Date(post.date_created);
  const date_created_formatted = date_created.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  
  return (
    
    <div className={style.post} >

      <div className={style.coverimage}>
        <img src={process.env.BACKEND_URL+post.cover_image_url}></img>
      </div>
      
      <div className={style.indexContent}>
        <div>
          <h1><a href={process.env.PUBLIC_URL+`/#/posts/${post._id}`} key={post._id}>{post.title}</a></h1>
          <p><i>Written By: {post.author_name}</i></p>
          <p style={{ marginBottom: "20px" }}>{date_created_formatted}</p>
        </div>
      </div>
    
    </div>
  );
}

export default Post;
