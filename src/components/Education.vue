<template>
  <div class="education form__item">
    <header class="heading">
      <h2 class="heading__title">Education</h2>
    </header>
    <div class="alert alert_warning" v-if="!educationList.length">
      No information yet
    </div>
    <div class="row justify-content-end" v-for="(item, index) in educationList" :key="index">
      <div class="col-md-6">
        <div class="form__label">University</div>
        <input type="text" class="input" :value="item.university" @input="updateUniversity($event, index)">
      </div>
      <div class="col-md-6">
        <div class="form__label">Field of study</div>
        <input type="text" class="input" :value="item.fieldOfStudy" @input="updateFieldOfStudy($event, index)">
      </div>
      <div class="col-md-6">
        <div class="form__label">Degree</div>
        <input type="text" class="input" :value="item.degree" @input="updateDegree($event, index)">
      </div>
      <div class="col-md-6">
        <div class="row no-gutters justify-content-between">
          <div class="col-md-5">
            <div class="form__label">Start date</div>
            <datepicker placeholder="Select Date"
              v-on:selected="updateDayStart($event, index)"
              :value="item.dayStart"
              :monday-first="true"
              :format="format"
              :minimumView="'month'"
              :maximumView="'year'"
              :initialView="'year'"
            />
          </div>
          <div class="col-md-5">
            <div class="form__label">End date</div>
            <datepicker placeholder="Select Date"
              v-on:selected="updateDayEnd($event, index)"
              :value="item.dayEnd"
              :monday-first="true"
              :format="format"
              :minimumView="'month'"
              :maximumView="'year'"
              :initialView="'year'"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6 text-right" v-if="educationList.length > 1">
        <span class="btn btn-remove education__icon" v-on:click="removeEducation(index)">
          <font-awesome-icon icon="trash-alt" /> Remove this education
        </span>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col">
        <span class="btn btn-add" v-on:click="addEducation">
          <span class="btn-add__icon"><font-awesome-icon icon="plus-circle" /></span>
          Add education
        </span>
      </div>
      <div class="col text-right" v-if="educationList.length">
        <span class="btn btn-remove" v-on:click="removeSection">
          <font-awesome-icon icon="trash-alt" /> Remove Education section
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'Education',
    data: () => ({
      dayStart: new Date().toISOString().substr(0, 10),
      dayEnd: new Date().toISOString().substr(0, 10),
      university: '',
      degree: '',
      fieldOfStudy: '',
      format: 'yyyy-MM',
    }),
    computed: {
      ...mapState({
        educationList: state => state.education.educationList
      }),
    },
    methods: {
      ...mapActions({
        addEducationToList: 'education/addEducationToList',
        removeEducationFromList: 'education/removeEducationFromList',
        fetchUniversity: 'education/fetchUniversity',
        fetchFieldOfStudy: 'education/fetchFieldOfStudy',
        fetchDegree: 'education/fetchDegree',
        fetchDayStart: 'education/fetchDayStart',
        fetchDayEnd: 'education/fetchDayEnd',
        removeSection: 'education/removeSection',
      }),
      addEducation() {
        const config = {
          dayStart: new Date().toISOString().substr(0, 10),
          dayEnd: new Date().toISOString().substr(0, 10),
          university: '',
          degree: '',
          fieldOfStudy: '',
        };
        this.addEducationToList(config);
      },
      removeEducation(index) {
        this.removeEducationFromList(index);
      },
      updateUniversity(e, index) {
        console.log(index)
        this.fetchUniversity({
          id: index,
          university: e.target.value,
        });
      },
      updateFieldOfStudy(e, index) {
        this.fetchFieldOfStudy({
          id: index,
          fieldOfStudy: e.target.value,
        });
      },
      updateDegree(e, index) {
        this.fetchDegree({
          id: index,
          degree: e.target.value,
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
    },
  }
</script>
