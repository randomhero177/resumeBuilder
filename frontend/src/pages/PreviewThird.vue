<template>
  <div>
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
          <div class="row" v-else>
            <div class="col-12">
              <div class="row preview-melinda__header">
                <div class="col-auto" v-if="isAva">
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
              <References />
            </div>
            <div class="col-6 preview-melinda__main">
              <Links />
              <Languages />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isPrinting">
      <Footer />
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/common/Navigation.vue';
  import Footer from '@/components/common/Footer.vue';
  import HeaderDownload from '@/components/preview/Header.vue';
  import Avatar from '@/components/preview/Avatar.vue';
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

  import { mapState } from "vuex";
  export default {
    name: "PreviewThird",
    data() {
      return {
        isPrinting: false,
      };
    },
    computed: {
      ...mapState({
        name: state => state.form.name,
        lastName: state => state.form.lastName,
        position: state => state.profile.position,
        avatar: state => state.form.avatar,
      }),
      isInfoFilled() {
        return this.name.length || this.lastName.length
      },
      isAva() {
        const keys = Object.keys(this.avatar);
        return keys.length
      }
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
      Navigation, Avatar, Profile, Details, Links, Skills, Languages, Experience, Education, HeaderDownload,
      Accomplishments, Footer, NoInfo, References,
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