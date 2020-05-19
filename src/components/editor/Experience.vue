<template>
  <div class="expirience form__item">
    <header class="heading">
      <h2 class="heading__title">{{ $t('workHistory.title') }}</h2>
    </header>
    <div class="alert alert_warning" v-if="!workList.length">
      {{ $t('noInfo') }}
    </div>
    <div class="row form__item" v-for="(work, index) in workList" :key="index">
      <div class="col-md-6 form__elem">
        <div class="form__label">{{ $t('workHistory.company') }}</div>
        <input type="text" class="input" :value="work.company" @input="updateCompany($event, index)">
      </div>
      <div class="col-md-6 form__elem">
        <div class="form__label">{{ $t('workHistory.position') }}</div>
        <input type="text" class="input" :value="work.position" @input="updatePosition($event, index)">
      </div>
      <div class="col-md-6 form__elem">
        <div class="row">
          <div class="col-xl-6">
            <div class="form__label">{{ $t('workHistory.startDate') }}</div>
            <div class="form__picker">
              <datepicker placeholder="Select Date"
                v-on:selected="updateDayStart($event, index)"
                :value="work.dayStart"
                :format="format"
                :minimumView="'month'"
                :maximumView="'year'"
                :initialView="'year'"
              />
            </div>
          </div>
          <div class="col-xl-6">
            <div class="form__label">{{ $t('workHistory.endDate') }}</div>
            <div class="form__picker" v-if="!work.isCurrentPosition">
              <datepicker placeholder="Select Date"
                v-on:selected="updateDayEnd($event, index)"
                :value="work.dayEnd"
                :format="format"
                :minimumView="'month'"
                :maximumView="'year'"
                :initialView="'year'"
              />
            </div>
            <div>
              <div class="input-checkbox">
                <input type="checkbox" @input="toggleIsCurrentPosition($event, index)">
                <label>{{ $t('workHistory.currentPosition') }}</label>
                <span class="input-checkbox__checked">
                  <font-awesome-icon icon="check" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form__label">{{ $t('workHistory.city') }}</div>
        <input type="text" class="input" @input="updateCity($event, index)" :value="work.city">
      </div>
      <div class="col-md-12 form__elem">
        <div class="form__label">{{ $t('workHistory.description') }}</div>
        <wysiwyg @change="updateDescription($event, index)" value="work.description"/>
      </div>
      <div class="col-md-6 form__elem">
        <div class="form__label">{{ $t('workHistory.skills') }}</div>
        <multiselect
          :value="work.skills"
          :tag-placeholder="$t('workHistory.skillPlaceholder')"
          :placeholder="$t('workHistory.searchSkill')"
          :selectLabel="$t('selectLabel')"
          :deselectLabel="$t('removeLabel')"
          :selectedLabel="$t('selectedLabel')"
          label="name"
          track-by="code"
          :options="work.skillOptions"
          :multiple="true"
          :taggable="true"
          @input="updateSkills($event, index)"
          @tag="addTag($event, index)"
        />
      </div>
      <div class="col expirience__remove-col" v-if="workList.length > 1">
        <span v-on:click="removeWork(index)" class="btn btn-remove">
          <font-awesome-icon icon="trash-alt" /> {{ $t('workHistory.removePosition') }}
        </span>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col">
        <span v-on:click="addNewWork" class="btn btn-add">
          <span class="btn-add__icon"><font-awesome-icon icon="plus-circle" /></span>
          {{ $t('workHistory.add') }}
        </span>
      </div>
      <div class="col text-right" v-if="workList.length">
        <span class="btn btn-remove" v-on:click="removeSection">
          <font-awesome-icon icon="trash-alt" /> {{ $t('workHistory.removeSection') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'Experience',
    data: () => ({
      format: 'yyyy-MM',
    }),
    computed: {
      ...mapState({
        workList: state => state.experience.experienceList,
      }),
    },
    methods: {
      ...mapActions({
        addWorkToList: 'experience/addWorkToList',
        removeWorkFromList: 'experience/removeWorkFromList',
        fetchCompany: 'experience/fetchCompany',
        fetchPosition: 'experience/fetchPosition',
        fetchDayStart: 'experience/fetchDayStart',
        fetchDayEnd: 'experience/fetchDayEnd',
        fetchIsCurrentPosition: 'experience/fetchIsCurrentPosition',
        fetchDescription: 'experience/fetchDescription',
        fetchSkills: 'experience/fetchSkills',
        fetchNewTagToSkills: 'experience/fetchNewTagToSkills',
        fetchCity: 'experience/fetchCity',
        removeSection: 'experience/removeSection',
      }),
      addNewWork() {
        const config = {
          description: '',
          company: '',
          position: '',
          dayStart: new Date().toISOString().substr(0, 10),
          dayEnd: new Date().toISOString().substr(0, 10),
          isCurrentPosition: false,
          skills: [],
          city: '',
          skillOptions: [
            { "name": "Vue.js", "code": "vu" },
            { "name": "Javascript", "code": "js" },
            { "name": "Gulp", "code": "Gu9116667" },
            { "name": "Webpack", "code": "We8718389" },
            { "name": "TypeScript", "code": "Ty9971407" },
            { "name": "OpenApi", "code": "Op2971758" },
            { "name": "Jquery", "code": "Jq9294925" },
          ],
        };
        this.addWorkToList(config);
      },
      removeWork(index) {
        this.removeWorkFromList(index);
      },
      updateCompany(e, index) {
        this.fetchCompany({
          id: index,
          company: e.target.value,
        });
      },
      updatePosition(e, index) {
        this.fetchPosition({
          id: index,
          position: e.target.value,
        });
      },
      updateDayStart(value, index) {
        this.fetchDayStart({
          id: index,
          dayStart: value,
        });
      },
      updateDayEnd(value, index) {
        this.fetchDayEnd({
          id: index,
          dayEnd: value,
        });
      },
      updateCity(e, index) {
        this.fetchCity({
          id: index,
          city: e.target.value,
        });
      },
      toggleIsCurrentPosition(e, index) {
        this.fetchIsCurrentPosition({
          id: index,
          isCurrentPosition: e.target.checked,
        })
      },
      addTag(newTag, index) {
        const tag = {
          name: newTag,
          code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000)),
          id: index,
        };
        this.fetchNewTagToSkills(tag);
      },
      updateSkills(newTag, index) {
        const tag = {
          list: newTag,
          id: index,
        };
        this.fetchSkills(tag);
      },
      updateDescription(value, index) {
        this.fetchDescription({
          id: index,
          description: value,
        });
      },
    },
  }
</script>
<style lang="stylus" scoped>
  .expirience__remove-col
    display flex
    align-items center
    justify-content flex-end
</style>