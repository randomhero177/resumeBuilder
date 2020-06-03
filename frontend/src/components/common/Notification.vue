<template>
  <div>
    <transition
        name="fade"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated bounceOutRight bounceRight-leave"
    >
      <div class="notification">
        <div class="notification__item">
          <h4 class="notification__title">{{ title }}</h4>
          <span class="notification__icon notification__icon_close icon" v-on:click="destroy">
            <font-awesome-icon icon="times-circle" />
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'Notification',
    data: () => ({}),
    props: {
      title: {
        type: String,
        default: 'Ничего особенного'
      }
    },
    methods: {
      destroy() {
        this.$emit('onCancel');
        this.$nextTick(() => {
          this.$destroy();
        });
      }
    },
    created() {
      setTimeout(() => {
        this.destroy();
      }, 1115000);
    }
  }
</script>

<style scoped lang="stylus">
  .notification
    width 200px
    padding 10px
    background #f1f1f1
    border 1px solid #b3b0b0
    position fixed
    color #333
    top 100px
    right 50px
    z-index 10
    font-size 1rem
    text-align left
    &__item
      position relative
    &__icon
      position absolute
      top -22px
      right -16px
      &_close
        font-size 15px
        background #fff
        border-radius 100%
    &__title
      font-size 1rem
</style>
