<template>
  <section class="page">
    <div class="container">
      <router-view />
    </div>
  </section>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style lang="styl">
  img
    max-width 100%
</style>