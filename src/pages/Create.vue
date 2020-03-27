<template>
  <div>
    <div>
      <Navigation />
    </div>
    <div class="row">
      <div class="col-md-4">
        <header class="heading">
          <h2 class="heading__title">Details</h2>
        </header>
        <Main />
        <Details />
        <Links />
      </div>
      <div class="col-md-8">
        <Profile />
        <Education />
        <Experience />
      </div>
    </div>
  </div>
</template>

<script>
  import Experience from '@/components/Experience.vue'
  import Profile from '@/components/Profile.vue'
  import Main from '@/components/Main.vue'
  import Details from '@/components/Details.vue'
  import Education from '@/components/Education.vue'
  import Links from '@/components/Links.vue'
  import Navigation from '@/components/Navigation.vue'

  export default {
    name: "home",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    components: {
      Experience, Profile, Main, Details, Education, Links, Navigation,
    },
  }
</script>
