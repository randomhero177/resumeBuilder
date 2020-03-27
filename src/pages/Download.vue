<template>
  <div>
    <Navigation />
    <h1>Download your resume</h1>
    <button class="btn btn-download">Download PDF</button>
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
