import React, { useState } from "react";
import axios from "axios";
import "../styles/style.css";

function NewBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://apis-lvc4.onrender.com/api/blogs", {
        title: title,
        description: description,
      })
      .then((response) => {
        console.log(response);
        setMessage("Blog submitted successfully!");
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.log(error);
        setMessage("An error occurred while submitting the blog.");
      });
  };

  return (
    <form className="blog-form" id="blog-form" onSubmit={handleSubmit}>
      <div>
        <input type="file" name="blog-image" id="blogImage" />
        <div className="imageError"></div>
      </div>
      <div>
        <input
          type="text"
          id="blogTitle"
          className="blog-form-text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
      </div>
      <div className="blogNameError"></div>
      <textarea
        className="blog-form-text"
        id="blogMessage"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        required
      ></textarea>
      <span id="blogSubmit"></span>
      <input
        type="submit"
        id="add-blog"
        className="blog-form-btn"
        value="Submit"
      />
      {message && <div className="form-message">{message}</div>}
    </form>
  );
}

export default NewBlog;
