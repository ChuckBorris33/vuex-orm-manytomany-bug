import { Model } from '@vuex-orm/core'

export default class TodoUser extends Model {
  static entity = 'todoUser'
  static primaryKey = ['todo_id', 'user_id']

  static fields () {
    return {
      todo_id: this.attr(null),
      user_id: this.attr(null)
    }
  }
}
