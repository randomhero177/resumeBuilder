<template>
  <div class="preview__profile form__item" v-if="accomplishments.length">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="info-circle" /></span> {{ $t('accomplishments') }}
    </h5>
    <div>
      <div class="preview__value" v-html="accomplishments"></div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'Accomplishments',
    computed: {
      ...mapState({
        accomplishments: state => state.accomplishments.accomplishments,
      }),
    },
  }
</script>
<style lang="stylus" scoped>

</style>