<template>
  <v-card>
    <v-navigation-drawer width="315" height="900" class="nav-bg">
      <v-list nav class="border ">
        <v-row class="">
          <v-col :cols="page.cols" v-for="page of pages" class="border">
            <v-list-item
            
              :prepend-icon="page.icon"
              :title="page.title"
              @click="navigateTo(`${page.url}`)"
              stacked
              class=""
              width=""
            >
          </v-list-item>
          </v-col>
        </v-row>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();

const languages = ref([
  { icon: "material-symbols:language-us", title: "English" },
  { icon: "material-symbols:language-spanish-rounded", title: "Spanish" },
  { icon: "material-symbols:language-french", title: "French" },
]);
const selectedLanguage = ref(languages.value[0]);

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value == MAIN_THEME ? MAIN_DARK_THEME : MAIN_DARK_THEME;
  // theme.global.name.value == MAIN_THEME ? MAIN_DARK_THEME : MAIN_THEME
};

const darkTheme = computed(() => theme.current.value.dark);

const pages = ref([
  { icon: "fluent:person-24-regular", title: "Profile", url: "/profile", cols: "6" },
  { icon: "solar:bag-5-linear", title: "Cart", url: "/shoppingCart", cols: "6" },
  { icon: "fluent:settings-24-regular", title: "Settings", url: "/settings", cols: "6" },
  { icon: "fluent:person-24-regular", title: "Profile", url: "/profile", cols: "6" },
  { icon: "solar:bag-5-linear", title: "Cart", url: "/shoppingCart", cols: "6" },
  { icon: "fluent:settings-24-regular", title: "Settings", url: "/settings", cols: "6" },
  { icon: "fluent:person-24-regular", title: "Profile", url: "/profile", cols: "6" },
  { icon: "solar:bag-5-linear", title: "Cart", url: "/shoppingCart", cols: "6" },
  { icon: "fluent:settings-24-regular", title: "Settings", url: "/settings", cols: "12" }
]);

const profileActions = ref([
  { icon: "fluent:person-24-regular", title: "Profile", url: "/profile" },
  { icon: "solar:bag-5-linear", title: "Cart", url: "/shoppingCart" },
  { icon: "fluent:settings-24-regular", title: "Settings", url: "/settings" },
]);
</script>

<style lang="scss" scoped></style>
