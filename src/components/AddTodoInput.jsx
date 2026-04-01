import { useState } from 'react'

export default function AddTodoInput({ onAdd }) {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('medium')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text, priority)
    setText('')
    setPriority('medium')
  }

  return (
    <div className="add-section">
      <form onSubmit={handleSubmit} className="add-input-wrap">
        <span className="material-symbols-outlined" style={{ color: '#b0b4c8', fontSize: 20 }}>
          add_task
        </span>
        <input
          className="add-input"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <select
          className="priority-select"
          value={priority}
          onChange={e => setPriority(e.target.value)}
        >
          <option value="high">🔴 High</option>
          <option value="medium">🟡 Medium</option>
          <option value="low">🟢 Low</option>
        </select>
        <button type="submit" className="add-btn" disabled={!text.trim()}>
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>
          Add
        </button>
      </form>
    </div>
  )
}
