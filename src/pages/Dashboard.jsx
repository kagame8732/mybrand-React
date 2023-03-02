import React from "react";
import Blogs from "../pages/Blogs";
import "../styles/dash.css";
import ContactList from "./ContactList";
import ListOfBlogs from "./ListOfBlogs";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul className="dash-nav">
          <li>
            <a href="#">
              <i className="fa fa-server"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#blog-list">
              <i className="fa fa-rss-square"></i>
              <span>Blogs</span>
            </a>
          </li>
          <li>
            <a href="#contact-messages">
              <i className="fa fa-commenting-o"></i>
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-cog"></i>
              <span>Setting</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-sign-out"></i>Logout
            </a>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="blogs-lists">
          <h2 className="card-dash">dashboard</h2>
          <div className="blog-list" id="blog-list">
            <div className="list-of-blogs">
              <h2 className="blog-list-heading">List of blogs</h2>
              <ListOfBlogs />
            </div>
          </div>
          <div className="contact-messages" id="contact-messages">
            <h4 className="card-text">List of Messages</h4>
            <ContactList />
          </div>
        </div>

        <Blogs />
      </div>
    </div>
  );
}

export default Dashboard;
