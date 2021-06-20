import ItemsApplication from "../../application/items.app";

export default {
  name: 'items-list',
  data() {
    return {
      itemsList: [],
      page: 1,
      limitScroll: 600
    }
  },
  mounted() {
    this.getItemsList()
  },
  methods: {
    async getItemsList() {
      let instance = new ItemsApplication( { _page: this.page })
      let {data} = await instance.list()
      this.itemsList = [ ...this.itemsList, ...data ]
    },
    scrolled(position){
      console.log('scrolled', position)
      if (position >= this.limitScroll) {
        this.limitScroll = this.limitScroll + 650
        this.page = this.page + 1
        this.getItemsList()
      }
    }
  }
}
