<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col text-center">
          <div style="margin-bottom: 5px">
            &copy; Copyright {{ new Date().getFullYear() }} -  build-resume.io
          </div>
          <div>
            randomhero177@gmail.com
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Auth',

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
  }
</script>

<style scoped lang="stylus">
  .footer
    background #1f1717
    color #a7a7a7
    padding 45px 0
    font-size .75rem
</style>
