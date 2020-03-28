<template>
  <div class="preview__links" v-if="languages.length">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="tools" /></span>  Languages
    </h5>
    <div class="row" v-for="(item, i) in languages" :key="i">
      <div class="col">
        {{ item.name }}
      </div>
      <div class="col" style="pointer-events: none">
        <custom-slider :value="item.level" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Languages',
    computed: {
      ...mapState({
        languages: state => state.languages.languages,
      }),
    },
    components: {

    },
  }
</script>
<style lang="stylus" scoped>

</style>