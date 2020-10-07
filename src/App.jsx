import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TodoButton from './components/TodoButton';
import TodoCardList from './components/TodoCardList';
import CompletedList from './components/CompletedList';
import Modal from './components/Modal';

let todoId = 0;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [modal, setModal] = useState(false);

  const incrementId = () => (todoId += 1);

  const addTodo = (formData) => {
    setTodos((prev) => [{ id: todoId, ...formData }, ...prev]);
    incrementId();
  };

  const removeTodo = (removed) =>
    setTodos((prev) => prev.filter((todo) => todo !== removed));

  const completeTodo = (completed) => {
    removeTodo(completed);
    setCompletedTodos((prev) => [
      { ...completed, completedDate: new Date() },
      ...prev,
    ]);
  };

  return (
    <>
      <Navbar title="HIOF" user="User user" />
      <main className="main-container">
        <TodoButton setModal={setModal} />
        <TodoCardList
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
        <CompletedList todos={completedTodos} />
      </main>
      {modal && <Modal setModal={setModal} addTodo={addTodo} />}
    </>
  );
};

export default App;
