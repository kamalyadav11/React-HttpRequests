import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeStyle={{ textDecoration: "underline" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post" activeClassName="active">
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not FOUND</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
