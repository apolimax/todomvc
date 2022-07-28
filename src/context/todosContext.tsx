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
  markTodoAsComplete: (id: string) => void;
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

  const markTodoAsComplete = (id: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          id: todo.id,
          description: todo.description,
          completed: !todo.completed
        }
      }
      return todo
    })

    setTodos(updatedTodos);
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, markTodoAsComplete }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

export const useTodosContext = () => {
  const { todos, addTodo, removeTodo, markTodoAsComplete } = useContext(TodosContext);

  return {
    todos,
    addTodo,
    removeTodo,
    markTodoAsComplete
  };
};
