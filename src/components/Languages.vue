<template>
  <div class="languages">
    {{ languages }}
    <div class="form__label">Languages:</div>
    <div class="row" v-for="(language, index) in languages" :key="index">
      <div class="col-md-5">
        <input type="text" class="input" :value="language.name" @input="updateMessage($event, index)">
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col col-md-auto">
            Level
          </div>
          <div class="col">
            <custom-slider min="10" max="100" step="2" :value="language.level" @change="updateLevel($event, index)"/>
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <span class="languages__icon" v-on:click="removeLanguage(index)">
          <unicon name="times-circle" fill="#1867c0" />
        </span>
      </div>
    </div>
    <div v-on:click="addNewLanguage" class="add-btn">
      Add language
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions} from 'vuex';
  import CustomSlider from "vue-custom-range-slider";

  export default {
    name: "Languages",
    computed: {
      ...mapState({
        languages: state => state.languages.languages,
      }),
    },
    methods: {
      ...mapActions({
        setLanguagesList: 'languages/setLanguagesList',
        addLanguageToList: 'languages/addLanguageToList',
        fetchLanguage: 'languages/fetchLanguage',
        fetchLanguageLevel: 'languages/fetchLanguageLevel',
        removeLanguageFromList: 'languages/removeLanguageFromList',
      }),
      addNewLanguage() {
        const config = {
          name: 'English',
          level: '50',
        };
        this.addLanguageToList(config);
      },
      updateMessage(e, index) {
        this.fetchLanguage({
          id: index,
          name: e.target.value,
        });
      },
      updateLevel(level, index) {
        this.fetchLanguageLevel({
          id: index,
          level: level,
        });
      },
      removeLanguage(index) {
        this.removeLanguageFromList(index);
      },
    },
    components: {
      CustomSlider,
    },
  }
</script>

<style scoped lang="stylus">
  .languages
    &__icon
      cursor pointer
      display block
      padding 7px 0 0
</style>
