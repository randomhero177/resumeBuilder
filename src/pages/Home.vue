<template>
  <div class="row">
    <div class="col-md-4">
      <Bio />
      <Main />
    </div>
    <div class="col-md-8">
      <Profile />
      <Expirience />
    </div>
    <unicon name="user-plus" fill="royalblue" />

  </div>
</template>

<script>
  import Bio from '@/components/Bio.vue'
  import Expirience from '@/components/Expirience.vue'
  import Profile from '@/components/Profile.vue'
  import Main from '@/components/Main.vue'
  export default {
    name: "home",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    components: {
      Bio, Expirience, Profile, Main,
    }
  }
</script>
