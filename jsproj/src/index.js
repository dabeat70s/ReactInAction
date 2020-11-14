// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

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

