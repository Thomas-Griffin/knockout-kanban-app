import { observableArray } from 'knockout'
import { connect, setState } from 'knockout-store'
import Column from '../types/column'
import Task from '../types/task'

const state = {
  columns: observableArray([
    {
      id: 1,
      title: 'New',
      visible: true
    },
    {
      id: 2,
      title: 'In Progress',
      visible: true
    },
    {
      id: 3,
      title: 'Done',
      visible: true
    }
  ] as Column[]),

  tasks: observableArray([
    {
      id: 1,
      contents: 'This is a description for task 1.',
      column: 1
    },
    {
      id: 2,
      contents: 'This is a description for task 2',
      column: 2
    },
    {
      id: 3,
      contents: 'This is a description for task 3',
      column: 2
    },
    {
      id: 4,
      contents: 'This is a description for task 4',
      column: 3
    },
    {
      id: 5,
      contents: 'This is a description for task 5',
      column: 3
    }
  ] as Task[])
}

setState(state)

export default connect(() => state)
