<template>
  <div class="row">
    <div class="col-md-4">
      <header class="heading">
        <h2 class="heading__title">Details</h2>
      </header>
      <Main />
      <Details />
    </div>
    <div class="col-md-8">
      <Profile />
      <Education />
      <Experience />
    </div>
  </div>
</template>

<script>
  import Experience from '@/components/Experience.vue'
  import Profile from '@/components/Profile.vue'
  import Main from '@/components/Main.vue'
  import Details from '@/components/Details.vue'
  import Education from '@/components/Education.vue'
  export default {
    name: "home",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    components: {
      Experience, Profile, Main, Details, Education,
    },
  }
</script>
