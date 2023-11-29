<template>
  <v-card>
    <v-navigation-drawer

      class="nav-bg"
    >
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-email"
          title="Inbox"
          value="inbox"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-supervisor-circle"
          title="Supervisors"
          value="supervisors"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-clock-start"
          title="Clock-in"
          value="clockin"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
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

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value == MAIN_THEME ? MAIN_DARK_THEME : MAIN_DARK_THEME
    // theme.global.name.value == MAIN_THEME ? MAIN_DARK_THEME : MAIN_THEME
}

const darkTheme = computed(() => theme.current.value.dark)

const profileActions = ref([
  { icon: 'fluent:person-24-regular', title: 'Profile', url: '/profile' },
  { icon: 'solar:bag-5-linear', title: 'Cart', url: '/shoppingCart' },
  { icon: 'fluent:settings-24-regular', title: 'Settings', url: '/settings' },
])
</script>

<style lang="scss" scoped></style>
