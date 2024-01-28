import Task from '../types/task'
import TaskModel from '../model/taskModel'
import { observable, Observable, observableArray, ObservableArray } from 'knockout'

class UseTasks {
  tasks: ObservableArray<TaskModel>
  error: Observable<Error | undefined>

  constructor() {
    this.error = observable()
    this.tasks = observableArray()
  }

  async getTasks() {
    await fetch('http://localhost:3000/tasks').then((response: Response) => {
      response.json().then(tasks => this.tasks(tasks.map((task: Task) => new TaskModel(task.id, task.contents, task.column)))
      ).catch((error) => {
          this.error(error as Error)
        }
      )
    })
  }
}

export default UseTasks