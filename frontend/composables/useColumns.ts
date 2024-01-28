import Column from '../types/column'
import ColumnModel from '../model/columnModel'
import { observable, Observable, observableArray, ObservableArray } from 'knockout'

class UseColumns {
  columns: ObservableArray<ColumnModel>
  error: Observable<Error | undefined>


  constructor() {
    this.error = observable()
    this.columns = observableArray()
  }

  async getColumns() {
    await fetch('http://localhost:3000/columns').then((response: Response) => {
      response.json().then(columns => this.columns(columns.map((column: Column) => new ColumnModel(column.id, column.title, true))))
        .catch((error) => {
            this.error(error as Error)
          }
        )
    })
  }
}

export default UseColumns