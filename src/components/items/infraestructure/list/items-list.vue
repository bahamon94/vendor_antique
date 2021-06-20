<template>
  <div v-scroll="scrolled" class="q-pa-lg row items-start q-gutter-lg">

    <q-card
      v-for="antique in itemsList" :key="antique.id"
      class="my-card"
      style="max-height: 20%"
    >
      <q-img :src="antique.thumbnailUrl" >
        <div class="absolute-bottom text-h6">
          {{ antique.title }}
        </div>
      </q-img>
      <q-card-section>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
           Description
        </div>
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="fact_check" />
        <q-btn flat color="dark" @click="viewItem(antique)">
          put in a tender
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script src="./items-list.inf.js" ></script>
<style src="./items-list.inf.css" ></style>

