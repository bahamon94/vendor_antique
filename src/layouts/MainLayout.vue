<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left"/>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"/>
        </q-avatar>

        <q-toolbar-title>Vendors antique</q-toolbar-title>

        <q-btn flat round dense icon="exit_to_app" @click="logOut"/>
      </q-toolbar>
    </q-header>


    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            clickable
            v-ripple
            :active="link === 'items'"
            @click="changeRoute('items')"
          >
            <q-item-section avatar>
              <q-icon name="category"/>
            </q-item-section>

            <q-item-section>
              Items
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="link === 'add'"
            @click="changeRoute('add')"
          >
            <q-item-section avatar>
              <q-icon name="add_circle"/>
            </q-item-section>

            <q-item-section>
              Add new item
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
          >

          </q-item>
        </q-list>
      </q-scroll-area>

    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view/>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'Main-Layout',
  data() {
    return {
      left: false,
      link: 'items',
    }
  },
  mounted() {
    this.link = this.$route.path.split('/')[1]
  },
  methods: {
    logOut() {
      this.$q.localStorage.remove('dataUser')
      this.$router.push('/auth/login')
    },
    changeRoute(route) {
      let cases = {
        'items': () => {
          this.$router.push({path: '/items'})
          this.link = route
        },
        'add': () => {
          this.$router.push({path: '/add'})
          this.link = route
        }
      }
        cases[route]()

    }
  }


}
</script>
