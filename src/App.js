import React, { Fragment } from "react";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.isShow ? "show" : "hide"}>hello world</div>
        <button onClick={this.handleClick}>change state</button>
      </Fragment>
    );
  }
}

export default App;
