<template>
  <div class="preview__links form__item" v-if="skills.length">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="tools" /></span>  {{ title }}
    </h5>
    <div v-for="(item, i) in skills" :key="i">
      {{ item.name }}
    </div>
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
        default: 'Skills',
      },
    },
  }
</script>
<style lang="stylus" scoped>

</style>