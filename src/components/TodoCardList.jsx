import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({
  todos,
  numberOfCards = 3,
  removeTodo,
  completeTodo,
}) => (
  <section className="todo-card-list section">
    {todos && todos.length ? (
      todos
        .filter((todo, index) => index < numberOfCards)
        .map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))
    ) : (
      <p className="todo-card-list__message">Jippi! Ingen todos i dag</p>
    )}
  </section>
);

export default TodoCardList;
