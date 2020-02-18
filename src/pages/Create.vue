<template>
  <div class="row">
    <div class="col-md-4">
      <Bio />
      <Main />
      <Details />
    </div>
    <div class="col-md-8">
      <Profile />
      <Expirience />
    </div>

  </div>
</template>

<script>
  import Bio from '@/components/Bio.vue'
  import Expirience from '@/components/Expirience.vue'
  import Profile from '@/components/Profile.vue'
  import Main from '@/components/Main.vue'
  import Details from '@/components/Details.vue'
  export default {
    name: "home",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    components: {
      Bio, Expirience, Profile, Main, Details
    }
  }
</script>
