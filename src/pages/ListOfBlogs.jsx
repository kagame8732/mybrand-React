import React, { useState, useEffect } from "react";
import axios from "axios";

function ListOfBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://apis-lvc4.onrender.com/api/blogs")
      .then((response) => {
        setBlogs(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {blogs.map((blog) => {
        <h2>{blog.title}</h2>;
      })}
    </div>
  );
}

export default ListOfBlogs;
