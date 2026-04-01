import { useState, useEffect, useMemo } from 'react'
import { loadTodos, saveTodos } from '../utils/storage'

export function useTodos() {
  const [todos, setTodos] = useState(() => loadTodos())
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('created')

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  function addTodo(text, priority = 'medium') {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos(prev => [
      {
        id: crypto.randomUUID(),
        text: trimmed,
        completed: false,
        priority,
        createdAt: Date.now(),
      },
      ...prev,
    ])
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  function editTodo(id, newText, newPriority) {
    const trimmed = newText.trim()
    if (!trimmed) return
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, text: trimmed, priority: newPriority } : t
      )
    )
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  function clearCompleted() {
    setTodos(prev => prev.filter(t => !t.completed))
  }

  function markAllComplete() {
    setTodos(prev => prev.map(t => ({ ...t, completed: true })))
  }

  function markAllActive() {
    setTodos(prev => prev.map(t => ({ ...t, completed: false })))
  }

  const stats = useMemo(() => {
    const total = todos.length
    const completed = todos.filter(t => t.completed).length
    return { total, completed, active: total - completed }
  }, [todos])

  const filteredTodos = useMemo(() => {
    const PRIORITY_ORDER = { high: 0, medium: 1, low: 2 }

    let result = todos.filter(t => {
      if (filter === 'active') return !t.completed
      if (filter === 'completed') return t.completed
      return true
    })

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(t => t.text.toLowerCase().includes(q))
    }

    result = [...result].sort((a, b) => {
      if (sortBy === 'alpha') return a.text.localeCompare(b.text)
      if (sortBy === 'priority') return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
      return b.createdAt - a.createdAt
    })

    return result
  }, [todos, filter, searchQuery, sortBy])

  return {
    todos,
    filteredTodos,
    stats,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    clearCompleted,
    markAllComplete,
    markAllActive,
  }
}
