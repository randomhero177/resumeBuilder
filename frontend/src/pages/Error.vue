<template>
  <div class="Error">
    <h1>Something really got wrong! I don't think this page ever existed</h1>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: "Error",
    data() {
      return {
        data: () => ({

        }),
      };
    },
    computed: {
      ...mapState({
        templateName: state => state.template.templateName,
        templateList: state => state.template.templateList,
      }),

    },
    methods: {
      ...mapActions({
        setTemplateName: 'template/setTemplateName',
      }),
    },
  }
</script>
<style scoped lang="stylus">
  .template
    &__descr
      margin-bottom 15px
    &__item
      position relative
    &__link
      color #fff
      display block
      padding 15px 0
    &__choose
      position absolute
      width 100%
      left 0
      bottom 0
      text-align center
      background #0c5460
</style>