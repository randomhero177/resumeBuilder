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
    <div class="container-fluid">
      <section class="home__screen home__main row justify-content-center align-items-center">
        <div class="col-8">
          <div class="row">
            <div class="col-lg-8">
              <div class="home__heading">
                <h4 class="home__title">{{ $t('homePage.main.title') }}</h4>
                <h5 class="home__subtitle">{{ $t('homePage.main.subtitle') }}</h5>
              </div>
              <div class="home__text">
                <div v-html="$t('homePage.main.text')"></div>
              </div>
              <div class="home__buttons"><router-link to="/choose-template" class="home__button btn button-home"> {{ $t('homePage.main.btn') }} </router-link></div>
            </div>
            <div class="col-lg-4">
              <img src="/template.png" alt="">
            </div>
          </div>
        </div>
      </section>
      <section class="home__screen home__works row justify-content-center align-items-center text-center">
        <div class="col-8">
          <div class="home__heading">
            <h4 class="home__title">{{ $t('homePage.works.title') }}</h4>
            <h5 class="home__subtitle">{{ $t('homePage.works.subtitle') }}</h5>
          </div>
          <div class="home__text">
            <ul class="home__works-list">
              <li class="home__works-item">
                <div class="home__works-icon"><font-awesome-icon icon="solar-panel"/></div>
                <div v-html="$t('homePage.works.list.step1.text')"></div>
                <div class="home__works-button">
                  <router-link to="/choose-template" class="home__button btn button-home">{{ $t('homePage.works.list.step1.btn') }}</router-link>
                </div>
              </li>
              <li class="home__works-item">
                <div class="home__works-icon"><font-awesome-icon icon="file-alt"/></div>
                <div v-html="$t('homePage.works.list.step2.text')"></div>
                <div class="home__works-italic"><small><i v-html="$t('homePage.works.list.step2.warn')"></i></small></div>
                <div class="home__works-button">
                  <router-link to="/editor" class="home__button btn button-home">{{ $t('homePage.works.list.step2.btn') }}</router-link>
                </div>
              </li>
              <li class="home__works-item">
                <div class="home__works-icon"><font-awesome-icon icon="download"/></div>
                <div v-html="$t('homePage.works.list.step3.text')"></div>
                <div class="home__works-button">
                  <router-link :to="'/preview-' + templateName" class="home__button btn button-home">{{ $t('homePage.works.list.step3.btn') }}</router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="home__screen home__safe row justify-content-center align-items-center">
        <div class="col-8">
          <div class="home__heading">
            <h4 class="home__title">{{ $t('homePage.safe.title') }}</h4>
            <h5 class="home__subtitle">{{ $t('homePage.safe.subtitle') }}</h5>
          </div>
          <div class="home__text">
            <p>{{ $t('homePage.safe.text') }}</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Navigation from '@/components/Navigation.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: "home",
    data() {
      return {
        showModal: false,
      };
    },
    computed: {
      ...mapState({
        templateName: state => state.template.templateName,
      }),
    },
    components: {
      Navigation, Footer,
    },
  }
</script>

<style lang="stylus" scoped>

</style>