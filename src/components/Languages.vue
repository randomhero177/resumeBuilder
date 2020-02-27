<template>
  <div class="languages">
    <div class="form__label">Languages:</div>
    <div class="row" v-for="(language, index) in languagesList" :key="language+index">
      <div class="col-md-5">
        <input type="text" class="input" v-model="languagesList[index].name">
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col col-md-auto">
            Level
          </div>
          <div class="col">
            <custom-slider min="10" max="100" step="2" v-model="languagesList[index].level" />
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
  import CustomSlider from "vue-custom-range-slider";

  export default {
    name: "Languages",
    data: () => ({
      min: 0,
      languagesList: [],
    }),
    methods: {
      addNewLanguage() {
        const config = {
          name: 'English',
          level: '50',
        };
        this.languagesList.push(config);
      },
      removeLanguage(index) {
        this.languagesList.splice(index, 1);
      },
    },
    components: {
      CustomSlider,
    }
  }
</script>

<style scoped lang="stylus">
  .languages
    &__icon
      cursor pointer
      display block
      padding 7px 0 0
</style>
