<template>
  <component :is="layouts[route.meta.layout || 'default']">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import LayoutDefault  from "@/layouts/LayoutDefault.vue";
import LayoutDownload from "@/layouts/LayoutDownload.vue";
import LayoutLanding from "@/layouts/LayoutLanding.vue";

const route = useRoute()

const layouts = {
  default: LayoutDefault,
  download: LayoutDownload,
  LayoutLanding: LayoutLanding
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
