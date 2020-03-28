<template>
  <div class="preview__profile" v-if="email.length || typeof birthday !== 'string'">
    <h5 class="preview__title">
      <span class="preview__icon"><font-awesome-icon icon="info-circle" /></span>  Details
    </h5>
    <div v-if="email.length">
      <span class="preview__key">email:</span>
      <span class="preview__value">{{ email }}</span>
    </div>
    <div v-if="typeof birthday !== 'string'">
      <span class="preview__key">Date of birth:</span>
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
        birthday: state => state.form.birthday,
      }),
    },
    components: {

    },
  }
</script>
<style lang="stylus" scoped>

</style>