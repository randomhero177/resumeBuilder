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
          return this.$store.state.phone.phone;
        },
        set(value) {
          this.$store.commit('phone/setPhone', value)
        },
      },
    },
  }
</script>
<style lang="stylus" scoped>

</style>