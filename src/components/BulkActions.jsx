export default function BulkActions({ stats, onMarkAllComplete, onMarkAllActive, onClearCompleted }) {
  if (stats.total === 0) return null

  return (
    <div className="bulk-actions">
      <button
        className="bulk-btn"
        onClick={onMarkAllComplete}
        disabled={stats.active === 0}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>done_all</span>
        Mark all complete
      </button>
      <span className="bulk-sep">·</span>
      <button
        className="bulk-btn"
        onClick={onMarkAllActive}
        disabled={stats.completed === 0}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>remove_done</span>
        Uncheck all
      </button>
      {stats.completed > 0 && (
        <>
          <span className="bulk-sep">·</span>
          <button className="bulk-btn danger" onClick={onClearCompleted}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>delete_sweep</span>
            Clear {stats.completed} completed
          </button>
        </>
      )}
    </div>
  )
}
