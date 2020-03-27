<template>
  <div class="template">
    <Navigation />
    <h1>Choose your template</h1>
    <div class="template__descr">
      We're working in progress. So far there is an only one template available
    </div>
    <div class="row">
      <div class="col-3">
        <div class="template__item">
          <img src="@/assets/img/template1.png" alt="template" style="border-top: 2px solid #999;">
          <div class="template__choose">
            <router-link to="/" class="template__link" v-on:click.native="setTemplateName('template')">Use this template</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Navigation from '@/components/Navigation.vue';
  export default {
    name: "Template",
    data() {
      return {
        data: () => ({

        }),
      };
    },
    computed: {
      ...mapState({
        templateName: state => state.template.templateName,
      }),
    },
    methods: {
      ...mapActions({
        setTemplateName: 'template/setTemplateName',
      })
    },
    components: {
      Navigation,
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