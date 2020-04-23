import React from "react";
import "antd/dist/antd.css";
import store from "./store"; //可以不写index.js，React默认会查找文件目录下的index.js文件
import {
  getInputChangeAction,
  getAddDataAction,
  getDeleteAction,
  getTodoList
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.currentTarget.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddDataAction();
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleDeleteClick(index) {
    const action = getDeleteAction(index);
    store.dispatch(action);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteClick={this.handleDeleteClick}
      ></TodoListUI>
    );
  }
}

export default ToDoList;
