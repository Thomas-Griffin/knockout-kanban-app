import Column from './column'
import Task from './task'

export default interface KanbanDatabase {
  columns: Array<Column>
  tasks: Array<Task>
}