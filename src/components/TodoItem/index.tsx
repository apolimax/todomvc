import { FormEvent, useEffect, useState } from "react";
import { useTodosContext } from "../../context/todosContext";
import CheckTodo from "../CheckTodo";
import RemoveTodo from "../RemoveTodo";
import { TodoItemProps } from "../TodoList";
import * as S from "./styles";

const TodoItem = ({ ...props }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newDescription, setNewDescription] = useState(props.description);
  const { markTodoAsComplete, todos, setTodos } = useTodosContext();

  useEffect(() => {
    document.addEventListener("click", () => setIsEditing(false));
  }, []);

  const editTodo = (e: FormEvent) => {
    e.preventDefault();

    if (!newDescription.trim()) {
      return;
    }

    const updatedTodo = { ...props, description: newDescription };

    const updatedTodos = todos.map((todo) => {
      if (todo.id === props.id) {
        return updatedTodo;
      }
      return todo;
    });

    setTodos(updatedTodos);
    setIsEditing(false);
  };

  return (
    <S.TodoItemWrapper>
      <S.TodoCheckName isCompleted={props.completed}>
        <CheckTodo
          id={props.id}
          checkTodo={markTodoAsComplete}
          isEditingTodo={isEditing}
        />
        {isEditing ? (
          <S.EditTodoForm onSubmit={editTodo}>
            <input
              type="text"
              autoFocus
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </S.EditTodoForm>
        ) : (
          <p onDoubleClick={() => setIsEditing(true)}>{props.description}</p>
        )}
      </S.TodoCheckName>
      {!isEditing && <RemoveTodo id={props.id} />}
    </S.TodoItemWrapper>
  );
};

export default TodoItem;
