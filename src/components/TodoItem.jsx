import { useState, useRef, useEffect } from 'react'
import PriorityBadge from './PriorityBadge'

export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const [editPriority, setEditPriority] = useState(todo.priority)
  const inputRef = useRef(null)

  useEffect(() => {
    if (editing) inputRef.current?.focus()
  }, [editing])

  function startEdit() {
    setEditText(todo.text)
    setEditPriority(todo.priority)
    setEditing(true)
  }

  function saveEdit() {
    if (!editText.trim()) return
    onEdit(todo.id, editText, editPriority)
    setEditing(false)
  }

  function cancelEdit() {
    setEditing(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') saveEdit()
    if (e.key === 'Escape') cancelEdit()
  }

  if (editing) {
    return (
      <li className="todo-item editing">
        <input
          ref={inputRef}
          type="text"
          value={editText}
          onChange={e => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="edit-input"
        />
        <select
          value={editPriority}
          onChange={e => setEditPriority(e.target.value)}
          className="edit-priority-select"
        >
          <option value="high">🔴 High</option>
          <option value="medium">🟡 Medium</option>
          <option value="low">🟢 Low</option>
        </select>
        <button
          className="save-btn"
          onClick={saveEdit}
          disabled={!editText.trim()}
          title="Save (Enter)"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>check</span>
        </button>
        <button className="cancel-btn" onClick={cancelEdit} title="Cancel (Escape)">
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>close</span>
        </button>
      </li>
    )
  }

  return (
    <li className="todo-item">
      <button
        className={`check-btn ${todo.completed ? 'checked' : ''}`}
        onClick={() => onToggle(todo.id)}
        title={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
          {todo.completed ? 'check_circle' : 'radio_button_unchecked'}
        </span>
      </button>

      <span
        className={`todo-text ${todo.completed ? 'done' : ''}`}
        onDoubleClick={startEdit}
      >
        {todo.text}
      </span>

      <PriorityBadge priority={todo.priority} />

      <div className="item-actions">
        <button className="icon-btn edit" onClick={startEdit} title="Edit">
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>edit</span>
        </button>
        <button className="icon-btn delete" onClick={() => onDelete(todo.id)} title="Delete">
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>delete</span>
        </button>
      </div>
    </li>
  )
}
