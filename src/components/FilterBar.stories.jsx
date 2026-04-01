import { fn } from '@storybook/test'
import FilterBar from './FilterBar'

export default {
  title: 'Components/FilterBar',
  component: FilterBar,
  parameters: { layout: 'padded' },
  args: {
    filter: 'all',
    setFilter: fn(),
    searchQuery: '',
    setSearchQuery: fn(),
    sortBy: 'created',
    setSortBy: fn(),
  },
}

export const Default = {}

export const ActiveFilter = {
  args: { filter: 'active' },
}

export const CompletedFilter = {
  args: { filter: 'completed' },
}

export const WithSearch = {
  args: { searchQuery: 'buy milk' },
}

export const SortedAlpha = {
  args: { sortBy: 'alpha' },
}
