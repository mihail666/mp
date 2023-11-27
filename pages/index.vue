<template>
  <MainLayout>
    <h1 class="text-h1 mt-15 mb-15">Marketplace</h1>
    <v-overlay
      :model-value="false"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <template v-if="true">
      <v-row>
        <v-col cols="9" xl="10">
          <v-card
            v-if="isShow"
            class="mx-auto text-center"
            title="not found"
            max-width="500"
            :elevation="0"
          >
          </v-card>
          <v-row
            class="m-0"
            v-else
          >
            <v-col
              v-for="item in paginatedItem"
              :key="item.id"
              cols="12" md="5" lg="4" xl="3" 
            >
              <ItemCard :item="item" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div class="my-16 mx-auto">
        <v-pagination
          v-model="page"
          :length="pages"
          :total-visible="7"
        ></v-pagination>
      </div>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
//@ts-ignore
import MainLayout from '~/layouts/MainLayout.vue'

const filterArr = ref<any[]>([])
const items = ref<any[]>([])

const isShow = ref(false)

let page = ref(1)

const pages = computed(() => {
  if (filterArr.value.length) {
    return Math.ceil(filterArr.value.length / 8)
  } else {
    return Math.ceil(items.value.length / 8)
  }
})

const paginatedItem = computed(() => {
  let arr = []
  if (filterArr.value.length) {
    console.log('filter')
    arr = filterArr.value
  } else {
    arr = items.value
  }
  const from = (page.value - 1) * 8
  const to = from + 8
  return arr.slice(from, to)
})

const fiterFunc = (e: any) => {
  filterArr.value = []
  isShow.value = false
  let arrcat = e
  if (arrcat.price.length) {
    arrcat.price === 'max'
      ? items.value.sort(sortByPriceMax)
      : items.value.sort(sortByPriceMin)
  }

  items.value.forEach((item) => {
    if (
      !arrcat.categories.length &&
      Math.ceil(item.discountPercentage) >= arrcat.discount
    ) {
      filterArr.value.push(item)
    }
    arrcat.categories.forEach((cat: string) => {
      if (
        item.category == cat &&
        Math.ceil(item.discountPercentage) >= arrcat.discount
      ) {
        filterArr.value.push(item)
      }
    })
  })
  if (!filterArr.value.length) {
    isShow.value = true
  }
}

const filterClear = () => {
  filterArr.value = []
  isShow.value = false
}

const sortByPriceMax = function (d1: any, d2: any) {
  return d1.price < d2.price ? 1 : -1
}
const sortByPriceMin = function (d1: any, d2: any) {
  return d1.price > d2.price ? 1 : -1
}

onBeforeMount(async () => {
  await fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
      items.value = data.products
    })
})
</script>
