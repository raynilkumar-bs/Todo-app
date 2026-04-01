import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'gradient',
      values: [{ name: 'gradient', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }],
    },
  },
}

export const Empty = {
  args: { stats: { total: 0, active: 0, completed: 0 } },
}

export const WithTasks = {
  args: { stats: { total: 5, active: 3, completed: 2 } },
}

export const AllDone = {
  args: { stats: { total: 4, active: 0, completed: 4 } },
}

export const SingleTask = {
  args: { stats: { total: 1, active: 1, completed: 0 } },
}
