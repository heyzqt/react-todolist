import {
  CHANGE_INPUT_DATA,
  ADD_LIST_DATA,
  DELETE_LIST_DATA,
  INIT_LIST_DATA
} from "./actionTypes";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_DATA,
  value
});

export const getAddDataAction = () => ({
  type: ADD_LIST_DATA
});

export const getDeleteAction = (index) => ({
  type: DELETE_LIST_DATA,
  index
});

export const initDataAction = (list) => ({
  type: INIT_LIST_DATA,
  list
});

export const getTodoList = () => {
  return (dispatch) => {
    //模拟网络请求
    new Promise((resolve, reject) => {
      let data = ["hello", "world", "hahahaha"];
      setTimeout(() => {
        resolve(data);
      }, 2000);
    }).then((data) => {
      const action = initDataAction(data);
      dispatch(action);
    });
  };
};
