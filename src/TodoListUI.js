import React from "react";
import { Input, Button, List } from "antd";

const TodoListUI = (props) => {
  return (
    <div>
      <div>
        <Input
          value={props.inputValue}
          placeholder="enter something"
          style={{ width: "300px" }}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>
          提交
        </Button>
      </div>
      <List
        style={{ width: "300px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.handleDeleteClick(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;
