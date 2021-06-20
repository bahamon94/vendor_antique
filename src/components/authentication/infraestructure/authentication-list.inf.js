import AuthApplication from "components/authentication/application/auth.app.js";
import {required} from 'vuelidate/lib/validators'

export default {
  name:'Authentication-list',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      username: {required},
      password: {required}
    }
  },
  methods: {
    async onLogin() {
      if (Object.is(this.form.username,this.form.password)){
        let instance = new AuthApplication(this.form)
        const existUser = await instance.login()
        console.log(existUser)
        if (existUser){
          this.$q.localStorage.set('dataUser', existUser.data)
          this.$router.push('/')
        }

      } else {
        this.$q.notify({
          color: 'warning',
          icon: 'warning',
          message: 'username or password incorrect',
          actions: [{icon:'close', color: 'white'}]
        })

      }

    }
  }
}


