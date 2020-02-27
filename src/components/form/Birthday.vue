<template>
  <div class="birthday">
    <div class="row">
      <div class="col-md-12">
        <div class="form__label">Birthday</div>
        <div class="form__picker">
          <input type="text"
             @focus="showPicker = true"
             v-model="pickerDate" class="input">
          <span class="birthday__icon_close" v-if="showPicker" v-on:click="showPicker = false">
            <unicon name="times-circle" fill="#1867c0" />
          </span>
          <v-date-picker
            v-model="pickerDate"
            color="green lighten-1"
            header-color="primary"
            v-if="showPicker"
            @click:date="showPicker = false"
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
      showPicker: false,
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
    methods: {
    }
  }
</script>
<style lang="stylus">
  .v-picker
    & .primary
      background-color #1867c0 !important
      border-color #1867c0 !important
  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined),
  .v-date-picker-table .v-btn.v-btn--active
    background-color #635656
  .birthday__icon_close
    position absolute
    right 5px
    top 5px
    z-index 3
    cursor pointer
</style>
