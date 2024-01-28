import * as ko from 'knockout'

export default class TaskModel {
  id: ko.Observable<number>
  contents: ko.Observable<string>
  column: ko.Observable<number>


  constructor(id: number, contents: string, column: number) {
    this.id = ko.observable(id)
    this.contents = ko.observable(contents)
    this.column = ko.observable(column)
  }
}