import React from 'react';

const TodoButton = ({ setModal }) => (
  <section className="section">
    <button
      className="todo-button"
      type="button"
      onClick={() => setModal(true)}
    >
      <svg className="todo-button__icon" width="1em" height="1em">
        <line x1="0" y1="0.5em" x2="1em" y2="0.5em" />
        <line x1="0.5em" y1="0" x2="0.5em" y2="1em" />
      </svg>
      <span>Todo</span>
    </button>
  </section>
);

export default TodoButton;
