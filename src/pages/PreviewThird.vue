<template>
  <div>
    <div ref="hideWhenPrintNav">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2"></div>
          <div class="col">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
    <div ref="hideWhenPrint">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="content-pad">
            <div class="preview preview-melinda">
              <div class="form__item">
                <h1 class="page__title">Melinda template preview</h1>
                <div class="form__item">
                  <ChangePreview />
                </div>
                <div class="preview__descr form__elem">Section bellow this page will be printed. Everything seems right? </div>
                <div><button class="btn button-preview" v-on:click="print">Download PDF</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="preview__section">
        <div class="row">
          <div class="col-12">
            <div class="row preview-melinda__header">
              <div class="col-auto">
                <Avatar />
              </div>
              <div class="col-auto">
                <div>
                  <h4 class="preview-header__name"><span class="color">{{ name }}</span> {{ lastName }}</h4>
                  <div>
                    {{ position }}
                  </div>
                </div>
              </div>
              <div class="col-auto ml-auto text-right">
                <Details />
              </div>
            </div>
          </div>
          <div class="col-md-12 preview-melinda__main">
            <div class="preview-melinda__summary">
              <Profile title="QUALIFICATION SUMMARY"/>
            </div>
            <Experience />
            <Education />
          </div>
          <div class="col-6 preview-melinda__main">
            <Accomplishments />
            <Skills :inline="true"/>
          </div>
          <div class="col-6 preview-melinda__main">
            <Links />
            <Languages />
          </div>
        </div>
      </div>
    </div>

    <div ref="hideWhenPrintFoot">
      <Footer />
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';
  import Footer from '@/components/Footer.vue';
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
    name: "PreviewThird",
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
        position: state => state.profile.position,
      }),
    },
    methods: {
      print() {
        this.$refs['hideWhenPrint'].style.display = 'none';
        this.$refs['hideWhenPrintNav'].style.display = 'none';
        this.$refs['hideWhenPrintFoot'].style.display = 'none';
        window.onafterprint = () => {
          this.$refs['hideWhenPrint'].style.display = 'block';
          this.$refs['hideWhenPrintNav'].style.display = 'block';
          this.$refs['hideWhenPrintFoot'].style.display = 'block';
        };
        window.print();
      },
    },
    components: {
      Navigation, Avatar, Profile, Details, Links, Skills, Languages, Experience, Education, ChangePreview,
      Accomplishments, Footer,
    },
  }
</script>
<style lang="stylus" scoped>
  .preview
    &-melinda
      &__header
        margin-bottom 30px
      &__main
        & .preview__icon
          display none
    &__descr
      margin-bottom 15px
    &__section
      border 1px solid #dedede
      border-bottom none
      padding 30px
      -webkit-box-shadow 1px 1px 5px 2px rgba(168,168,168,0.4)
      -moz-box-shadow 1px 1px 5px 2px rgba(168,168,168,0.4)
      box-shadow 1px 1px 5px 2px rgba(168,168,168,0.4)
  .color
    color #4285f4
  .preview__profile.form__item
    margin-bottom 0

</style>