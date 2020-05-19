<template>
  <div class="navigation row justify-content-center">
    <div class="col-xl-10">
      <div class="row align-items-center">
        <div class="col-auto" v-if="!$breakpoint.mdAndDown">
          <router-link to="/" class="navigation__item" exact-active-class="navigation__item_active"> {{ $t('home') }} </router-link> >
        </div>
        <div class="col-auto" v-if="!$breakpoint.mdAndDown">
          <router-link to="/choose-template" class="navigation__item" exact-active-class="navigation__item_active">{{ $t('chooseTemplate') }}</router-link> >
        </div>
        <div class="col-auto" v-if="!$breakpoint.mdAndDown">
          <router-link to="/editor" class="navigation__item" exact-active-class="navigation__item_active">{{ $t('fillIn') }}</router-link> >
        </div>
        <div class="col-auto" v-if="!$breakpoint.mdAndDown">
          <router-link :to="'/preview-' + templateName" class="navigation__item" exact-active-class="navigation__item_active">{{ $t('download') }}</router-link>
        </div>
        <div class="col-auto ml-auto">
          <Language />
        </div>
        <div v-if="$breakpoint.mdAndDown">
          <div class="navigation__mobile-wrap">
            <span class="navigation__mobile-icon"
              :class="showMobile ? 'navigation__mobile-icon_active': ''"
              v-on:click="showMobile = !showMobile"
            >
              <font-awesome-icon icon="bars" />
            </span>
            <transition name="slide-fade">
              <div class="navigation__mobile-drop" v-if="showMobile" v-on:click="showMobile = !showMobile">
                <div class="navigation__mobile-elem">
                  <router-link to="/" class="navigation__mobile-item" exact-active-class="navigation__mobile-item_active"> {{ $t('home') }} </router-link> >
                </div>
                <div class="navigation__mobile-elem">
                  <router-link to="/choose-template" class="navigation__mobile-item" exact-active-class="navigation__mobile-item_active">{{ $t('chooseTemplate') }}</router-link> >
                </div>
                <div class="navigation__mobile-elem">
                  <router-link to="/editor" class="navigation__mobile-item" exact-active-class="navigation__mobile-item_active">{{ $t('fillIn') }}</router-link> >
                </div>
                <div class="navigation__mobile-elem">
                  <router-link :to="'/preview-' + templateName" class="navigation__mobile-item" exact-active-class="navigation__mobile-item_active">{{ $t('download') }}</router-link>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Language from '@/components/common/Language.vue';
  export default {
    name: 'Navigation',
    data: () => ({
      showMobile: false,
    }),
    computed: {
      ...mapState({
        templateName: state => state.template.templateName,
      }),
      lastName: {
        get() {
          return this.$store.state.form.lastName;
        },
        set(value) {
          this.$store.commit('form/setUserLastName', value)
        },
      },
    },
    components: {
      Language,
    },
  }
</script>
