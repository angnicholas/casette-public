import React, { useEffect, useState } from "react";
import AllPosts from "../components/AllPosts";
import axios from "axios";

const Blog = () => {

  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      console.log(process.env.REACT_APP_BACKEND_URL);
      axios.get(process.env.REACT_APP_BACKEND_URL).then((response) => {
        console.log(response.data.posts);
        setPosts(response.data.posts);
      }).catch((err) => {
        console.log(err);
      });      
    };
    getPosts();
  }, []);

  console.log(posts);

  return (
    posts ? <AllPosts posts={posts} /> : <div>Loading...</div>
  );
};

export default Blog;
