export default function Header({ stats }) {
  const remaining = stats.active
  const label = remaining === 1 ? 'task remaining' : 'tasks remaining'

  return (
    <div className="header">
      <div className="header-icon-wrap">
        <span className="material-symbols-outlined" style={{ fontSize: 32, color: '#fff' }}>
          task_alt
        </span>
      </div>
      <h1 className="header-title">My Todos</h1>
      <p className="header-subtitle">
        {stats.total === 0
          ? 'Nothing here yet — add your first task!'
          : `${remaining} ${label} · ${stats.completed} completed`}
      </p>
    </div>
  )
}
