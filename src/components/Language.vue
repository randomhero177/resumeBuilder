<template>
  <div>
    <span style="margin-right: 15px">{{ $t('language') }}</span>
    <select @change="changeLang($event)" name="lang" class="select" v-model="langModel">
      <option :value="lang" v-for="lang in languages" :key="lang">
        {{ $t(lang) }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'Language',
    data: () => ({
      langModel: 'en',
      languages: ['en', 'ru']
    }),
    methods: {
      changeLang(e) {
        this.$i18n.locale = e.target.value;
      },
    },
    computed: {
      language: {
        get() {
          return this.$store.state.language.language;
        },
        set(value) {
          this.$store.commit('form/setLanguage', value)
        },
      },
    },
  }
</script>
