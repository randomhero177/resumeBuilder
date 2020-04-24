<template>
  <div class="preview">
    <div ref="hideWhenPrint" class="form__item">
      <div class="form__item">
        <Navigation />
      </div>
      <h1 class="page__title">Template Preview</h1>
      <div class="form__item">
        <ChangePreview />
      </div>
      <div class="preview__descr form__elem">Section bellow this page will be printed. Everything seems right?</div>
      <button class="btn button-preview" v-on:click="print">Download PDF</button>
    </div>
    <div class="preview__section">
      <Header />
      <div class="row">
        <div class="col-md-8">
          <Profile />
          <Experience />
          <Education />
        </div>
        <div class="col-md-4">
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
  import Navigation from '@/components/Navigation.vue';
  import ChangePreview from '@/components/ChangePreview.vue';
  import Header from '@/components/preview/Header.vue';
  import Profile from '@/components/preview/Profile.vue';
  import Details from '@/components/preview/Details.vue';
  import Links from '@/components/preview/Links.vue';
  import Skills from '@/components/preview/Skills.vue';
  import Languages from '@/components/preview/Languages.vue';
  import Experience from '@/components/preview/Experience.vue';
  import Education from '@/components/preview/Education.vue';
  export default {
    name: "Preview",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    methods: {
      print() {
        this.$refs['hideWhenPrint'].style.display = 'none';
        window.onafterprint = () => {
          this.$refs['hideWhenPrint'].style.display = 'block';
        }
        window.print();
      },
    },
    components: {
      Navigation, ChangePreview, Header, Profile, Details, Links, Skills, Languages, Experience, Education,
    },
  }
</script>
<style lang="stylus" scoped>
  .preview
    &__descr
      margin-bottom 15px
    &__section
      border 1px solid #dedede
      border-bottom 0
      padding 15px
      -webkit-box-shadow 1px 1px 5px 2px rgba(168,168,168,0.4)
      -moz-box-shadow 1px 1px 5px 2px rgba(168,168,168,0.4)
      box-shadow 1px 1px 5px 2px rgba(168,168,168,0.4)
    &-functional
      & .preview__section
        box-shadow none
        border 0
</style>