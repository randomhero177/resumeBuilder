<template>
  <div class="preview__links form__item" v-if="Object.keys(linksList).length">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="link" /></span>  Links
    </h5>
    <template v-for="(link, key, i) in linksList">
      <div class="links" v-if="link.length" :key="i">
        <span v-if="linksListConfig.hasOwnProperty(key)" class="preview__key">{{ key }}:</span>
        <a :href="link" target="_blank" class="preview__link">{{ link }}</a>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Links',
    computed: {
      ...mapState({
        linksList: state => state.links.linksList,
        linksListConfig: state => state.links.linksListConfig,
      }),
    },
    components: {

    },
  }
</script>
<style lang="stylus" scoped>
  .links
    &__elem
      margin-bottom 7.5px
</style>