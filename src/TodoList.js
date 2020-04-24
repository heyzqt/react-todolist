import React from "react";
import { connect } from "react-redux";
import {
  getChangeDataAction,
  getAddListAction,
  getDeleteListAction
} from "./store/actionCreators";

const TodoList = (props) => {
  const {
    inputValue,
    list,
    handleInputChange,
    handleBtnClick,
    handleDeleteClick
  } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} onClick={() => handleDeleteClick(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//关联store的值
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

//拿到dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getChangeDataAction(e);
      dispatch(action);
    },
    handleBtnClick() {
      const action = getAddListAction();
      dispatch(action);
    },
    handleDeleteClick(index) {
      const action = getDeleteListAction(index);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
