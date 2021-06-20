import AuthDomain from '../domain/auth.domain.js'

export default class AuthApplication {
  constructor(data) {
    this.data = data
  }

  async login() {
    let instance = new AuthDomain()

    const user = this.data.username.charAt(0).toUpperCase() + this.data.username.slice(1).toLowerCase()
    instance.api = `${instance.api}?username=${user}`
    return await instance.list()
  }
}
