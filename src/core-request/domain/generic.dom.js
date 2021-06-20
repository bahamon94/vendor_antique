import HttpRequest from '../request/https-request.js'

export default class GenericDomain {
    api = ''
    constructor (dataForm) {
        this.dataForm = dataForm
        this.instanceRequest = new HttpRequest()
    }
    async list () {
        return await this.instanceRequest.list(this.api)
    }
    async create () {
        return await this.instanceRequest.create(this.api, { ...this.dataForm })
    }
    async update () {
        return await this.instanceRequest.update(this.api, { ...this.dataForm })
    }
    async retrieve (id) {
        return await this.instanceRequest.list(this.api + (id ? '/' + id: ''))
    }
    async delete (id) {
        return await this.instanceRequest.delete(this.api + '/' + id)
    }
}
