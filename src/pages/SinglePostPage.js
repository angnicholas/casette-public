import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { SinglePost } from "../components/SinglePost";
import axios from "axios";

function SinglePostPage() {
  const [data, setData] = useState(null)

  let { id } = useParams();
 
  useEffect(() => {  
    const my_url = process.env.REACT_APP_BACKEND_URL+`/posts/${id}`
    console.log(my_url)
    axios.get(my_url)
      .then(response => {
        if(response.status == 200){
          setData(response.data.post);          
        }else{
          alert('Couldn`t get post data');
        }
    })
    

  }, [])

  return data ? <SinglePost post={data} /> : <div>Loading...</div>

}

export default SinglePostPage;