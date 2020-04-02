<template>
  <div>
    {{ $t('language') }}
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
