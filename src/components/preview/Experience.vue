<template>
  <div class="preview__links" v-if="experienceList.length">
    <h5 class="preview__subtitle">
      <span class="preview__icon"><font-awesome-icon icon="briefcase" /></span> Experience
    </h5>
    <div v-for="(item, i) in experienceList" :key="i">
      {{ item.company }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Experience',
    computed: {
      ...mapState({
        experienceList: state => state.experience.experienceList,
      }),
    },
    components: {

    },
  }
</script>
<style lang="stylus" scoped>

</style>