<template>
  <div>
    <select @change="changeLang($event)" name="lang" class="select" v-model="language">
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
          return this.$store.state.user.language;
        },
        set(value) {
          this.$store.commit('user/setLanguage', value)
        },
      },
    },
  }
</script>
