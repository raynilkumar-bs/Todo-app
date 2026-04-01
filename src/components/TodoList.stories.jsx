import { fn } from '@storybook/test'
import TodoList from './TodoList'

export default {
  title: 'Components/TodoList',
  component: TodoList,
  parameters: { layout: 'padded' },
  args: {
    filter: 'all',
    searchQuery: '',
    onToggle: fn(),
    onEdit: fn(),
    onDelete: fn(),
  },
}

const TODOS = [
  { id: '1', text: 'Submit quarterly report', completed: false, priority: 'high', createdAt: Date.now() - 3000 },
  { id: '2', text: 'Buy groceries', completed: true, priority: 'medium', createdAt: Date.now() - 2000 },
  { id: '3', text: 'Water the plants', completed: false, priority: 'low', createdAt: Date.now() - 1000 },
  { id: '4', text: 'Call the dentist', completed: false, priority: 'high', createdAt: Date.now() },
]

export const WithTodos = {
  args: { todos: TODOS },
}

export const EmptyDefault = {
  args: { todos: [], filter: 'all', searchQuery: '' },
}

export const EmptyActiveFilter = {
  args: { todos: [], filter: 'active', searchQuery: '' },
}

export const EmptyCompletedFilter = {
  args: { todos: [], filter: 'completed', searchQuery: '' },
}

export const EmptySearch = {
  args: { todos: [], filter: 'all', searchQuery: 'dentist' },
}

export const AllCompleted = {
  args: {
    todos: TODOS.map(t => ({ ...t, completed: true })),
    filter: 'all',
  },
}
