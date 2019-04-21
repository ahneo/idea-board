import React from "react";
import ReactDOM from "react-dom";
import Idea from "./Idea";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Ideas Board!"),
    React.createElement(Idea),
    React.createElement(Idea),
    React.createElement(Idea)
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
