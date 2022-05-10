import React from "react";
import { createStore } from "redux";
// https://redux.js.org/introduction/why-rtk-is-redux-today
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules"; //index.js는 경로에서 index 없어도 불러오기가 가능하다

// 스토어에는 루트리듀서를 넣어줘야 한다.
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // props로 store를 넘겨서 APP의 하위에서 store를 모두 사용할 수 있게 한다
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
