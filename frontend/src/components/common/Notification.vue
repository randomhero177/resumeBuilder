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
          <span class="notification__icon notification__icon_close icon" v-on:click="destroy" style="font-size: 15px">
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
    data: () => ({
      show: false,
    }),
    props: {
      title: {
        type: String,
        default: 'Ничего особенного'
      }
    },
    methods: {
      destroy() {
        this.show = false;
        this.$emit('onCancel');
        this.$nextTick(() => {
          this.$destroy();
        });
      }
    },
    created() {
      setTimeout(() => {
        this.destroy();
      }, 115000);
    }
  }
</script>

<style scoped lang="stylus">
  .notification
    width 200px
    padding 30px 10px 10px 10px
    background #f1f1f1
    border 1px solid #b3b0b0
    position absolute
    top 100px
    right 50px
    z-index 10
    font-size 1rem
    &__item
      position relative
    &__icon
      position absolute
      top -25px
      right -2px
    &__title
      font-size 1rem
</style>
