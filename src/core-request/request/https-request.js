export default class HttpRequest {
    constructor () {

    }
    list (endpoint) {
        return new Promise((resolve, reject) => {
            window.$q.$axios.get(endpoint).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
                console.log(error, 'manejar_error')
            })
        })
    }
    create (endpoint, data) {
        return new Promise((resolve, reject) => {
            window.$q.$axios.post(endpoint, data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
                console.log(error, 'manejar_error')
            })
        })
    }
    update (endpoint, data) {
        return new Promise((resolve, reject) => {
            window.$q.$axios.put(endpoint, data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
                console.log(error, 'manejar_error')
            })
        })
    }
    delete (endpoint, data) {
        return new Promise((resolve, reject) => {
            window.$q.$axios.delete(endpoint, data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
                console.log(error, 'manejar_error')
            })
        })
    }
}
