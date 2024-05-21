import React, { useCallback, useState } from "react";

interface Todo {
  id: number;
  name: string;
}

export default function B5() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.floor(Math.random() * 1000000), name: newTodo },
      ]);
      setNewTodo("");
    }
  }, [newTodo]);
  return (
    <div>
      B5
      <input
        type="text"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={handleAddTodo}>Thêm</button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
    </div>
  );
}
