import React, { Component } from "react";
import axios from "axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";

export default class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPost = posts.map(post => {
          return {
            ...post,
            author: "Kamal"
          };
        });
        this.setState({ posts: updatedPost });
      })
      .catch(() => this.setState({ error: true }));
  }

  postSelectHanlder = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p>Something went Wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectHanlder(post.id)}
        />
      ));
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}
