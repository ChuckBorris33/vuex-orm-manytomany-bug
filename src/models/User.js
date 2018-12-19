import { Model } from '@vuex-orm/core'
import Todo from './Todo'
import TodoUser from './TodoUser'

export default class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.increment(),
      name: this.string(''),
      todos: this.belongsToMany(Todo, TodoUser, 'user_id', 'todo_id')
    }
  }
}
