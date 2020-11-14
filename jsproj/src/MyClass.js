import React, { Component } from "react";
import { render } from "reactdom";
import PropTypes from "proptypes";

const node = document.getElementById("root");
class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post",
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id,
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody",
          },
          this.props.content
        )
      )
    );
  }
}
Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
const App = React.createElement(Post, {
  id: 1,
  content: " said: This is a post!",
  user: "mark",
});
render(App, node);
