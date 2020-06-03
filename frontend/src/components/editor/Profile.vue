<template>
  <div class="form__item">
    <header class="heading">
      <h2 class="heading__title">{{ $t('create.profile') }}</h2>
    </header>
    <div class="row form__item">
      <div class="col-6">
        <div class="form__label">{{ $t('create.position') }}</div>
        <input type="text" class="input" v-model="position" :placeholder="$t('position')">
      </div>
    </div>
    <div class="form__label">{{ $t('create.summary') }}</div>
    <wysiwyg v-model="profileInfo" />
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    computed: {
      profileInfo: {
        get() {
          return this.$store.state.profile.profile;
        },
        set(value) {
          this.$store.commit('profile/setProfileDesc', value);
        },
      },
      position: {
        get() {
          return this.$store.state.profile.position;
        },
        set(value) {
          this.$store.commit('profile/setPosition', value);
        },
      },
    },
  }
</script>
