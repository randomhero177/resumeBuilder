<template>
  <div class="preview-expirience form__item" v-if="experienceList.length">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="briefcase" /></span> {{ $t('workHistory.title') }}
    </h5>
    <div class="preview-expirience__item" v-for="(item, i) in experienceList" :key="i">
      <div class="preview__subtitle">
         {{ item.position }} {{ $t('at')}} {{ item.company }}
      </div>
      <div class="preview__key preview__subitem">
        {{ item.city ? `${item.city}, ` : '' }}
        {{ item.dayStart | moment("MM.YYYY") }} - {{ item.isCurrentPosition ? $t('currentPosition') : item.dayEnd | moment("MM.YYYY") }}
      </div>
      <div v-html="item.description"></div>
      <div v-if="item.skills.length">
        <b>{{ $t('workHistory.keySkills') }}: </b>
        <span v-for="(skill, index) in item.skills" :key="index">{{ skill.name }}<template v-if="index + 1 !== item.skills.length ">, </template>
        </span>
      </div>
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
  .preview-expirience__item
    margin-bottom 30px
</style>