<template>
  <section class="page">
    <div class="full-height">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2"></div>
          <div class="col">
            <Navigation />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="content-pad">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
  import Footer from '@/components/common/Footer.vue';
  import Navigation from '@/components/common/Navigation.vue';
export default {
  name: 'LayoutDefault',
  data() {
    return {

    };
  },
  components: {
    Footer, Navigation,
  }
};
</script>
