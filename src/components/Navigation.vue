<template>
  <div>
      <router-link to="/template">Choose template</router-link> >
      <router-link to="/">Fill in the resume</router-link> >
      <router-link to="/preview">Preview</router-link> >
      <router-link to="/download">Download</router-link> >
  </div>
</template>

<script>

  export default {
    name: 'Navigation',

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
      }
    },
    components: {

    },
  }
</script>
