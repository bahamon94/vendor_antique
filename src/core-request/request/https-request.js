import { api } from 'boot/axios'


export default class HttpRequest {
    constructor () {

    }
    list (endpoint) {
        return new Promise((resolve, reject) => {
          console.log(api)
            api.get(endpoint).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
                console.log(error, 'manejar_error')
            })
        })
    }
    create (endpoint, data) {
        return new Promise((resolve, reject) => {
            api.$axios.post(endpoint, data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
                console.log(error, 'manejar_error')
            })
        })
    }
    update (endpoint, data) {
        return new Promise((resolve, reject) => {
            api.$axios.put(endpoint, data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
                console.log(error, 'manejar_error')
            })
        })
    }
    delete (endpoint, data) {
        return new Promise((resolve, reject) => {
            api.$axios.delete(endpoint, data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
                console.log(error, 'manejar_error')
            })
        })
    }
}
