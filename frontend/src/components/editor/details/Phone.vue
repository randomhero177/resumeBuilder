<template>
  <div class="email form__item">
    <div class="form__label">{{$t('phone') }}</div>
    <input type="text" class="input" v-model="phone">
  </div>
</template>

<script>

  export default {
    name: 'Phone',
    data: () => ({

    }),
    computed: {
      phone: {
        get() {
          return this.$store.state.form.phone;
        },
        set(value) {
          this.$store.commit('form/setPhone', value)
        },
      },
    },
  }
</script>
<style lang="stylus" scoped>

</style>