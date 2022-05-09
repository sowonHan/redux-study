// 루트 리듀서. 기존에 만들어둔 리듀서들을 하나로 합쳐주는 역할. (그래야 컴포넌트 여기저기서 리듀서를 가져다쓰기 편리하니까)
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
