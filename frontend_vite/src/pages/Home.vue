<template>
  <div class="home">

      <Navigation />
    <div v-if="!isReady">
      <Loader />
    </div>
    <div>
      <section class="home__screen home__main">
        <div class="container-fluid">
          <div class="row justify-content-center align-items-center"><div class="col-xl-10 col-lg-8">
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
          </div></div>
        </div>
      </section>
      <section class="home__screen home__works text-center" ref="secondScreen">
        <div class="container-fluid">
          <div class="row justify-content-center align-items-center ">
            <div class="col-xl-10">
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
          </div>
        </div>
      </section>
      <section class="home__screen home__safe" ref="thirdScreen">
        <div class="container-fluid">
          <div class="row justify-content-center align-items-center">
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
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import MainNavigation from '@/components/common/MainNavigation.vue';
import FooterNav from '@/components/common/FooterNav.vue';
import LoaderCircle from '@/components/common/LoaderCircle.vue';

const Navigation = MainNavigation;
const Footer = FooterNav;
const Loader = LoaderCircle;

const store = useStore();

const isReady = ref(false);
const showAnimation = ref(false);
const secondScreen = ref(false);
const thirdScreen = ref(false);

const screenRefsMap = ref<{ [key: string]: HTMLElement | null }>({
  secondScreen: null,
  thirdScreen: null
});

const pendingScreens = ref(['secondScreen', 'thirdScreen']);

const templateName = computed(() => store.state.template.templateName);
const isShown = computed(() => store.state.home.isShown);

const sendGtm = (name: string) => {
  console.log(name);
  console.log(12 + name);
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({ event: name });
  }
};

const isSectionActive = () => {
  pendingScreens.value.forEach((name, index) => {
    const el = screenRefsMap.value[name];
    if (el) {
      const rect = el.getBoundingClientRect();
      const isActive = rect.top * 1.5 - window.innerHeight < 0 && window.innerHeight + rect.top * 2 > 0;

      if (isActive) {
        if (name === 'secondScreen') secondScreen.value = true;
        if (name === 'thirdScreen') thirdScreen.value = true;

        pendingScreens.value.splice(index, 1);
      }

      if (!pendingScreens.value.length) {
        window.removeEventListener('scroll', isSectionActive);
      }
    }
  });
};


onMounted(() => {
  if (!isShown.value) {
    setTimeout(() => {
      isReady.value = true;
      showAnimation.value = true;
    }, 2000);

    window.addEventListener('scroll', isSectionActive);
    store.commit('home/setShownState', true);
  } else {
    secondScreen.value = true;
    thirdScreen.value = true;
    showAnimation.value = true;
    isReady.value = true;
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', isSectionActive);
});
</script>
