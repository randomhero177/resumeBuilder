<template>
  <div class="form__item">
    <div class="row">
      <div class="col-md-6">
        <div class="form__label">{{ $t('firstName') }}</div>
        <input type="text" v-model="name" :placeholder="$t('yourFirstName')" class="input" name="firstName">
      </div>
      <div class="col-md-6">
        <div class="form__label">{{ $t('lastName') }}</div>
        <input type="text" v-model="lastName" :placeholder="$t('yourLastName')" class="input" name="lastName">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Name',
    data: () => ({

    }),
    computed: {
      name: {
        get() {
          return this.$store.state.form.name;
        },
        set(value) {
          this.$store.commit('form/setUserName', value)
        },
      },
      lastName: {
        get() {
          return this.$store.state.form.lastName;
        },
        set(value) {
          this.$store.commit('form/setUserLastName', value)
        },
      }
    },
  }
</script>
