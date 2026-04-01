import { fn } from '@storybook/test'
import AddTodoInput from './AddTodoInput'

export default {
  title: 'Components/AddTodoInput',
  component: AddTodoInput,
  parameters: { layout: 'padded' },
  args: { onAdd: fn() },
}

export const Default = {}

export const WithBackground = {
  decorators: [
    Story => (
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: 24, borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
}
