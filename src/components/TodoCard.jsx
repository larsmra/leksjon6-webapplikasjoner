import React from 'react';

const TodoCard = ({ todo, removeTodo, completeTodo }) => {
  const handleRemoving = () => {
    removeTodo(todo);
  };

  const handleCompleting = () => {
    completeTodo(todo);
  };

  return (
    <article className="todo-card">
      <header>
        <h2 className="todo-card__title">{todo.title}</h2>
      </header>
      <p className="todo-card__description">{todo.description}</p>
      <section className="todo-card__button-section">
        <button
          className="todo-card__button todo-card__button--red"
          type="button"
          onClick={handleRemoving}
        >
          Delete
        </button>
        <button
          className="todo-card__button todo-card__button--turquoise"
          type="button"
          onClick={handleCompleting}
        >
          Complete
        </button>
      </section>
    </article>
  );
};

export default TodoCard;
