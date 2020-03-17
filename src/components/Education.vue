<template>
  <div class="education">
    <header class="heading">
      <h2 class="heading__title">Education</h2>
    </header>
    <div class="alert alert_warning" v-if="!educationList.length">
      No information yet
    </div>
    <div class="row" v-for="(item, index) in educationList" :key="index">
      <div class="col-md-6">
        <div class="form__label">University</div>
        <input type="text" class="input" v-model="item.university">
      </div>
      <div class="col-md-6">
        <div class="form__label">Field of study</div>
        <input type="text" class="input" v-model="item.fieldOfStudy">
      </div>
      <div class="col-md-6">
        <div class="form__label">Degree</div>
        <input type="text" class="input" v-model="item.degree">
      </div>
      <div class="col-md-6">
        <div class="row no-gutters justify-content-between">
          <div class="col-md-5">
            <div class="form__label">Start date</div>
            <datepicker placeholder="Select Date"
              v-model="item.dayStart"
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
              v-model="item.dayEnd"
              :monday-first="true"
              :format="format"
              :minimumView="'month'"
              :maximumView="'year'"
              :initialView="'year'"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <span class="education__icon" v-on:click="removeEducation(index)">
          <unicon name="times-circle" fill="#1867c0" />
        </span>
      </div>
    </div>
    <div>
      <span class="add-btn" v-on:click="addEducation">Add education</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Education',
    data: () => ({
      educationList: [],
      dayStart: new Date().toISOString().substr(0, 10),
      dayEnd: new Date().toISOString().substr(0, 10),
      university: '',
      degree: '',
      fieldOfStudy: '',
      format: 'yyyy-MM',
    }),
    methods: {
      addEducation() {
        const config = {
          showDayStart: false,
          showDayEnd: false,
          dayStart: new Date().toISOString().substr(0, 10),
          dayEnd: new Date().toISOString().substr(0, 10),
          university: '',
          degree: '',
          fieldOfStudy: '',
        };
        this.educationList.push(config);
      },
      removeEducation(index) {
        this.educationList.splice(index, 1);
      },
    },
  }
</script>

<style scoped lang="stylus">
.education__icon
  display inline-block
  padding-top 27.5px
  cursor pointer
</style>
