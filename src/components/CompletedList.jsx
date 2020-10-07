import React, { useState } from 'react';
import Search from './Search';
import CompletedItem from './CompletedItem';

const CompletedList = ({ todos }) => {
  const [search, setSearch] = useState('');

  return (
    <section className="section">
      <h2>Completed todos</h2>
      <Search setSearch={setSearch} search={search} />
      <table className="completed-list">
        <tbody>
          <tr className="completed-list__header">
            <th className="completed-list__header-cell">Title</th>
            <th className="completed-list__header-cell">Author</th>
            <th className="completed-list__header-cell">Description</th>
            <th className="completed-list__header-cell">Completed Date</th>
          </tr>
          {todos &&
            todos
              .filter((todo) =>
                todo.title.toUpperCase().includes(search.toUpperCase())
              )
              .map((todo) => <CompletedItem key={todo.id} todo={todo} />)}
        </tbody>
      </table>
    </section>
  );
};

export default CompletedList;
