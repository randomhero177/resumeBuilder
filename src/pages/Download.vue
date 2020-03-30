<template>
  <div>
    <div ref="hideWhenPrint">
      <Navigation />
      <div class="heading">
        <h1 class="heading__title">Download your resume</h1>
      </div>
      <button class="btn btn-download" v-on:click="print">Download PDF</button>
    </div>
    <Header />
    <div class="row">
      <div class="col-md-8">
        <Profile />
        <Experience />
        <Education />
      </div>
      <div class="col-md-4">
        <Details />
        <Links />
        <Skills />
        <Languages />
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';
  import Header from '@/components/preview/Header.vue';
  import Profile from '@/components/preview/Profile.vue';
  import Details from '@/components/preview/Details.vue';
  import Links from '@/components/preview/Links.vue';
  import Skills from '@/components/preview/Skills.vue';
  import Languages from '@/components/preview/Languages.vue';
  import Experience from '@/components/preview/Experience.vue';
  import Education from '@/components/preview/Education.vue';
  export default {
    name: "Download",
    data() {
      return {
          data: () => ({

          }),
      };
    },
    methods: {
      print () {
        // Pass the element id here
        //this.$htmlToPaper('printMe');

        this.$refs['hideWhenPrint'].style.display = 'none';
        window.print();
      }
    },
    mounted() {

    },
    components: {
      Navigation, Header, Profile, Details, Links, Skills, Languages, Experience, Education,
    }
  }
</script>
