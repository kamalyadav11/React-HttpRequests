import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
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
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" component={FullPost} />
        </Switch>

        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
