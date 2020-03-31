<template>
  <div class="accomplishments form__item">
    <header class="heading">
      <h2 class="heading__title">Accomplishments</h2>
    </header>
    <div>
      <wysiwyg v-model="accomplishments"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Accomplishments',
    computed: {
      accomplishments: {
        get() {
          return this.$store.state.accomplishments.accomplishments
        },
        set(value) {
          this.$store.commit('accomplishments/setAccomplishments', value)
        },
      },
    },
  }
</script>
<style lang="stylus" scoped>

</style>