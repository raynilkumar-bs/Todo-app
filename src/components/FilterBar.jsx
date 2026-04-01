const FILTERS = ['all', 'active', 'completed']

export default function FilterBar({
  filter, setFilter,
  searchQuery, setSearchQuery,
  sortBy, setSortBy,
}) {
  return (
    <div className="filter-section">
      <div className="filter-row">
        <div className="filter-tabs">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-tab ${filter === f ? 'active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>
        <select
          className="sort-select"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="created">Date created</option>
          <option value="alpha">A → Z</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div className="search-wrap">
        <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#b0b4c8' }}>
          search
        </span>
        <input
          className="search-input"
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search todos..."
        />
        {searchQuery && (
          <button className="search-clear" onClick={() => setSearchQuery('')}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
          </button>
        )}
      </div>
    </div>
  )
}
