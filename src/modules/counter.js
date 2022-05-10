/* 리덕스의 기본 3가지 */

// 액션 타입
// 명명규칙 : '모듈이름/액션이름'
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태와 리듀서(리덕스 구조 안에서도 실제 데이터 변형은 리듀서에서 일어난다)
const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  // 리듀서는 state와 action을 받는다
  //state = initialState : state에 값이 들어오지 않을 경우 initialState를 받아온다는 뜻
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;

/* export와 export default의 차이점
default를 붙이면 불러올 때 하나씩만 불러올 수 있고
그냥 export는 {} 안에 여러 개를 한꺼번에 불러올 수 있다.
https://pinokio0702.tistory.com/370*/
