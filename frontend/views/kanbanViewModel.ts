import { observable, Observable, observableArray, ObservableArray } from 'knockout'
import ColumnModel from '../model/columnModel'
import TaskModel from '../model/taskModel'
import UseColumns from '../composables/useColumns'
import UseTasks from '../composables/useTasks'

const useColumns = new UseColumns()
const useTasks = new UseTasks()

export class KanbanViewModel {
  isLoading: Observable<boolean>
  columns: ObservableArray<ColumnModel>
  tasks: ObservableArray<TaskModel>


  constructor() {
    this.columns = observableArray()
    this.tasks = observableArray()
    this.isLoading = observable(true)
    this.fetchData().then(() => {
      this.isLoading(false)
    }).catch(error => console.error(error))
  }

  async fetchData() {
    await useColumns.getColumns()
    await useTasks.getTasks()
    this.columns(useColumns.columns())
    this.tasks(useTasks.tasks())
  }


  addTaskToColumn(columnId: number): void {
    this.tasks.push(new TaskModel(this.tasks().length + 1, '', columnId))
  }

  deleteTask(task: TaskModel): void {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const index = this.tasks.indexOf(task)
      if (index > -1) {
        this.tasks.splice(index, 1)
      }
    }
  }

  drag(event: DragEvent, task: TaskModel): void {
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', String(task.id()))
    }
  }

  drop(event: DragEvent): void {
    const taskId = event.dataTransfer?.getData('text/plain')
    if (taskId) {
      const task: TaskModel | undefined = this.tasks().find((task: TaskModel) => task.id() === Number(taskId))
      if (task) {
        const columnElement = (event.target as HTMLElement).closest('.kanban-column')
        if (columnElement) {
          const columnId = Number(columnElement.getAttribute('column-id'))
          task.column(columnId)
          task.column.valueHasMutated()
          this.tasks.valueHasMutated()
        }
      }
    }
  }

  getTasksByColumn(columnId: number): TaskModel[] {
    return this.tasks().filter((task: TaskModel) => task.column() === columnId)
  }

  taskCountByColumnId(columnId: number): number {
    return this.getTasksByColumn(columnId).length
  }
}
