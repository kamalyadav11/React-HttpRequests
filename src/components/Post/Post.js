import React from "react";

import "./Post.css";

const post = props => (
  <article className="Post">
    <h1 title={props.title}>Title</h1>
    <div className="Info">
      <div className="Author" author={props.author}>
        Author
      </div>
    </div>
  </article>
);

export default post;
