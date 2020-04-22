import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store"; //可以不写index.js，React默认会查找文件目录下的index.js文件

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    const action = {
      type: "change-input-data",
      value: e.currentTarget.value,
    };
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = {
      type: "add-list-data",
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleDeleteClick(index) {
    const action = {
      type: "delete-list-data",
      index: index,
    };
    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="enter something"
            style={{ width: "300px" }}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ width: "300px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleDeleteClick.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ToDoList;
