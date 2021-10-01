import React from "react";
import styles from "../styles/Post.module.scss";
import IndexPost from "./IndexPost";

const PostList = ({ posts }) => {
  return (

    <div>

      <div className={styles.bannerImage}>
        
      </div>
    
      <ul className={styles.postList}>
        {posts.map((post) => (
          <IndexPost key={post._id} post={post} />
        ))}
      </ul>

    </div>
  );
};

export default PostList;
