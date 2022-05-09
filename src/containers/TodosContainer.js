import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ todos }) => ({
    // { todos }는 todos.js 즉 스토어를 의미
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
