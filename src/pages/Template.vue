<template>
  <div class="template">
    <div class="form__item">
      <h1>{{ $t('choose.title') }}</h1>
      <div class="template__descr">
        {{ $t('choose.subtitle') }}
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-lg-3 col-md-4" v-for="templ in templateList" :key="templ">
        <div class="template__item">
          <img :src="`/${templ}.png`" alt="template" style="border-top: 1px solid #999;">
          <div class="template__choose">
            <router-link to="/editor" class="template__link" v-on:click.native="setTemplateName(templ)"><span v-on:click="sendGtm(templ)">{{ $t('choose.btn') }}</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

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
        templateList: state => state.template.templateList,
      }),

    },
    methods: {
      ...mapActions({
        setTemplateName: 'template/setTemplateName',
      }),
      sendGtm(name) {
        if(window.dataLayer) {
          window.dataLayer.push({'event': `${name}-chosen`})
        }
      },
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