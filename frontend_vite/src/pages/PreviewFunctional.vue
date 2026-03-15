<template>
  <div class="preview preview-functional">
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
        <div :class="!isPrinting ? 'col-xl-10' : 'preview__section_print'" class="preview__section">
          <template v-if="!isInfoFilled">
            <NoInfo />
          </template>
          <div class="row" v-else>
            <div class="col-4">
              <div class="preview-functional__side">
                <div class="text-center">
                  <Avatar />
                </div>
                <div class="text-right">
                  <Details />
                </div>
                <div class="preview-functional__separate form__item"></div>
                <div class="text-right">
                  <Links />
                </div>
                <Languages />
                <div class="text-right">
                  <Accomplishments />
                </div>
              </div>
            </div>
            <div class="col-8 preview-functional__main">
              <div class="text-center preview-functional__name">
                <h4 class="preview-header__name">{{ name }} {{ lastName }}</h4>
              </div>
              <div class="preview-functional__summary">
                <Profile title="QUALIFICATION SUMMARY"/>
              </div>
              <Skills title="RELEVANT SKILLS"/>
              <Education />
              <Experience />
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

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import MainNavigation from '@/components/common/MainNavigation.vue';
import FooterNav from '@/components/common/FooterNav.vue';
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
import NoInfo from '@/components/preview/NoInfo.vue';

const Navigation = MainNavigation;
const Footer = FooterNav;

const store = useStore();


const isPrinting = ref(false);

const name = computed(() => store.state.form.name);
const lastName = computed(() => store.state.form.lastName);

const isInfoFilled = computed(() => {
  return name.value.length > 0 || lastName.value.length > 0;
});


const print = () => {
  window.onafterprint = () => {
    isPrinting.value = false;
  };
  window.print();
};

const preparePrint = () => {
  isPrinting.value = true;

  setTimeout(() => {
    print();
  }, 100);
};

</script>

<style lang="scss" scoped>
.preview {
  &__descr {
    margin-bottom: 15px;
  }

  &-functional {
    &__side {
      background: #404040;
      padding: 30px 15px;
      color: #fff;
    }

    &__name {
      margin-bottom: 30px;
    }

    &__separate {
      border-bottom: 1px solid #2e74b5;
    }

    &__summary {
      position: relative;
      padding-bottom: 1px;
      margin-bottom: 30px;
    }
  }
}
</style>
