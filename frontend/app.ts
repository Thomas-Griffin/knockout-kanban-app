import { applyBindings, components } from 'knockout'
import { KanbanViewModel } from './views/kanbanViewModel'
// @ts-ignore
import column from './components/column.html'
// @ts-ignore
import task from './components/task.html'

const kanbanViewModel = new KanbanViewModel()

components.register('column-component', {
  viewModel: { instance: kanbanViewModel },
  template: column
})

components.register('task-component', {
  viewModel: { instance: kanbanViewModel },
  template: task
})

applyBindings(kanbanViewModel)

