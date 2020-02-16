<template>
  <div>

    <unicon name="user-plus" fill="royalblue" />
    <Bio />
  </div>
</template>

<script>
  import Bio from '@/components/Bio.vue'
  export default {
    name: "Preview",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    components: {
      Bio,
    }
  }
</script>
