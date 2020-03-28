<template>
  <div class="preview-header">
    <div class="row align-items-center">
      <div class="col-md-auto">
        <div class="preview-header__ava-wrap">
          <img :src="avatar.src" alt="" class="preview-header__ava">
        </div>
      </div>
      <div class="col-8">
        <h4 class="preview-header__name">{{ name }} {{ lastName }}</h4>
        <div class="preview-header__position">
          {{ position }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Header',
    computed: {
      ...mapState({
        profile: state => state.profile.profile,
        position: state => state.profile.position,
        avatar: state => state.form.avatar,
        name: state => state.form.name,
        lastName: state => state.form.lastName,
      }),
    },
    components: {

    },
  }
</script>
<style lang="stylus" scoped>

</style>