import TodoItem from './TodoItem'

export default function TodoList({ todos, filter, searchQuery, onToggle, onEdit, onDelete }) {
  if (todos.length === 0) {
    let icon = 'task_alt'
    let title = 'No todos yet'
    let sub = 'Add your first task above!'

    if (searchQuery.trim()) {
      icon = 'search_off'
      title = 'No results found'
      sub = `Nothing matches "${searchQuery}"`
    } else if (filter === 'completed') {
      icon = 'checklist'
      title = 'No completed tasks'
      sub = 'Complete a task to see it here.'
    } else if (filter === 'active') {
      icon = 'celebration'
      title = 'All caught up!'
      sub = 'No active tasks remaining.'
    }

    return (
      <div className="empty-state">
        <span className="material-symbols-outlined empty-icon">{icon}</span>
        <p className="empty-title">{title}</p>
        <p className="empty-sub">{sub}</p>
      </div>
    )
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
