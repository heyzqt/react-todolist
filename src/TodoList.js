import React from "react";
import { connect } from "react-redux";
import { CHANGE_INPUT_DATA } from "./store/actionTypes";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>heyzqt</li>
        </ul>
      </div>
    );
  }
}

//关联store的值
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  };
};

//拿到dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: CHANGE_INPUT_DATA,
        value: e.currentTarget.value
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
