<template>
  <div class="preview">
    <Navigation />
    <h1>Preview</h1>
    <div class="preview__descr">Section bellow this page will be printed. Go to <router-link to="/download">Download page</router-link></div>
    <div class="preview__section">

    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Navigation from '@/components/Navigation.vue';
  export default {
    name: "Preview",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    computed: {
      ...mapState({

      }),
    },
    components: {
      Navigation,
    },
  }
</script>
