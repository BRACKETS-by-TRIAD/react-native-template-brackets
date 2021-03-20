import { makeObservable, observable } from 'mobx'

class Store {
  user?: any = undefined

  constructor() {
    makeObservable(this, {
      user: observable.ref,
    })
  }
}

export const AppStore = new Store()
