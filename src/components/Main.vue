<template>
  <div class="form__item">
    <div class="row">
      <div class="col-md-6">
        <div class="form__label">Your name</div>
        <input type="text" v-model="name" placeholder="Your name" class="input">
      </div>
      <div class="col-md-6">
        <div class="form__label">Your last name</div>
        <input type="text" v-model="lastName" placeholder="Your last name" class="input">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Main',

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
    components: {

    },
  }
</script>
