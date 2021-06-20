<template>
  <div class="row items-start q-gutter-lg">

    <div class="my-card q-pa-md row items-start">
      <q-card>
        <img :src="itemInfo.thumbnailUrl" style="max-height: 250px">

        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="import_contacts"/>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ itemInfo.id }}</q-item-label>
              <q-item-label caption>Antique Id</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="red" name="title"/>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ itemInfo.title }}</q-item-label>
              <q-item-label caption>Description antique</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable @click="seeOfferForm = true">
            <q-item-section avatar>
              <q-icon color="amber" name="price_change"/>
            </q-item-section>

            <q-item-section>
              <q-item-label>To bid</q-item-label>
              <q-item-label caption>click to process.</q-item-label>
            </q-item-section>


          </q-item>
          <q-card-actions @click="returnItems">
            <q-btn flat round icon="keyboard_return" />
            <q-btn flat color="dark">
              return
            </q-btn>
          </q-card-actions>
        </q-list>
      </q-card>
    </div>

    <div v-show="seeOfferForm" class="q-pa-md " >

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          v-model="offer"
          filled
          type="number"
          label="Your offer"
          hint="Money offer"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' && val > 0 || 'Please type your offer',

        ]"
        />

        <div>
          <q-btn label="confirm" type="submit" color="primary"/>
          <q-btn label="Cancel" type="reset" color="negative" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>
  </div>
</template>
<script src="./viewItems-list.inf.js"></script>
<style src="./viewItems-list.inf.css"></style>
