import React from 'react';

const Search = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <form className="search-bar">
      <label htmlFor="search">Search</label>
      <input
        className="search-bar__input"
        type="text"
        name="search"
        placeholder="Todotitle"
        onChange={handleSearch}
        value={search}
      />
      {search && (
        <button
          className="search-bar__clear-button"
          type="button"
          onClick={clearSearch}
        >
          <svg className="search-bar__button-icon" width="1em" height="1em">
            <line name="close" x1="0" y1="0" x2="1em" y2="1em" />
            <line name="close" x1="0" y1="1em" x2="1em" y2="0" />
          </svg>
        </button>
      )}
    </form>
  );
};

export default Search;
