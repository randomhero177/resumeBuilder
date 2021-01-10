<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col">
            <div style="margin-bottom: 5px">
              &copy; Copyright {{ new Date().getFullYear() }} -  build-resume.io
            </div>
            <div>
              Contacts: randomhero177@gmail.com
            </div>
            <a href="https://www.facebook.com/Build-resumeio-114449923644206" target="_blank" class="footer__link">
              <font-awesome-icon :icon="['fab', 'facebook-square']" />
            </a>
            <a href="https://twitter.com/build_resume_io" target="_blank" class="footer__link">
              <font-awesome-icon :icon="['fab', 'twitter-square']" />
            </a>
          </div>
          <div class="col text-right">
            <span style="display: inline-block; min-width: 150px;">
              <language @onSelect="$emit('onMouseOut')"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Language from '@/components/common/Language.vue';

  export default {
    name: 'Footer',

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
      },
    },
    components: {
      Language
    }
  }
</script>

<style scoped lang="stylus">
  .footer
    background #1f1717
    color #a7a7a7
    padding 45px 0
    font-size .75rem
    &__link
     font-size 20px
     color #fff
     display inline-block
     margin 0 15px 0 0

</style>
