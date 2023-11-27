<template>
  <v-app>
    <HeaderBar />

    <v-main>
      <v-container class="position-relative">
        <slot />
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
</script>

<style lang="scss"></style>
