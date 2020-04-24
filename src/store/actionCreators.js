import {
  CHANGE_INPUT_DATA,
  ADD_LIST_DATA,
  DELETE_LIST_DATA
} from "./actionTypes";

export const getChangeDataAction = (e) => ({
  type: CHANGE_INPUT_DATA,
  value: e.currentTarget.value
});

export const getAddListAction = () => ({
  type: ADD_LIST_DATA
});

export const getDeleteListAction = (index) => ({
  type: DELETE_LIST_DATA,
  index
});
