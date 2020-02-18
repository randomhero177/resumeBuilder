<template>
  <div>
    <Birthday />
  </div>
</template>

<script>
import Birthday from '@/components/form/Birthday.vue';
  export default {
    name: 'Details',
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
      Birthday,
    },
  }
</script>
