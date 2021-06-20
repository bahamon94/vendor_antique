import ItemsApplication from "../../application/items.app";

export default {
  data() {
    return {
      itemInfo: [],
      offer: 0,
      seeOfferForm: false
    }
  },
  mounted() {
    this.getRetrieveItem(this.$route.params.item)
  },
  methods: {
    async getRetrieveItem(itemId) {
      if (Number.isInteger(parseInt(itemId))) {
        let instance = new ItemsApplication()
        console.log(instance)
        const {data} = await instance.retrieve(itemId)
        this.itemInfo = data
      }
    },
    onSubmit() {
      this.$q.notify({
        color: 'green-10',
        textColor: 'white',
        icon: 'check_circle',
        message: 'The offer is correct register'
      })
      this.onReset()
    },
    onReset() {
      this.offer = 0
      this.seeOfferForm = false
      this.returnItems()
    },
    async returnItems() {
      await this.$router.push('/')
    }
  }

}
