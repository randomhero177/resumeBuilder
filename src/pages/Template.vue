<template>
  <div>
    <div>
      <Navigation />
    </div>
    <h1>Choose your template</h1>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue'
  export default {
    name: "Template",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    components: {
      Navigation,
    }
  }
</script>
