<template>
  <div class="home">
    <Navigation />
    <section class="home__main">
      <div>
        <h4>Home</h4>
      </div>
    </section>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';

  export default {
    name: "home",
    data() {
      return {
        showModal: false,
      };
    },
    computed: {

    },
    components: {
      Navigation,
    },
    methods: {

    },
  }
</script>

<style lang="stylus" scoped>
  .create
    padding-bottom 45px
  .home
    &__main
      background url("/main.JPG")
      height 100vh
</style>