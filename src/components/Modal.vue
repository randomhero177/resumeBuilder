<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__inner">
        <div class="heading__title">{{ title }}</div>
        <div class="modal__buttons">
          <div class="btn btn-remove" v-on:click="cancel">I don't</div>
          <div class="btn btn-add" v-on:click="approve">I do</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Modal',
    data: () => ({

    }),
    props: {
      title: {
        type: String,
        default: 'Please confirm'
      },
      onApprove: {
        type: String,
      },
    },
    methods: {
      cancel() {
        this.$emit('onCancel')
      },
      approve() {
        this.$emit('onApprove')
      }
    },
  }
</script>
<style lang="stylus" scoped>
  .modal
    position fixed
    width 100%
    height 100%
    background rgba(0, 0, 0, .25)
    display flex
    justify-content center
    align-items center
    &__container
      width 50%
      text-align center
      background #fff
      padding 30px
      border-radius 5px
</style>