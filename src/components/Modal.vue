<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__inner">
        <div class="heading__title">{{ title }}</div>
        <div class="modal__buttons">
          <button class="modal__btn modal__btn-remove" v-on:click="cancel">Cancel</button>
          <button class="modal__btn modal__btn-add" v-on:click="approve">Clear form</button>
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
    background rgba(0, 0, 0, .5)
    display flex
    justify-content center
    align-items center
    &__container
      max-width 50%
      text-align center
      background #fff
      padding 45px
      border-radius 5px
    &__btn
      border 0
      padding 15px 30px
      color #fff
      cursor pointer
      &-remove
        border 1px solid #927c7c
        color #927c7c
      &-add
        border 1px solid #366d5b
        background #366d5b
    &__btn + &__btn
      margin-left 30px
    &__buttons
      margin-top 45px
</style>