<template>
  <div class="preview__profile form__item" v-if="avatar.src">
    <img :src="avatar.src" alt="" class="preview-header__ava">
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Avatar',
    computed: {
      ...mapState({
        avatar: state => state.form.avatar,
      }),
    },
  }
</script>