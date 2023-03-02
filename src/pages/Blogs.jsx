import React from "react";
import NewBlog from "./NewBlog";

function Blogs() {
  return (
    <div className="blog" id="blog">
      <div className="blog-menu">
        <h1 className="blog-heading">Blog</h1>
        <div className="blog-form">
          <NewBlog />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
