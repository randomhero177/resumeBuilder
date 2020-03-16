<template>
  <div class="birthday">
    <div class="row">
      <div class="col-md-12">
        <div class="form__label">Birthday</div>
        <div class="form__picker">
          <datepicker placeholder="Select Date"
            v-model="pickerDate"
            :monday-first="true"
            :format="format"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'Birthday',
    data: () => ({
      format: 'yyyy-MM-dd',
    }),
    computed: {
      pickerDate: {
        get() {
          return this.$store.state.form.pickerDate;
        },
        set(value) {
          this.$store.commit('form/setPickerDate', value)
        },
      },
    },
  }
</script>
