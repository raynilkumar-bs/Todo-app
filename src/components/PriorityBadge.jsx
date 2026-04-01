const CLASS = {
  high: 'priority-badge badge-high',
  medium: 'priority-badge badge-medium',
  low: 'priority-badge badge-low',
}

const LABEL = { high: 'High', medium: 'Medium', low: 'Low' }

export default function PriorityBadge({ priority }) {
  return <span className={CLASS[priority]}>{LABEL[priority]}</span>
}
