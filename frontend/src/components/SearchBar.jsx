import '../styles/SearchBar.css'

function SearchBar({ searchTerm, onSearchChange, placeholder }) {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder || 'Search...'}
          className="search-input"
        />
        {searchTerm && (
          <button
            className="clear-search-btn"
            onClick={() => onSearchChange('')}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
