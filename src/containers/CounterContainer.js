import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

// 프레젠테이셔널 컴포넌트인 Counter로 state와 액션을 넘겨주기 위한 함수
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 리덕스 스토어 안의 state값을 가져와서 컴포넌트(CounterContainer)의 props로 넘겨주기 위한 함수
// const mapStateToProps = (state) => ({
//   // counter는 모듈 counter를 말하는 것
//   number: state.counter.number,
// });

// 액션 생성 함수의 값을 가져와서 컴포넌트(CounterContainer)의 props로 넘겨주기 위한 함수
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// connect : 컴포넌트를 리덕스와 연결시키는 역할
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 간단하게 쓰는 방법. 이렇게 해도 connect가 위의 코드와 동일하게 인식해서 처리한다
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
