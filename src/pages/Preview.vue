<template>
  <div>
    <Navigation />
    <h1>Preview</h1>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue'
  export default {
    name: "Preview",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    components: {
      Navigation,
    },
  }
</script>
