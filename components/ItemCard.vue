<template>
  <v-card
    :loading="loading"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="300"
      :src="item.thumbnail"
    ></v-img>

    <v-card-item>
      <v-card-title>{{ item.title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ item.category }}</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <div class="text-h6 font-weight-medium mt-1 ms-1">
          {{ item.price }} p
        </div>
        <div class="text-grey text-h6 font-weight-medium mt-1 ml-2">
          {{ item.discountPercentage }} %
        </div>
      </v-row>
      <v-row
        align="center"
        class="mx-0 py-1"
      >
        <v-rating
          :model-value="item.rating"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey mt-1 ms-1">
          {{ item.rating }}
        </div>
      </v-row>

      <div class="post-text">
        {{ item.description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="reserve(item.id)"
      >
        read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">

const props = defineProps(['item'])
const { item } = toRefs(props)

let loading = ref(false)

const reserve = (id: number) => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    navigateTo('/item/' + id)
  }, 1000)
}
</script>

<style lang="scss">
</style>
