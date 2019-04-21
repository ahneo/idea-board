import React from "react";
import ReactDOM from "react-dom";
import Idea from "./Idea";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ideas Board!</h1>
        <Idea
          title="Idea 1"
          body="paragraph of 140 characters in the body paragraph of 140 characters in
        the body paragraph of 140 characters in the body paragraph of 140."
        />
        <Idea
          title="Idea 2"
          body="paragraph of 140 characters in the body paragraph of 140 characters in
        the body paragraph of 140 characters in the body paragraph of 140."
        />
        <Idea
          title="Idea 3"
          body="paragraph of 140 characters in the body paragraph of 140 characters in
        the body paragraph of 140 characters in the body paragraph of 140."
        />
        <Idea
          title="Idea 4"
          body="paragraph of 140 characters in the body paragraph of 140 characters in
        the body paragraph of 140 characters in the body paragraph of 140."
        />
        <Idea
          title="Idea 5"
          body="paragraph of 140 characters in the body paragraph of 140 characters in
        the body paragraph of 140 characters in the body paragraph of 140."
        />
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
