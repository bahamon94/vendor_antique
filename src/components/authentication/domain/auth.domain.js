import GenericDomain from '../../../core-request/domain/generic.dom'
export default class AuthDomain extends GenericDomain {
  api = '/users'

  constructor (dataForm) {
    super()
    this.dataForm = dataForm
  }
}
