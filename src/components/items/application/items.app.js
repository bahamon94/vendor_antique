import ItemsDomain from '../domain/items.domain.js'
export default class ItemsApplication {
  constructor (data = {}) {
  }
  async list () {
    let instance = new ItemsDomain()
    return await instance.list()
  }
  /*async retrieve (id) {
    let instance = new CategorieDomain()
    return instance.retrieve(id)
  }*/
}
