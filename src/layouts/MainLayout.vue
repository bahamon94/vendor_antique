<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated>
      <q-toolbar class="glossy">
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>

        <q-toolbar-title>Vendors antique</q-toolbar-title>

        <q-btn flat round dense icon="exit_to_app" />
      </q-toolbar>
    </q-header>


    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
