<template>
  <div class="languages">
    <div class="form__label">Languages:</div>
    <div class="row align-items-center justify-content-between" v-for="(language, index) in languages" :key="index">
      <div class="col-md-5">
        <input type="text" class="input" :value="language.name" @input="updateMessage($event, index)">
      </div>
      <div class="col-md-5">
        <div class="row">
          <div class="col col-md-auto">
            Level
          </div>
          <div class="col">
            <custom-slider min="10" max="100" step="2" :value="language.level" @change="updateLevel($event, index)"/>
          </div>
        </div>
      </div>
      <div class="col-md-2 text-right" v-if="languages.length > 1">
        <span class="btn btn-remove btn_lg" v-on:click="removeLanguage(index)">
          <font-awesome-icon icon="trash-alt" />
        </span>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col">
        <div v-on:click="addNewLanguage" class="btn btn-add">
          <span class="btn-add__icon"><font-awesome-icon icon="plus-circle" /></span>
          Add language
        </div>
      </div>
      <div class="col" v-if="languages.length">
        <span class="btn btn-remove" v-on:click="removeSection">
          <font-awesome-icon icon="trash-alt" />
          Remove Language section
        </span>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapState, mapActions} from 'vuex';

  export default {
    name: "Languages",
    computed: {
      ...mapState({
        languages: state => state.languages.languages,
      }),
    },
    methods: {
      ...mapActions({
        addLanguageToList: 'languages/addLanguageToList',
        fetchLanguage: 'languages/fetchLanguage',
        fetchLanguageLevel: 'languages/fetchLanguageLevel',
        removeLanguageFromList: 'languages/removeLanguageFromList',
        removeSection: 'languages/removeSection',
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

    },
  }
</script>
<style scoped lang="stylus">

</style>