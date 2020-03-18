<template>
  <div class="expirience">
    <header class="heading">
      <h2 class="heading__title">Experience</h2>
      {{ workList }}
    </header>
    <div class="row">
      <div class="col-md-6">
        <div class="form__label">Company</div>
        <input type="text" class="input">
      </div>
      <div class="col-md-6">
        <div class="form__label">Position</div>
        <input type="text" class="input">
      </div>
      <div class="col-md-6">
        <div class="form__label">Start date</div>
        <div class="form__picker">
          <datepicker placeholder="Select Date"
            v-model="dayStart"
            :format="format"
            :minimumView="'month'"
            :maximumView="'year'"
            :initialView="'year'"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form__label">End date</div>
        <div class="form__picker" v-if="!isCurrentPosition">
          <datepicker placeholder="Select Date"
            v-model="dayEnd"
            :format="format"
            :minimumView="'month'"
            :maximumView="'year'"
            :initialView="'year'"
          />
        </div>
        <div>
          <input type="checkbox" v-model="isCurrentPosition">
          <label>Все еще работаю здесь</label>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form__label">Key responsibilities and description:</div>
        <wysiwyg v-model="myHTML" />
      </div>
      <div class="col-md-6">
        <div class="form__label">Key skills for this position:</div>
        <multiselect
            v-model="skillsList"
            tag-placeholder="Add this as new skill"
            placeholder="Search or add a skill"
            label="name"
            track-by="code"
            :options="options"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
        />
      </div>
    </div>
    <span v-on:click="addNewPosition" class="add-btn">Add new position</span>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'Experience',
    data: () => ({
      myHTML: '',
      format: 'yyyy-MM',
      skillsList: [],
      dayStart: new Date().toISOString().substr(0, 10),
      showDayStart: false,
      showDayEnd: false,
      dayEnd: new Date().toISOString().substr(0, 10),
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ],
      isCurrentPosition: false,
    }),
    computed: {
      ...mapState({
        workList: state => state.experience.experienceList,
      }),
    },
    methods: {
      ...mapActions({

      }),
      addNewPosition() {
        const config = {
          myHTML: '',
          company: '',
          position: '',
          dayStart: new Date().toISOString().substr(0, 10),
          dayEnd: new Date().toISOString().substr(0, 10),
          isCurrentPosition: false,
          editing: null,
        };
        this.workList.push(config);
      },
      addTag (newTag) {
        const tag = {
          name: newTag,
          code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        };
        this.options.push(tag);
        this.value.push(tag);
      },
    },
  }
</script>
