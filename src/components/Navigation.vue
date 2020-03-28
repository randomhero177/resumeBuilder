<template>
  <div class="navigation">
      <router-link to="/choose-template" class="navigation__item" exact-active-class="navigation__item_active">Choose template</router-link> >
      <router-link to="/" class="navigation__item" exact-active-class="navigation__item_active">Fill in the resume</router-link> >
      <router-link :to="'/preview-' + templateName" class="navigation__item" exact-active-class="navigation__item_active">Preview</router-link> >
      <router-link to="/download" class="navigation__item" exact-active-class="navigation__item_active">Download</router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'Navigation',

    data: () => ({

    }),
    computed: {
      ...mapState({
        templateName: state => state.template.templateName,
      }),
      lastName: {
        get() {
          return this.$store.state.form.lastName;
        },
        set(value) {
          this.$store.commit('form/setUserLastName', value)
        },
      },
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
      margin 0 15px
      color #fff
      padding-bottom 2.5px
      &_active
        font-weight bold
        border-bottom 1px solid #fff
      &:hover, &:active, &:focus
        text-decoration none
        border none
        border-bottom 1px solid #fff
        outline none
</style>
