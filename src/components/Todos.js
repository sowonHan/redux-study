import React from "react";

// 파일을 분리해서 컴포넌트 만들어도 상관은 없음
function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
}

function Todos({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default Todos;
