import React from "react";

// 파일을 분리해서 컴포넌트 만들어도 상관은 없음
function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done} // checked는 html input 태그의 속성 중 하나
        readOnly={true} //readOnly도 html 속성. true를 하게 되면 읽기 전용이 된다
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
}

function Todos({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input); // 입력한 값 등록
    onChangeInput(""); // 등록 후 인풋 초기화
  };

  const onChange = (e) => onChangeInput(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {/* map 돌리는 건 리듀서의 초기상태값 안의 todos */}
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default Todos;
