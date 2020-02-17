<template>
  <div class="avatar">
    <div v-if="isEmpty">
      <span class="avatar__btn" @click="openFileDialog">
        Выберите файл
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
    <div v-else>
      <img :src="imgUrl.src" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Avatar',
    data: () => ({
      inputFileList: [0],
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
            this.inputFileList.push(Math.random().toString());
        };
        reader.readAsDataURL(file);
      },
      openFileDialog() {
          this.$refs[`inputFile`].click();
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
</style>
