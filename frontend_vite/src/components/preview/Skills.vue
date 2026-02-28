<template>
  <div class="preview__skills form__item" v-if="skills.length">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="tools" /></span>  {{ $t(title) }}
    </h5>
    <template v-for="(item, i) in skills">
      <div :class="inline ? 'preview__skills_inline' : ''" :key="i">
        {{ item.name }}{{ skills.length - 1 == i ? '.' : ',' }}
      </div>
    </template>

  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Skills',
    computed: {
      ...mapState({
        skills: state => state.skills.skills,
      }),
    },
    props: {
      title: {
        type: String,
        default: 'skills',
      },
      inline: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>
<style lang="stylus" scoped>
  .preview__skills_inline
    display inline-block
    margin-right 5px
</style>