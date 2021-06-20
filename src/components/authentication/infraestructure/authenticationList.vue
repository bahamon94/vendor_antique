<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#125562, #125562);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;">
          <q-card-section class="bg-blue-grey">
            <h4 class="text-h5 text-white q-my-md">Vendors Antique App</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-md">
              <q-input square clearable v-model="form.username" type="email" label="Username">
                <template v-slot:prepend>
                  <q-icon name="email"/>
                </template>
              </q-input>
              <q-input square clearable v-model="form.password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock"/>
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="blue-grey-8"
              class="full-width text-white"
              label="Sign In"
              :disable="$v.$invalid"
              @click="onLogin"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <div class="flex"></div>
            <p class="text-grey-6">Forgot your password?</p>
            <p class="text-grey-6">Forgot your password?</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script src="./authentication-list.inf.js"></script>
