import React, { useEffect, useState } from "react";
import AllPosts from "../components/AllPosts";
import axios from "axios";

const Blog = () => {

  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      axios.get(process.env.REACT_APP_BACKEND_URL).then((response) => {
        setPosts(response.data.posts);
      }).catch((err) => {
        console.log(err);
      });      
    };
    getPosts();
  }, []);

  return (
    posts ? <AllPosts posts={posts} /> : <div>Loading...</div>
  );
};

export default Blog;
