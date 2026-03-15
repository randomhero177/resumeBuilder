<template>
  <div>
    <select @change="changeLang($event)" name="lang" class="select select_w" v-model="language">
      <option :value="lang" v-for="lang in languages" :key="lang">
        {{ t(lang) }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  import i18n from "@/plugins/i18n.ts";
  import { useI18n } from 'vue-i18n';

  const t = i18n.global.t;
  const emit = defineEmits(['onSelect']);

  const store = useStore();
    const { locale } = useI18n();

  const languages = ref(['en', 'ru']);

  const language = computed({
    get: () => store.state.userLang.language,
    set: (value: string) => {
      store.commit('userLang/setLanguage', value);
      emit('onSelect');
    }
  });


  const changeLang = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    const newLang = target.value;

    locale.value = newLang;

    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'changeLanguage' });
    }
  };
</script>
<style lang="scss" scoped>
  .select_w {
    width: 100%;
  }
</style>
