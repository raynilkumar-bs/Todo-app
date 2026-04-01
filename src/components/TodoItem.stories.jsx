import { fn } from '@storybook/test'
import TodoItem from './TodoItem'

export default {
  title: 'Components/TodoItem',
  component: TodoItem,
  parameters: { layout: 'padded' },
  args: {
    onToggle: fn(),
    onEdit: fn(),
    onDelete: fn(),
  },
  decorators: [
    Story => (
      <ul style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', border: '1px solid #f2f4f8', listStyle: 'none' }}>
        <Story />
      </ul>
    ),
  ],
}

const base = {
  id: '1',
  createdAt: Date.now(),
}

export const ActiveHigh = {
  args: {
    todo: { ...base, text: 'Submit quarterly report', completed: false, priority: 'high' },
  },
}

export const ActiveMedium = {
  args: {
    todo: { ...base, text: 'Buy groceries for the week', completed: false, priority: 'medium' },
  },
}

export const ActiveLow = {
  args: {
    todo: { ...base, text: 'Water the plants', completed: false, priority: 'low' },
  },
}

export const Completed = {
  args: {
    todo: { ...base, text: 'Call the dentist', completed: true, priority: 'medium' },
  },
}

export const LongText = {
  args: {
    todo: {
      ...base,
      text: 'Review and respond to all pending emails from the last two weeks before end of day Friday',
      completed: false,
      priority: 'high',
    },
  },
}

export const AllVariants = {
  render: args => (
    <ul style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', border: '1px solid #f2f4f8', listStyle: 'none' }}>
      {[
        { id: '1', text: 'High priority task', completed: false, priority: 'high', createdAt: Date.now() },
        { id: '2', text: 'Medium priority task', completed: false, priority: 'medium', createdAt: Date.now() },
        { id: '3', text: 'Completed task', completed: true, priority: 'low', createdAt: Date.now() },
      ].map(todo => (
        <TodoItem key={todo.id} todo={todo} {...args} />
      ))}
    </ul>
  ),
}
