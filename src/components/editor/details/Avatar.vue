<template>
  <div class="avatar form__item">
    <div class="form__label">{{ $t('yourPicture') }}</div>
    <div v-if="isEmpty">
      <span class="btn btn-add" @click="openFileDialog">
        <span class="btn-add__icon">
          <font-awesome-icon icon="plus-circle" />
        </span>
        {{ $t('uploadPicture') }}
      </span>
      <input
        type="file"
        @change="encodeImageFileAsURL($event)"
        id="inputFile"
        ref="inputFile"
        accept="image/*"
        style="display: none"
      >
    </div>
    <div v-else style="text-align: center">
      <img :src="imgUrl.src" alt="" class="avatar__img form__elem">
      <div class="text-right">
        <span class="btn btn-remove" v-on:click="removeImage">
          <font-awesome-icon icon="trash-alt" />
          Remove this image
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Avatar',
    data: () => ({
      showModal: false,
      modalImg: '',
    }),
    computed: {
      imgUrl() {
        return this.$store.state.form.avatar;
      },
      isEmpty() {
        return Object.entries(this.imgUrl).length === 0 && this.imgUrl.constructor === Object
      }
    },
    methods: {
      encodeImageFileAsURL(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          this.$store.commit('form/setAvatar', { src: reader.result, mime: file.type });
        };
        reader.readAsDataURL(file);
      },
      openFileDialog() {
        this.$refs[`inputFile`].click();
      },
      removeImage() {
        this.$store.commit('form/setAvatar', {});
      },
    },
  }
</script>
<style lang="stylus" scoped>
  .avatar
    &__btn
      padding 1.5rem 3rem
      border 1px solid #000
      border-radius 3px
      display block
      text-align center
      font-size .75rem
      cursor pointer
    &__img
      width 200px
</style>
