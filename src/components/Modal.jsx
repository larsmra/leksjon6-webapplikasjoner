import React, { useState, useRef, useEffect } from 'react';

const Modal = ({ setModal, addTodo, maxDescLength = 50 }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [charsLeft, setCharsLeft] = useState(maxDescLength);

  const titleInput = useRef(null);

  // Focus on the title input field when opening the modal.
  useEffect(() => {
    titleInput.current.focus();
  }, []);

  // Closes the modal when the user clicks outside the modal.
  const handleClose = (e) =>
    e.target.getAttribute('name') === 'overlay' && setModal(false);

  const handleTitleChange = (e) =>
    setFormData({ ...formData, title: e.target.value });

  const handleDescriptionChange = (e) =>
    e.target.value.length <= maxDescLength &&
    setFormData({ ...formData, description: e.target.value }) +
      setCharsLeft(maxDescLength - e.target.value.length);

  const handleAuthorChange = (e) =>
    setFormData({ ...formData, author: e.target.value });

  const submitTodo = (e) => {
    e.preventDefault();
    // Creates the todo and closes the modal if all of the input fields contain text.
    return (
      formData.title !== '' &&
      formData.description !== '' &&
      formData.author !== '' &&
      addTodo(formData) + setModal(false)
    );
  };

  return (
    <div
      className="overlay"
      name="overlay"
      role="button"
      tabIndex={0}
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <section className="modal section">
        <header className="modal__header">
          <h2 className="modal__title">New todo</h2>
          <button
            type="button"
            className="modal__close-button"
            onClick={() => setModal(false)}
          >
            <svg className="modal__close-button-icon" width="1em" height="1em">
              <line name="close" x1="0" y1="0" x2="1em" y2="1em" />
              <line name="close" x1="0" y1="1em" x2="1em" y2="0" />
            </svg>
          </button>
        </header>
        <form className="modal__form">
          <label className="modal__label" htmlFor="title">
            Title
          </label>
          <input
            ref={titleInput}
            className="modal__input"
            name="title"
            placeholder="Title"
            onChange={handleTitleChange}
            value={formData.title}
          />
          <label className="modal__label" htmlFor="desc">
            Description{' '}
            <span className="modal__label--gray">
              {`(${charsLeft} ${
                charsLeft === 1 ? 'character' : 'characters'
              } left)`}
            </span>
          </label>
          <input
            className="modal__input"
            name="desc"
            placeholder="Description"
            onChange={handleDescriptionChange}
            value={formData.description}
          />
          <label className="modal__label" htmlFor="author">
            Author
          </label>
          <input
            className="modal__input"
            name="author"
            placeholder="Author"
            onChange={handleAuthorChange}
            value={formData.author}
          />
          <button
            className="modal__create-button"
            type="submit"
            onClick={submitTodo}
          >
            Create
          </button>
        </form>
      </section>
    </div>
  );
};

export default Modal;
