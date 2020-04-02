<template>
  <div class="row navigation align-items-center">
    <div class="col-auto">
      <router-link to="/choose-template" class="navigation__item" exact-active-class="navigation__item_active">Choose template</router-link> >
    </div>
    <div class="col-auto">
      <router-link to="/" class="navigation__item" exact-active-class="navigation__item_active">Fill in the resume</router-link> >
    </div>
    <div class="col-auto">
      <router-link :to="'/preview-' + templateName" class="navigation__item" exact-active-class="navigation__item_active">Preview</router-link>
    </div>
    <div class="col-auto ml-auto">
      <Language />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Language from '@/components/Language.vue';
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
      Language,
    },
  }
</script>

<style scoped lang="stylus">
  .navigation
    background #2e74b5
    padding 15px
    margin-bottom 30px
    color #fff
    position relative
    &:before
      content ''
      display block
      position absolute
      width 10000px
      height 100%
      top 0
      right 0
      z-index -1
      background #2e74b5
    &__item
      margin 0 10px
      color #fff
      padding-bottom 2.5px
      position relative
      z-index 1
      &:first-child
        margin-left -15px
      &_active
        font-weight bold
        border-bottom 1px solid #fff
        background rgba(149, 191, 230, 0.25)
        padding 5px 15px 2.5px 15px
      &:hover, &:active, &:focus
        text-decoration none
        border none
        border-bottom 1px solid #fff
        outline none
</style>
