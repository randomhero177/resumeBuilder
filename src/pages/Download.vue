<template>
  <div>
    <div>
      <Navigation />
    </div>
    <h1>Download your resume</h1>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue'
  export default {
    name: "Download",
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
