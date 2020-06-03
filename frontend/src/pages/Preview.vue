<template>
  <div class="preview">
    <div class="full-height">
      <div v-if="!isPrinting">
        <Navigation />
      </div>
      <div v-if="!isPrinting" class="row justify-content-center">
        <div class="col-xl-10">
          <HeaderDownload @trigerPrint="preparePrint"/>
        </div>
      </div>
      <div :class="!isPrinting ? 'row justify-content-center' : 'container'">
        <div :class="!isPrinting ? 'col-xl-10' : ''" class="preview__section">
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
                <template>
                  <Accomplishments />
                </template>
                <template>
                  <References />
                </template>
              </div>
              <div class="col-md-4">
                <Details />
                <Links />
                <Skills :inline="true"/>
                <Languages />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div v-if="!isPrinting">
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
  import Accomplishments from '@/components/preview/Accomplishments.vue';
  import References from '@/components/preview/References.vue';
  import NoInfo from '@/components/preview/NoInfo.vue';


  export default {
    name: "Preview",
    data() {
      return {
        isPrinting: false,
      };
    },
    computed: {
      ...mapState({
        accomplishments: state => state.accomplishments.accomplishments,
        avatar: state => state.form.avatar,
        birthday: state => state.form.birthday,
        education: state => state.education.educationList,
        email: state => state.form.email,
        experience: state => state.experience.experienceList,
        languages: state => state.languages.languages,
        lastName: state => state.form.lastName,
        links: state => state.links.linksList,
        name: state => state.form.name,
        token: state => state.user.token.token,
        position: state => state.profile.position,
        phone: state => state.form.phone,
        profile: state => state.profile.profile,
        references: state => state.profile.references
      }),
      isInfoFilled() {
        return this.name.length || this.lastName.length
      },
    },
    methods: {
      preparePrint() {
        this.isPrinting = true;
        setTimeout(() => {
            this.print()
          }, 100
        );
      },
      print() {
        window.onafterprint = () => {
          this.isPrinting = false;
        };
        window.print();
      },


    },
    components: {
      Navigation, Footer, HeaderDownload, Header, Profile, Details, Links, Skills, Languages, Experience, Education,
      Accomplishments, NoInfo, References,
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