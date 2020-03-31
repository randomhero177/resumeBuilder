<template>
  <div class="preview preview-functional">
    <div ref="hideWhenPrint">
      <Navigation />
      <h1>Preview Functional</h1>
      <ChangePreview />
      <div class="preview__descr">Section bellow this page will be printed. Everything seems right? <br><button class="btn button-preview" v-on:click="print">Download PDF</button></div>
    </div>
    <div class="preview__section">
      <div class="row">
        <div class="col-md-4">
          <div class="preview-functional__side">
            <div class="text-center">
              <Avatar />
            </div>
            <div class="text-right">
              <Details />
            </div>
            <div class="preview-functional__separate form__item"></div>
            <div class="text-right">
              <Education />
              <Experience />
              <Links />
            </div>
            <Languages />
            <div class="preview-functional__separate form__item"></div>
            <div class="text-right">
              <Accomplishments />
            </div>
          </div>
        </div>
        <div class="col-md-8 preview-functional__main">
          <div class="text-center preview-functional__name">
            <h4 class="preview-header__name">{{ name }} {{ lastName }}</h4>
          </div>
          <div class="preview-functional__summary">
            <Profile title="QUALIFICATION SUMMARY"/>
          </div>

          <Skills title="RELEVANT SKILLS"/>
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
  import Accomplishments from '@/components/preview/Accomplishments.vue';
  import { mapState } from "vuex";
  export default {
    name: "PreviewFunctional",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    computed: {
      ...mapState({
        name: state => state.form.name,
        lastName: state => state.form.lastName,
      }),
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
      Navigation, Avatar, Profile, Details, Links, Skills, Languages, Experience, Education, ChangePreview,
      Accomplishments,
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
        padding 30px 15px
        color #fff
      &__name
        margin-bottom 30px
      &__separate
        border-bottom 1px solid #2e74b5
      &__summary
        position relative
        padding-bottom 1px
        margin-bottom 30px
        &:after
          content ''
          display block
          width 50%
          height 1px
          left 25%
          background #2e74b5
          bottom 0
          position absolute
</style>