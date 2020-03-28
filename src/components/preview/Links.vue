<template>
  <div class="preview__links" v-if="Object.keys(linksList).length">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="link" /></span>  Links
    </h5>
    <div class="links" v-for="(link, key, i) in linksList" :key="i">
      <a :href="link" target="_blank" class="preview__link" v-if="link.length">{{ linksListConfig.hasOwnProperty(key) ? key: link }}</a>
    </div>
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

</style>