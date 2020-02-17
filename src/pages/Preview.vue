<template>
  <div>
    <unicon name="user-plus" fill="royalblue" />
    <Bio />
    <Main />
  </div>
</template>

<script>
  import Bio from '@/components/Bio.vue'
  import Main from '@/components/Main.vue'
  export default {
    name: "Preview",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    components: {
      Bio, Main,
    }
  }
</script>
