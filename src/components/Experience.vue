<template>
  <div class="expirience">
    <header class="heading">
      <h2 class="heading__title">Experience</h2>
    </header>
    <div class="row" v-for="(work, index) in workList" :key="index">
      <div class="col-md-6">
        <div class="form__label">Company</div>
        <input type="text" class="input" :value="work.company" @input="updateCompany($event, index)">
      </div>
      <div class="col-md-6">
        <div class="form__label">Position</div>
        <input type="text" class="input" :value="work.position" @input="updatePosition($event, index)">
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6">
            <div class="form__label">Start date</div>
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
          <div class="col-md-6">
            <div class="form__label">End date</div>
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
              <input type="checkbox" @input="toggleIsCurrentPosition($event, index)">
              <label>Все еще работаю здесь</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form__label">City</div>
        <input type="text" class="input" @input="updateCity($event, index)" :value="work.city">
      </div>
      <div class="col-md-12">
        <div class="form__label">Key responsibilities and description:</div>
        <wysiwyg @change="updateDescription($event, index)" value="work.description"/>
      </div>
      <div class="col-md-6">
        <div class="form__label">Key skills for this position:</div>
        <multiselect
          :value="work.skills"
          tag-placeholder="Add this as new skill"
          placeholder="Search or add a skill"
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
          <font-awesome-icon icon="trash-alt" /> Remove this position
        </span>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col">
        <span v-on:click="addNewWork" class="btn btn-add">
          <span class="btn-add__icon"><font-awesome-icon icon="plus-circle" /></span>
          Add new position
        </span>
      </div>
      <div class="col text-right" v-if="workList.length">
        <span class="btn btn-remove" v-on:click="removeSection">
          <font-awesome-icon icon="trash-alt" /> Remove Expirience section
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
            { name: 'Vue.js', code: 'vu' },
            { name: 'Javascript', code: 'js' },
            { name: 'Open Source', code: 'os' }
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