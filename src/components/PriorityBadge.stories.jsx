import PriorityBadge from './PriorityBadge'

export default {
  title: 'Components/PriorityBadge',
  component: PriorityBadge,
  parameters: { layout: 'centered' },
  argTypes: {
    priority: { control: 'select', options: ['high', 'medium', 'low'] },
  },
}

export const High = { args: { priority: 'high' } }
export const Medium = { args: { priority: 'medium' } }
export const Low = { args: { priority: 'low' } }

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <PriorityBadge priority="high" />
      <PriorityBadge priority="medium" />
      <PriorityBadge priority="low" />
    </div>
  ),
}
