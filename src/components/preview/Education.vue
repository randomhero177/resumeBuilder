<template>
  <div class="preview__education form__item" v-if="educationList.length">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="graduation-cap" /></span>  {{ $t('education.title') }}
    </h5>
    <div v-for="(item, index) in educationList" :key="index">
      <div class="preview__subtitle">
        {{ item.university }}
      </div>
      <div>{{ item.degree }} {{  $t('of')}} {{ item.fieldOfStudy }} </div>
      <div class="preview__key preview__subitem">
        {{ item.dayStart | moment("MM.YYYY") }} - {{ item.isCurrentEducation ? $t('currentPosition') : item.dayEnd | moment("MM.YYYY") }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Education',
    computed: {
      ...mapState({
        educationList: state => state.education.educationList,
      }),
    },
    components: {

    },
  }
</script>
<style lang="stylus" scoped>

</style>