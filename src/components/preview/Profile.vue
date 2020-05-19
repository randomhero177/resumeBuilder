<template>
  <div class="form__item preview-profile" v-if="profile.length">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="id-badge" /></span>  {{ $t(title) }}</h5>
    <div v-html="profile"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Profile',
    computed: {
      ...mapState({
        profile: state => state.profile.profile,
      }),
    },
    props: {
      title: {
        type: String,
        default: 'previewProfile',
      },
    },
    components: {

    },
  }
</script>
<style lang="stylus" scoped>

</style>