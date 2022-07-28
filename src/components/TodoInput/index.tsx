import { FormEvent, useState } from "react";
import { useTodosContext } from "../../context/todosContext";
import * as S from "./styles";

const TodoInput = () => {
  const [todo, setTodo] = useState<string>('')
  const {addTodo} = useTodosContext();

  const submitTodo = (e: FormEvent) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  }


  return (
    <S.TodoInputWrapper onSubmit={submitTodo}>
      <input
        type="text"
        name="todo"
        placeholder="What needs to be done?"
        autoFocus
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </S.TodoInputWrapper>
  );
};

export default TodoInput;
