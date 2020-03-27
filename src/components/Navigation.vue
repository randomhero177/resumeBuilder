<template>
  <div class="navigation">
      <router-link to="/template" class="navigation__item">Choose template</router-link> >
      <router-link to="/" class="navigation__item">Fill in the resume</router-link> >
      <router-link to="/preview" class="navigation__item">Preview</router-link> >
      <router-link to="/download" class="navigation__item">Download</router-link>
  </div>
</template>

<script>

  export default {
    name: 'Navigation',

    data: () => ({

    }),
    computed: {
      lastName: {
        get() {
          return this.$store.state.form.lastName;
        },
        set(value) {
          this.$store.commit('form/setUserLastName', value)
        },
      }
    },
    components: {

    },
  }
</script>

<style scoped lang="stylus">
  .navigation
    background #00bcd4
    padding 15px
    margin-bottom 30px
    color #fff
    &__item
      padding 0 15px
      color #fff
</style>
