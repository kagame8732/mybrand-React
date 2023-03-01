import React from "react";
import "../styles/dash.css";

function Dashboard() {
  return (
    <div class="dashboard">
      <div class="sidebar">
        <ul class="dash-nav">
          <li>
            <a href="#">
              <i class="fa fa-server"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#blog-list">
              <i class="fa fa-rss-square"></i>
              <span>Blogs</span>
            </a>
          </li>
          <li>
            <a href="#contact-messages">
              <i class="fa fa-commenting-o"></i>
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-cog"></i>
              <span>Setting</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-sign-out"></i>Logout
            </a>
          </li>
        </ul>
      </div>
      <div class="main">
        <div class="blogs-lists">
          <h2 class="card-dash">dashboard</h2>
          {/* Blog List  */}
          <div class="blog-list" id="blog-list">
            <div class="list-of-blogs">
              <h2 class="blog-list-heading">List of blogs</h2>
              <div id="blog-cards" class="blog-cards"></div>
              <input type="hidden" id="blogId" />
            </div>
          </div>
          {/* Contact List */}
          <div class="contact-messages" id="contact-messages">
            <h4 class="card-text">List of Messages</h4>
            <div class="contactMessages" id="contactMessages"></div>
          </div>
        </div>
        {/* Blog */}
      </div>
    </div>
  );
}

export default Dashboard;
