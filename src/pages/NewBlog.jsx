import React from "react";

function NewBlog() {
  return (
    <form class="blog-form" id="blog-form">
      <div>
        <input type="file" name="blog-image" id="blogImage" />
        <div class="imageError"></div>
      </div>
      <div>
        <input
          type="text"
          id="blogTitle"
          class="blog-form-text"
          placeholder="Blog Title"
          required
        />
      </div>
      <div class="blogNameError"></div>
      <textarea
        class="blog-form-text"
        id="blogMessage"
        placeholder="Description"
        required
      ></textarea>
      <span id="blogSubmit"></span>
      <input type="submit" id="add-blog" class="blog-form-btn" value="Submit" />
    </form>
  );
}

export default NewBlog;
