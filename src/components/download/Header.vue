<template>
  <div class="row">
    <div class="col-md-6">
      <div class="content-pad">
        <div class="preview preview-melinda">
          <div class="form__item">
            <h1 class="page__title">Melinda template preview</h1>
            <div class="preview__descr form__elem">{{ $t('downloadPage.description') }}</div>
            <div><button class="btn button-preview" v-on:click="btnClick">{{ $t('downloadPage.btn') }}</button></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-auto ml-auto">
      <div class="form__item content-pad">
        <ChangePreview />
      </div>
    </div>
  </div>
</template>

<script>
  import ChangePreview from '@/components/ChangePreview.vue';

  export default {
    name: 'DonwloadHeader',
    components: {
      ChangePreview,
    },
    methods: {
      btnClick() {
        this.$emit('trigerPrint')
        if(window.dataLayer) {
          window.dataLayer.push({'event': 'previewMain-pdf-download'})
        }
      },
    },
  }
</script>
