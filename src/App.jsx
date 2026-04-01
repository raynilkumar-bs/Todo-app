import { useTodos } from './hooks/useTodos'
import Header from './components/Header'
import AddTodoInput from './components/AddTodoInput'
import FilterBar from './components/FilterBar'
import BulkActions from './components/BulkActions'
import TodoList from './components/TodoList'

export default function App() {
  const {
    filteredTodos, stats,
    filter, setFilter,
    searchQuery, setSearchQuery,
    sortBy, setSortBy,
    addTodo, toggleTodo, editTodo, deleteTodo,
    clearCompleted, markAllComplete, markAllActive,
  } = useTodos()

  return (
    <div className="app-shell">
      <div className="app-container">
        <Header stats={stats} />

        <div className="card">
          <AddTodoInput onAdd={addTodo} />
          <FilterBar
            filter={filter} setFilter={setFilter}
            searchQuery={searchQuery} setSearchQuery={setSearchQuery}
            sortBy={sortBy} setSortBy={setSortBy}
          />
          <BulkActions
            stats={stats}
            onMarkAllComplete={markAllComplete}
            onMarkAllActive={markAllActive}
            onClearCompleted={clearCompleted}
          />
          <div className="todo-list-wrap">
            <TodoList
              todos={filteredTodos}
              filter={filter}
              searchQuery={searchQuery}
              onToggle={toggleTodo}
              onEdit={editTodo}
              onDelete={deleteTodo}
            />
          </div>
          {stats.total > 0 && (
            <div className="card-footer">
              {stats.total} {stats.total === 1 ? 'todo' : 'todos'} total
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
