<template>
  <div class="template">
    <div class="form__item">
      <h1>{{ $t('choose.title') }}</h1>
      <div class="template__descr">
        {{ $t('choose.subtitle') }}
      </div>
    </div>
    CHECK TEMPLATE
    <div class="row justify-content-between">
      <div class="col-lg-3 col-md-4" v-for="templ in templateList" :key="templ">
        <div class="template__item">
          <img :src="`/${templ}.png`" alt="template">
          <div class="template__choose">
            <router-link to="/editor" class="template__link" v-on:click.native="setTemplateName(templ)"><span v-on:click="sendGtm(templ)">{{ $t('choose.btn') }}</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const templateName = computed(() => store.state.template.templateName);
const templateList = computed(() => store.state.template.templateList);


const setTemplateName = (payload: any) => store.dispatch('template/setTemplateName', payload);

const sendGtm = (name: string) => {
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({ 'event': `${name}-chosen` });
  }
};
</script>

<style scoped lang="scss">
.template {
  &__descr {
    margin-bottom: 15px;
  }

  &__item {
    position: relative;
    margin-bottom: 15px;
  }

  &__link {
    color: #fff;
    display: block;
    padding: 15px 0;
  }

  &__choose {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
    background: #0c5460;
  }
}
</style>
