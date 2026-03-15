<template>
  <div class="education form__item">
    <header class="heading">
      <h2 class="heading__title">{{ $t('education.title') }}</h2>
    </header>
    <div class="alert alert_warning" v-if="!educationList.length">
      {{ $t('noInfo') }}
    </div>
    <div class="row justify-content-end form__item" v-for="(item, index) in educationList" :key="index">
      <div class="col-md-6 form__elem">
        <div class="form__label">{{ $t('education.university') }}</div>
        <input type="text" class="input" :value="item.university" @input="updateUniversity($event, index)">
      </div>
      <div class="col-md-6 form__elem">
        <div class="form__label">{{ $t('education.fieldOfStudy') }}</div>
        <input type="text" class="input" :value="item.fieldOfStudy" @input="updateFieldOfStudy($event, index)">
      </div>
      <div class="col-md-6 form__elem">
        <div class="form__label">{{ $t('education.degree') }}</div>
        <input type="text" class="input" :value="item.degree" @input="updateDegree($event, index)">
      </div>
      <div class="col-md-6 form__elem">
        <div class="row no-gutters justify-content-between">
          <div class="col-md-5">
            <div class="form__label">{{ $t('education.startDate') }}</div>
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
            <div class="form__label">{{ $t('education.endDate') }}</div>
            <div class="form__picker" v-if="!item.isCurrentEducation">
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
            <div>
              <div class="input-checkbox">
                <input type="checkbox" v-model="item.isCurrentEducation" @input="toggleIsCurrentEducation($event, index)">
                <label>{{ $t('currentEducationEditor') }}</label>
                <span class="input-checkbox__checked">
                  <font-awesome-icon icon="check" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 text-right form__elem" v-if="educationList.length > 1">
        <span class="form-btn btn-remove education__icon" v-on:click="removeEducation(index)">
          <font-awesome-icon icon="trash-alt" /> {{ $t('education.remove') }}
        </span>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col">
        <span class="form-btn btn-add" v-on:click="addEducation">
          <span class="btn-add__icon"><font-awesome-icon icon="plus-circle" /></span>
          {{ $t('education.add') }}
        </span>
      </div>
      <div class="col text-right" v-if="educationList.length">
        <span class="form-btn btn-remove" v-on:click="removeSection">
          <font-awesome-icon icon="trash-alt" /> {{ $t('education.removeSection') }}
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
        fetchIsCurrentEducation: 'education/fetchIsCurrentEducation',
      }),
      addEducation() {
        const config = {
          dayStart: new Date().toISOString().substr(0, 10),
          dayEnd: new Date().toISOString().substr(0, 10),
          university: '',
          degree: '',
          fieldOfStudy: '',
          isCurrentEducation: false
        };
        this.addEducationToList(config);
      },
      toggleIsCurrentEducation(e, index) {
        this.fetchIsCurrentEducation({
          id: index,
          isCurrentEducation: e.target.checked,
        })
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
