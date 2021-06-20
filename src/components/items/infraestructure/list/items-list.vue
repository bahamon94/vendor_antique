<template>
  <div class="q-pa-lg row items-start q-gutter-lg">
    <q-card
      v-for="item in 10" :key="item"
      class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" >
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>
      <q-card-section>
<!--        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />-->
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          $・Italian, Cafe
        </div>
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script src="./items-list.inf.js" ></script>
<style src="./items-list.inf.css" ></style>

