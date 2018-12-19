import { Model } from '@vuex-orm/core'
import User from './User'
import TodoUser from './TodoUser'

export default class Todo extends Model {
  static entity = 'todos'

  static fields () {
    return {
      id: this.increment(),
      title: this.string(''),
      done: this.boolean(false),
      assignees: this.belongsToMany(User, TodoUser, 'todo_id', 'user_id')
    }
  }
}
