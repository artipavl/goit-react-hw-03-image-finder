const onSubmit = (e, onSearch) => {
  e.preventDefault();
  onSearch(e.target.elements.search.value);
};

export const Searchbar = ({ onSearch, search, onChange }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={e => onSubmit(e, onSearch)}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={search}
          onChange={e => {
            onChange(e.target.value);
          }}
          className="SearchForm-input"
          type="text"
          name="search"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
