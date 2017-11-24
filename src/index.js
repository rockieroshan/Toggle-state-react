import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggles = this.toggles.bind(this);
    this.state = {
      visibility: false
    };
  }
  toggles() {
    this.setState(pre => {
      return {
        visibility: !pre.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.toggles}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && <p>Can you see me now?</p>}
      </div>
    );
  }
}
ReactDOM.render(<Visibility />, document.getElementById("root"));
