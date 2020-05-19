<template>
  <div class="preview__profile form__item" v-if="references.length">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="info-circle" /></span> {{ $t('references') }}
    </h5>
    <div>
      <div class="preview__value" v-html="references"></div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'References',
    computed: {
      ...mapState({
        references: state => state.references.references,
      }),
    },
  }
</script>
<style lang="stylus" scoped>

</style>