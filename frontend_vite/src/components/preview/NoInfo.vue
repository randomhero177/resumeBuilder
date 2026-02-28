<template>
  <div class="row justify-content-center">
    <div class="col-auto">
      <div class="content-pad text-center">
        <h4>{{ $t('noInfoDownload') }}</h4>
        <div class="home__works-button">
          <span v-on:click="sendGtm('fill-resume-from-download')"><router-link to="/editor" class="home__button btn button-home">{{ $t('homePage.works.list.step2.btn') }}</router-link></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoInfo',
    methods: {
      sendGtm(name) {
        if(window.dataLayer) {
          window.dataLayer.push({'event': name})
        }
      },
    }
  }
</script>
