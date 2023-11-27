<template>
  <v-app-bar class="px-md-5">
    <v-Icon
      icon="logos:kaios"
      size="100"
      class="ml-3"
      @click="navigateTo('/')"
    />

    <v-spacer />
    <!-- Theme switcher -->
    <v-btn
      @click="toggleTheme"
      class="mr-2"
      icon
    >
      <v-Icon
        class="text-medium-emphasis"
        icon="fluent:weather-sunny-24-regular"
      />
    </v-btn>
    <!-- Language Switcher -->
    <v-menu width="180">
      <template v-slot:activator="{ props }">
        <v-btn
          class="mr-2"
          v-bind="props"
          icon
        >
          <v-Icon
            v-if="selectedLanguage"
            class="text-medium-emphasis"
            :icon="selectedLanguage?.icon"
          />
        </v-btn>
      </template>
      <v-card
        rounded="lg"
        class="shadow"
      >
        <v-list>
          <v-list-subheader>Select language</v-list-subheader>
          <v-list-item
            @click="selectedLanguage = item"
            class="mx-2 mb-2 rounded-lg"
            density="comfortable"
            v-for="item in languages"
            :key="item.title"
            :value="item"
          >
            <template #prepend>
              <v-Icon
                :icon="item.icon"
                size="22"
                class="mr-4"
              />
            </template>
            <v-list-item-title class="text-subtitle-2">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <!-- notification -->
    <v-menu width="400">
      <template v-slot:activator="{ props }">
        <v-btn
          class="mr-2"
          v-bind="props"
          icon
        >
          <v-badge
            v-if="notificationCount"
            :content="notificationCount"
            color="primary"
          >
            <v-Icon
              class="text-medium-emphasis"
              icon="fluent:alert-24-regular"
            />
          </v-badge>
          <v-Icon
            class="text-medium-emphasis"
            v-else
            icon="fluent:alert-24-regular"
          />
        </v-btn>
      </template>
      <v-card
        rounded="lg"
        class="shadow"
      >
        <v-cardTitle class="d-flex align-center justify-space-between">
          <span class="font-weight-bold text-subtitle-1">Notifications</span>
          <v-tooltip
            location="bottom"
            text="Mark all as read"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                @click="notificationCount = 0"
                v-bind="props"
                icon
                flat
              >
                <v-Icon
                  size="22"
                  icon="ph:envelope-open-light"
                />
              </v-btn>
            </template>
          </v-tooltip>
        </v-cardTitle>
        <v-list lines="three">
          <v-list-item
            density="comfortable"
            v-for="item in notifications"
            :key="item.title"
            :value="item"
          >
            <template #prepend>
              <v-avatar
                size="50"
                class="bg-grey-lighten-3"
              >
                <v-Icon :icon="item.icon" />
              </v-avatar>
            </template>
            <template #title>
              <span
                v-html="item.title"
                class="text-subtitle-1 font-weight-bold"
              ></span>
            </template>
            <template #subtitle>
              <span
                :class="[darkTheme ? 'font-weight-light' : '']"
                v-html="item.text"
                class="text-subtitle-2"
              ></span>
              <br />
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <!-- Profile -->
    <v-menu width="250">
      <template v-slot:activator="{ props }">
        <v-btn
          class="mr-2"
          v-bind="props"
          icon
        >
          <v-avatar size="36">
            <v-img src="https://avatars.githubusercontent.com/u/76650506?v=4" />
          </v-avatar>
        </v-btn>
      </template>
      <v-card
        rounded="lg"
        class="shadow"
      >
        <v-list-item class="ma-2 mb-3">
          <template #title>
            <span class="text-subtitle-1 font-weight-medium">Mihail FR</span>
          </template>
          <template #subtitle>
            <span>fmr@example.com</span>
          </template>
        </v-list-item>
        <v-divider />
        <v-list nav>
          <v-list-item
            v-for="item in profileActions"
            :key="item.title"
            :value="item"
          >
            <template #prepend>
              <v-Icon
                class="text-medium-emphasis mr-5"
                :icon="item.icon"
              />
            </template>
            <template #title>
              <span
                v-html="item.title"
                class="text-subtitle-2 font-weight-medium"
              ></span>
            </template>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list nav>
          <v-list-item link>
            <template #prepend>
              <v-Icon
                class="text-medium-emphasis mr-5"
                icon="fluent:arrow-exit-20-regular"
              />
            </template>
            <template #title>
              <span class="text-subtitle-2 font-weight-medium">Logout</span>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const languages = ref([
  { icon: 'material-symbols:language-us', title: 'English' },
  { icon: 'material-symbols:language-spanish-rounded', title: 'Spanish' },
  { icon: 'material-symbols:language-french', title: 'French' },
])
const selectedLanguage = ref(languages.value[0])

const notificationCount = ref(2)
const notifications = ref([
  {
    title: 'New Order',
    text: 'A new order was just placed by <strong>Jane Doe</strong>.',
    icon: 'fluent:box-24-regular',
  },
  {
    title: 'New Customer',
    text: '<strong>Orlando Doe</strong> joined today.',
    icon: 'fluent:person-24-regular',
  },
])

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value == MAIN_THEME ? MAIN_DARK_THEME : MAIN_THEME
}

const darkTheme = computed(() => theme.current.value.dark)

const profileActions = ref([
  { icon: 'fluent:person-24-regular', title: 'Profile', url: '/profile' },
  { icon: 'solar:bag-5-linear', title: 'Cart', url: '/shoppingCart' },
  { icon: 'fluent:settings-24-regular', title: 'Settings', url: '/settings' },
])

</script>

<style lang="scss" scoped></style>
