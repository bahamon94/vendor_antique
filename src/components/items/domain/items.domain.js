import GenericDomain from '../../../core-request/domain/generic.dom'
export default class ItemsDomain extends GenericDomain {
  api = '/photos'

  constructor (dataForm) {
    super()
    this.dataForm = dataForm
  }
 /* async retrieve(id) {
    this.api = this.retrieve_api
    return super.retrieve(id);
  }*/
}
