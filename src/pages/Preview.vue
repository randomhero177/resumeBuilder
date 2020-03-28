<template>
  <div class="preview">
    <Navigation />
    <h1>Preview</h1>
    <div class="preview__descr">Section bellow this page will be printed. Go to <router-link to="/download">Download page</router-link></div>
    <div class="preview__section">
      <Header />
      <div class="row">
        <div class="col-md-9">
          <Profile />
          <Experience />
        </div>
        <div class="col-md-3">
          <Details />
          <Links />
          <Skills />
          <Languages />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Navigation from '@/components/Navigation.vue';
  import Header from '@/components/preview/Header.vue';
  import Profile from '@/components/preview/Profile.vue';
  import Details from '@/components/preview/Details.vue';
  import Links from '@/components/preview/Links.vue';
  import Skills from '@/components/preview/Skills.vue';
  import Languages from '@/components/preview/Languages.vue';
  import Experience from '@/components/preview/Experience.vue';
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
      Navigation, Header, Profile, Details, Links, Skills, Languages, Experience,
    },
  }
</script>
<style lang="stylus" scoped>
  .preview
    &__descr
      margin-bottom 15px
    &__section
      border 1px solid #dedede
      padding 15px
      -webkit-box-shadow 1px 1px 5px 2px rgba(168,168,168,0.4)
      -moz-box-shadow 1px 1px 5px 2px rgba(168,168,168,0.4)
      box-shadow 1px 1px 5px 2px rgba(168,168,168,0.4)
</style>