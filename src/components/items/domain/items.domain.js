import GenericDomain from '../../../core-request/domain/generic.dom'
export default class ItemsDomain extends GenericDomain {
  api = '/photos/'

  constructor (dataForm) {
    super()
    this.dataForm = dataForm
  }

}
