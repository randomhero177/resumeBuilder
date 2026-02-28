<template>
  <div class="birthday form__item">
    <div class="row">
      <div class="col-md-12">
        <div class="form__label">{{ $t('birthday') }}</div>
        <div class="form__picker">
          <datepicker
            :placeholder="$t('selectDate')"
            v-model="birthday"
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
      birthday: {
        get() {
          return this.$store.state.form.birthday;
        },
        set(value) {
          this.$store.commit('form/setBirthday', value)
        },
      },
    },
  }
</script>
