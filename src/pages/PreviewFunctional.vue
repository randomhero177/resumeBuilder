<template>
  <div class="preview preview-functional">
    <Navigation />
    <h1>Preview Functional</h1>
    <ChangePreview />
    <div class="preview__descr">Section bellow this page will be printed. Everything seems right? Go to <router-link to="/download">Download page</router-link></div>
    <div class="preview__section">
      <div class="row">
        <div class="col-md-3 preview-functional__side">
          <Avatar />
          <Details />
          <Profile />
          <Experience />
          <Education />
        </div>
        <div class="col-md-9 preview-functional__main">

          <Links />
          <Skills />
          <Languages />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';
  import ChangePreview from '@/components/ChangePreview.vue';
  import Avatar from '@/components/preview/Avatar.vue';
  import Profile from '@/components/preview/Profile.vue';
  import Details from '@/components/preview/Details.vue';
  import Links from '@/components/preview/Links.vue';
  import Skills from '@/components/preview/Skills.vue';
  import Languages from '@/components/preview/Languages.vue';
  import Experience from '@/components/preview/Experience.vue';
  import Education from '@/components/preview/Education.vue';
  export default {
    name: "PreviewFunctional",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    components: {
      Navigation, Avatar, Profile, Details, Links, Skills, Languages, Experience, Education, ChangePreview,
    },
  }
</script>
<style lang="stylus" scoped>
  .preview
    &__descr
      margin-bottom 15px
    &-functional
      &__side
        background #404040
        padding-top 15px
        color #fff
      &__main
        padding-top 15px
</style>