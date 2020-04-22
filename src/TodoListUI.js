import React from "react";
import { Input, Button, List } from "antd";

class TodoListUI extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Input
            value={this.props.inputValue}
            placeholder="enter something"
            style={{ width: "300px" }}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ width: "300px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={(index) => {
                this.props.handleDeleteClick(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoListUI;
