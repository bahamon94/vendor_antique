export default class GenericApp {
    genericDomainClass = Object
    formData = {}
    constructor () { }
    async list () {
        let instance = new this.genericDomainClass()
        return await instance.list()
    }
    async create () {
        let instance = new this.genericDomainClass(this.formData)
        return await instance.create()
    }
    async update () {
        let instance = new this.genericDomainClass(this.formData)
        return await instance.update()
    }
    async retrieve (id) {
        let instance = new this.genericDomainClass()
        return await instance.retrieve(id)
    }
}
