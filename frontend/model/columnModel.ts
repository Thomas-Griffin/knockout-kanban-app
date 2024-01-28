import { observable, Observable } from 'knockout'

export default class ColumnModel {
  id: Observable<number>
  title: Observable<string>
  visible: Observable<boolean>

  constructor(id: number, title: string, visible: boolean) {
    this.id = observable(id)
    this.title = observable(title)
    this.visible = observable(visible)
  }
}