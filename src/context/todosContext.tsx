import { createContext, ReactNode, useContext, useState } from "react";

export type TodoItemProps = {
  id: string;
  description: string;
  completed: boolean;
};

type TodosContextType = {
  todos: TodoItemProps[];
  addTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
};

type TodosContextProviderProps = {
  children: ReactNode;
};

const TodosContext = createContext({} as TodosContextType);

const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);

  const addTodo = (todo: string) => {
    const newTodo = {
      id: Date.now().toString(),
      description: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: string) => {
    const newTodosList = todos.filter((todo) => todo.id !== id);

    setTodos(newTodosList);
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

export const useTodosContext = () => {
  const { todos, addTodo, removeTodo } = useContext(TodosContext);

  return {
    todos,
    addTodo,
    removeTodo,
  };
};
