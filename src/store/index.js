import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import todoSages from './sagas'

const sagaMiddleware = createSagaMiddleware()

//添加redux-devtools调试工具
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(Reducer, enhancer);

sagaMiddleware.run(todoSages)

export default store;
