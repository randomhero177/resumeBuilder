<template>
  <div class="email form__item">
    <div class="form__label">Email</div>
    <input type="text" class="input" v-model="email">
  </div>
</template>

<script>

  export default {
    name: 'Email',
    data: () => ({

    }),
    computed: {
      email: {
        get() {
          return this.$store.state.email.email;
        },
        set(value) {
          this.$store.commit('email/setEmail', value)
        },
      },
    },
  }
</script>
<style lang="stylus" scoped>

</style>