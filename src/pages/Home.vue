<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2"></div>
        <div class="col">
          <Navigation />
        </div>
      </div>
    </div>
    <div v-if="!isReady">
      <Loader />
    </div>
    <div class="container-fluid">
      <section class="home__screen home__main row justify-content-center align-items-center">
        <div class="col-8">
          <div class="row">
            <div class="col-lg-8">
              <div class="home__heading">
                <transition
                    name="fade"
                    enter-active-class="animated fadeInDown"
                    leave-active-class="animated bounceOutRight bounceRight-leave"
                >
                  <div v-if="showAnimation">
                    <h4 class="home__title">{{ $t('homePage.main.title') }}</h4>
                    <h5 class="home__subtitle">{{ $t('homePage.main.subtitle') }}</h5>
                  </div>
                </transition>
              </div>
              <transition
                  name="fade"
                  enter-active-class="animated fadeInUp"
              >
                <div v-if="showAnimation">
                  <div class="home__text">
                    <div v-html="$t('homePage.main.text')"></div>
                  </div>
                  <div class="home__buttons"><span v-on:click="sendGtm('create-resume-click')"><router-link to="/choose-template" class="home__button btn button-home">{{ $t('homePage.main.btn') }}</router-link></span></div>
                </div>
              </transition>
            </div>
            <div class="col-lg-4">
              <transition
                name="fade"
                enter-active-class="animated fadeInRight"
              >
                <img src="/template.png" alt="" v-if="showAnimation">
              </transition>
            </div>
          </div>
        </div>
      </section>
      <section class="home__screen home__works row justify-content-center align-items-center text-center" ref="secondScreen">
        <div class="col-8">
          <transition
              name="fade"
              enter-active-class="animated fadeInDown"
              leave-active-class="animated bounceOutRight bounceRight-leave"
          >
            <div class="home__heading" v-if="secondScreen">
              <h4 class="home__title">{{ $t('homePage.works.title') }}</h4>
              <h5 class="home__subtitle">{{ $t('homePage.works.subtitle') }}</h5>
            </div>
          </transition>
          <div class="home__text">
            <transition
                name="fade"
                enter-active-class="animated fadeInUp"
                leave-active-class="animated bounceOutDown bounceDown-leave"
            >
              <ul class="home__works-list" v-if="secondScreen">
                <li class="home__works-item">
                  <div class="home__works-icon"><font-awesome-icon icon="solar-panel"/></div>
                  <div v-html="$t('homePage.works.list.step1.text')"></div>
                  <div class="home__works-button">
                    <span v-on:click="sendGtm('create-resume-click')"><router-link to="/choose-template" class="home__button btn button-home">{{ $t('homePage.works.list.step1.btn') }}</router-link></span>
                  </div>
                </li>
                <li class="home__works-item">
                  <div class="home__works-icon"><font-awesome-icon icon="file-alt"/></div>
                  <div v-html="$t('homePage.works.list.step2.text')"></div>
                  <div class="home__works-italic"><small><i v-html="$t('homePage.works.list.step2.warn')"></i></small></div>
                  <div class="home__works-button">
                    <span v-on:click="sendGtm('fill-resume-click')"><router-link to="/editor" class="home__button btn button-home">{{ $t('homePage.works.list.step2.btn') }}</router-link></span>
                  </div>
                </li>
                <li class="home__works-item">
                  <div class="home__works-icon"><font-awesome-icon icon="download"/></div>
                  <div v-html="$t('homePage.works.list.step3.text')"></div>
                  <div class="home__works-button">
                    <span v-on:click="sendGtm('download-resume-click')"><router-link :to="'/preview-' + templateName" class="home__button btn button-home">{{ $t('homePage.works.list.step3.btn') }}</router-link></span>
                  </div>
                </li>
              </ul>
            </transition>
          </div>
        </div>
      </section>
      <section class="home__screen home__safe row justify-content-center align-items-center" ref="thirdScreen">
        <transition
          name="fade"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated bounceOutDown bounceDown-leave"
        >
          <div class="col-8" v-if="thirdScreen">
            <div class="home__heading">
              <h4 class="home__title">{{ $t('homePage.safe.title') }}</h4>
              <h5 class="home__subtitle">{{ $t('homePage.safe.subtitle') }}</h5>
            </div>
            <div class="home__text">
              <div v-html="$t('homePage.safe.text')"></div>
            </div>
          </div>
        </transition>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Navigation from '@/components/common/Navigation.vue';
  import Footer from '@/components/common/Footer.vue';
  import Loader from '@/components/common/Loader.vue';

  export default {
    name: "home",
    data() {
      return {
        showModal: false,
        isReady: false,
        showAnimation: false,
        secondScreen: false,
        thirdScreen: false,
        screenRefs: ['secondScreen', 'thirdScreen'],
      };
    },
    computed: {
      ...mapState({
        templateName: state => state.template.templateName,
        isShown: state => state.home.isShown,
      }),
    },
    methods: {
      sendGtm(name) {
        console.log(name)
        console.log(12 + name)
        if(window.dataLayer) {
          window.dataLayer.push({'event': name})
        }
      },
      isSectionActive() {
        this.screenRefs.forEach((name, index) => {
          if(this.$refs[name]) {
            const secondScreenTop = this.$refs[name].getBoundingClientRect().top;
            const isActive = secondScreenTop*1.5 - window.innerHeight < 0 && window.innerHeight + secondScreenTop*2 > 0;
            if(isActive) {
              this[name] = isActive;
              this.screenRefs.splice(index, 1);
            }
            if(!this.screenRefs.length) {
              window.removeEventListener('scroll', this.isSectionActive);
            }
          }
        })
      }
    },
    components: {
      Navigation, Footer, Loader,
    },
    mounted() {
      if(!this.isShown) {
        setTimeout(() => {
          this.isReady = true;
          this.showAnimation = true;
        }, 2000);
        window.addEventListener('scroll', this.isSectionActive);
        this.$store.commit('home/setShownState', true);
      } else {
        this.secondScreen = true;
        this.showAnimation = true;
        this.isReady = true;
        this.thirdScreen = true;
        window.removeEventListener('scroll', this.isSectionActive);
      }
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.isSectionActive);
    }
  }
</script>