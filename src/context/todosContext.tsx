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
  toggleAllTodos: () => void;
  countActives: () => number;
  setTodos: (todos: TodoItemProps[]) => void;
  isAllTodosCompleted: () => boolean;
};

type TodosContextProviderProps = {
  children: ReactNode;
};

const TodosContext = createContext({} as TodosContextType);

const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);

  const addTodo = (todo: string) => {
    if (!todo.trim()) {
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      description: todo.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: string) => {
    const newTodosList = todos.filter((todo) => todo.id !== id);

    setTodos(newTodosList);
  };

  const markTodoAsComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const isAllTodosCompleted = () => todos.every((todo) => todo.completed);

  const toggleAllTodos = () => {
    const isAllCompleted = isAllTodosCompleted();

    if (isAllCompleted) {
      const toggledTodos = todos.map((todo) => ({
        ...todo,
        completed: false,
      }));

      setTodos(toggledTodos);
    } else {
      const toggledTodos = todos.map((todo) => {
        if (!todo.completed) {
          return {
            ...todo,
            completed: true,
          };
        } else {
          return todo;
        }
      });

      setTodos(toggledTodos);
    }
  };

  const countActives = () => {
    const activesTodos = todos.reduce((acc, curr) => {
      if (curr.completed) {
        acc++;
      }

      return acc;
    }, 0);

    return activesTodos;
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        markTodoAsComplete,
        toggleAllTodos,
        countActives,
        setTodos,
        isAllTodosCompleted,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

export const useTodosContext = () => {
  const {
    todos,
    addTodo,
    removeTodo,
    markTodoAsComplete,
    toggleAllTodos,
    countActives,
    setTodos,
    isAllTodosCompleted,
  } = useContext(TodosContext);

  return {
    todos,
    addTodo,
    removeTodo,
    markTodoAsComplete,
    toggleAllTodos,
    countActives,
    setTodos,
    isAllTodosCompleted,
  };
};
