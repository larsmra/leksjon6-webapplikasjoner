import React from 'react';

const CompletedItem = ({ todo }) => {
  // A function that formats the date.
  const formatDateString = (date) => {
    // Adds a zero in front of the date if it is only one digit.
    const day =
      date.getDate().toString().length > 1
        ? date.getDate().toString()
        : `0${date.getDate().toString()}`;

    // Adds a zero in front of the month if it is only one digit.
    const month =
      (date.getMonth() + 1).toString().length > 1
        ? (date.getMonth() + 1).toString()
        : `0${(date.getMonth() + 1).toString()}`;

    // Removes the first two digits of the year.
    const year = date.getFullYear().toString().substr(-2);

    return `${day}.${month}.${year}`;
  };

  return (
    <>
      <tr className="completed-list__todo">
        <td className="completed-list__todo-data">{todo.title}</td>
        <td className="completed-list__todo-data">{todo.author}</td>
        <td className="completed-list__todo-data">{todo.description}</td>
        <td className="completed-list__todo-data">
          {formatDateString(todo.completedDate)}
        </td>
      </tr>
    </>
  );
};

export default CompletedItem;
