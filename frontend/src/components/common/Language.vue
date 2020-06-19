<template>
  <div>
    <select @change="changeLang($event)" name="lang" class="select select_w" v-model="language">
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
      languages: ['en', 'ru']
    }),
    methods: {
      changeLang(e) {
        this.$i18n.locale = e.target.value;
        if(window.dataLayer) {
          window.dataLayer.push({'event': 'changeLanguage'});
        }
      },
    },
    computed: {
      language: {
        get() {
          return this.$store.state.userLang.language;
        },
        set(value) {
          this.$store.commit('userLang/setLanguage', value)
        },
      },
    },
  }
</script>
<style lang="stylus" scoped>
  .select_w
    width 100%
</style>
