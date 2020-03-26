<template>
  <div>
    <header class="heading">
      <h2 class="heading__title">Profile</h2>
      {{ $store.state.profile.profile }}
    </header>
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
    },
  }
</script>
