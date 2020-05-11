<template>
  <div class="preview">
    <div class="full-height">
      <div ref="hideWhenPrintNav">
        <div class="container">
          <Navigation />
        </div>
      </div>
      <div ref="hideWhenPrint" class="container">
        <HeaderDownload @trigerPrint="print"/>
      </div>
      <div class="container">
        <div class="preview__section">
          <template v-if="!isInfoFilled">
            <NoInfo />
          </template>
          <template v-else>
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
          </template>
        </div>
      </div>
    </div>

    <div ref="hideWhenPrintFoot">
      <Footer />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Navigation from '@/components/common/Navigation.vue';
  import Footer from '@/components/common/Footer.vue';
  import HeaderDownload from '@/components/preview/Header.vue';
  import Header from '@/components/preview/HeaderPreview.vue';
  import Profile from '@/components/preview/Profile.vue';
  import Details from '@/components/preview/Details.vue';
  import Links from '@/components/preview/Links.vue';
  import Skills from '@/components/preview/Skills.vue';
  import Languages from '@/components/preview/Languages.vue';
  import Experience from '@/components/preview/Experience.vue';
  import Education from '@/components/preview/Education.vue';
  import NoInfo from '@/components/preview/NoInfo.vue';

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
        name: state => state.form.name,
        lastName: state => state.form.lastName,
      }),
      isInfoFilled() {
        return this.name.length || this.lastName.length
      },
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
      Navigation, Footer, HeaderDownload, Header, Profile, Details, Links, Skills, Languages, Experience, Education, NoInfo,
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