<template>
  <div class="row full-width justify-center">
    <div
      class="col-6 items-center">
      <q-card
        class="my-card">
        <q-card-section class="collumn col-12 full-width">
          <q-input
            v-model="newItem.name"
            class="q-mb-md"
            color="blue-grey-10"
            type="text"
            label="Name item"
            error-message="required field"
            :error="$v.newItem.name.$invalid"
            counter
            maxlength="20"
          />
          <q-input
            v-model="newItem.title"
            class="q-mb-md"
            color="blue-grey-10"
            type="text"
            label="Title"
            error-message="required field"
            :error="$v.newItem.title.$invalid"
            counter
            maxlength="20"

          />
          <q-input
            v-model="newItem.description"
            class="q-mb-md"
            color="blue-grey-10"
            type="text"
            label="Description"
            error-message="required field"
            :error="$v.newItem.description.$invalid"
            counter
            maxlength="40"

          />
          <q-btn
            class="q-mt-md full-width"
            :color="$v.newItem.$invalid ? 'grey' : 'blue-grey-10'"
            label="Save"
            :disable="$v.newItem.$invalid"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import {required, maxLength, email, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'Formulario',
  data() {
    return {
      newItem: {
        name: '',
        title: '',
        description: ''
      }
    }
  },
  validations: {
    newItem: {
      name: {required, maxLength: maxLength(20)},
      title: {required, minLength: minLength(4), maxLength: maxLength(20)},
      description: {required, minLength: minLength(4), maxLength: maxLength(40)}

    }
  },
  methods: {

  }
}
</script>
