import ItemsDomain from '../domain/items.domain.js'

export default class ItemsApplication {
  constructor(data) {
    this.data = data
  }

  async list() {
    let instance = new ItemsDomain()

    if (instance.api.indexOf('?') >= 0) instance.api = instance.api + '&'
    else instance.api = instance.api + '?'

    for (let key in this.data) {
      const value = encodeURIComponent(this.data[key])
      instance.api = instance.api + `${key}=${value}&`
    }


    return await instance.list()
  }

  /*async retrieve (id) {
    let instance = new CategorieDomain()
    return instance.retrieve(id)
  }*/
}
