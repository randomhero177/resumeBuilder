<template>
  <div class="modal" v-on:click="cancel">
    <div class="modal__container" v-on:click.stop>
      <div class="modal__inner">
        <div class="heading__title">{{ title }}</div>
        <template v-if="hasBodySlot">
          <div class="form__item">
            <slot name="body"></slot>
          </div>
        </template>
        <div class="modal__buttons">
          <template v-if="!hasButtonsSlot">
            <button class="modal__btn modal__btn_add" v-on:click="approve">{{ $t('clearForm') }}</button>
            <button class="modal__btn modal__btn_remove" v-on:click="cancel">{{ $t('cancel') }}</button>
          </template>
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Modal',
    data: () => ({
      showModal: true,

    }),
    computed: {
      hasButtonsSlot() {
        return !!this.$slots.buttons
      },
      hasBodySlot() {
        return !!this.$slots.body
      }
    },
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

</style>