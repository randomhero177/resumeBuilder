<template>
  <div class="preview__profile form__item" v-if="email.length || phone.length || typeof birthday !== 'string'">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="info-circle" /></span>  {{ $t('previewDetails') }}
    </h5>
    <div v-if="email.length">
      <span class="preview__key">Email:</span>
      <span class="preview__value">{{ email }}</span>
    </div>
    <div v-if="phone.length">
      <span class="preview__key">{{ $t('phone') }}:</span>
      <span class="preview__value">{{ phone }}</span>
    </div>
    <div v-if="typeof birthday !== 'string'">
      <span class="preview__key">{{ $t('birthday') }}:</span>
      <span class="preview__value">{{ birthday | moment("DD.MM.YYYY") }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'Details',
    computed: {
      ...mapState({
        email: state => state.email.email,
        phone: state => state.phone.phone,
        birthday: state => state.form.birthday,
      }),
    },
    components: {

    },
  }
</script>
<style lang="stylus" scoped>

</style>