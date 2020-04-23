import { put, takeEvery } from "redux-saga/effects";
import { GET_LIST_DATA } from "./actionTypes";
import { initDataAction } from "./actionCreators";
import axios from "axios";

function* initData() {
  try {
    const res = yield axios.get("/list.json");
    const action = initDataAction(res.data);
    yield put(action);
  } catch (e) {
    console.log("网络请求失败");
  }
}

//generator函数
function* mySaga() {
  yield takeEvery(GET_LIST_DATA, initData);
}

export default mySaga;
