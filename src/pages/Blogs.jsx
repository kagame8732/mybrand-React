import React from "react";
import NewBlog from "./NewBlog";

function Blogs() {
  return (
    <div class="blog" id="blog">
      <div class="blog-menu">
        <h1 class="blog-heading">Blog</h1>
        <div class="blog-form">
          <NewBlog />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
