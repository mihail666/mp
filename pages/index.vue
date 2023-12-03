<template>
  <MainLayout class="bg-background overflow-hidden">
    <template v-if="true">
      <div class="h-screen position-relative bg-primary">
        <img src="../assets/images/stars.png" class="stars stars-left" alt="" />
        <img
          src="../assets/images/stars.png"
          class="stars stars-right"
          alt=""
        />
        <img src="../assets/images/shape.png" class="shape-img" alt="" />
      </div>
      <div class="h-screen position-relative">
        <img src="../assets/images/bg-2.png" class="bg-bright" alt="" />
      </div>
      <!-- <div class="h-100 position-relative">
        <div class="">
          <div class="position-relative h-screen">
            <v-row class="">
              <v-col>
                <img
                  src="../assets/images/stars.png"
                  class="stars stars-left"
                  alt=""
                />
              </v-col>
              <v-col>
                <img
                  src="../assets/images/stars.png"
                  class="stars stars-right"
                  alt=""
                />
              </v-col>
            </v-row>
            <img
              src="../assets/images/shape.png"
              class="shape-img"
              alt=""
            />
          </div>
          <div class="position-relative">
            <img
              src="../assets/images/bg-2.png"
              class="bg-bright"
              alt=""
            />
            <img
              src="../assets/images/bg-2.1.png"
              class="bg"
              alt=""
            />
          </div>
        </div>
      </div> -->
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
</script>
