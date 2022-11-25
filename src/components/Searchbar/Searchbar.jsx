const onSubmit = (e,onSearch) => {
    e.preventDefault();
    onSearch(e.target.elements.search.value)
    e.target.reset();
}
    

export const Searchbar = ({ onSearch }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={(e)=>onSubmit(e,onSearch)}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
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
