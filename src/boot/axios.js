import Vue from 'vue'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

Vue.prototype.$axios = axios
Vue.prototype.$api = api

export { axios, api }
