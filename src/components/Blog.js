import React from "react";
import PlaceHolder from "../assets/img-placeholder.png";

const Blog = () => (
  <div className="blog">
    <img src={PlaceHolder} alt="blogImage" />
    <div className="test-item">
      <h4>Blog title</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        qui similique sed!
      </p>
    </div>
  </div>
);

export default Blog;
