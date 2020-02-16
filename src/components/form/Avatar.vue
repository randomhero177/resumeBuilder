<template>
  <div>
    <div>
      <div @click="openFileDialog">
        Выберите файл
      </div>
      <input
          type="file"
          @change="encodeImageFileAsURL($event)"
          id="inputFile"
          ref="inputFile"
          accept="image/*"
          style="display: none"
      >
    </div>
    <div v-if="imgUrlList.length">
      <img :src="imgUrlList[0].src" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Avatar',
    data: () => ({
      imgUrlList: [],
      inputFileList: [0],
      showModal: false,
      modalImg: '',
    }),
    computed: {
      isAdded() {
        return true
      },
    },
    methods: {
      encodeImageFileAsURL(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.imgUrlList.push({ src: reader.result, mime: file.type });
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
