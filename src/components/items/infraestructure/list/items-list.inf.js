import ItemsApplication from "../../application/items.app";
import ViewItemList from "components/items/infraestructure/viewItems/viewItems-list.inf";

export default {
  name: 'items-list',
  components: {ViewItemList},
  data() {
    return {
      itemsList: [],
      page: 1,
      limitScroll: 600,
      dialog: false,
    }
  },
  mounted() {
    this.getItemsList()
  },
  methods: {
    async getItemsList() {
      let instance = new ItemsApplication({_page: this.page})
      let {data} = await instance.list()
      this.itemsList = [...this.itemsList, ...data]
    },
    scrolled(position) {
      if (position >= this.limitScroll) {
        this.limitScroll = this.limitScroll + 650
        this.page = this.page + 1
        this.getItemsList()
      }
    },
    viewItem(item) {
      this.$router.push({path: `/items/${item.id}`})
    }
  }
}
