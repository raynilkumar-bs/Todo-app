import { fn } from '@storybook/test'
import BulkActions from './BulkActions'

export default {
  title: 'Components/BulkActions',
  component: BulkActions,
  parameters: { layout: 'padded' },
  args: {
    onMarkAllComplete: fn(),
    onMarkAllActive: fn(),
    onClearCompleted: fn(),
  },
}

export const AllActive = {
  args: { stats: { total: 3, active: 3, completed: 0 } },
}

export const Mixed = {
  args: { stats: { total: 5, active: 3, completed: 2 } },
}

export const AllCompleted = {
  args: { stats: { total: 4, active: 0, completed: 4 } },
}

export const Empty = {
  args: { stats: { total: 0, active: 0, completed: 0 } },
}
