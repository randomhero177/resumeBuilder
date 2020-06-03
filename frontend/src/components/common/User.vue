<template>
  <div class="dropdown dropdown_user">
    <div class="dropdown__item">
      <span class="dropdown__link" v-on:click="showRegisterModal = true">{{ $t('login') }}/{{ $t('register') }}</span>
      <Modal
        v-if="showRegisterModal"
        :title="$t('auth')"
        @onCancel="showRegisterModal = false"
        @onApprove="showRegisterModal = false"
      >
        <template v-slot:body>
          <div class="row">
            <div class="col-lg-6">
              <input type="email"
               v-model="email"
               class="input"
               placeholder="Email"
               name="Email"
              >
            </div>
            <div class="col-lg-6">
              <input type="password" class="input"
                v-model="password"
                placeholder="Password"
                name="Password"
              >
            </div>
          </div>
        </template>
        <template v-slot:buttons>
          <div class="text-right">
            <button class="modal__btn modal__btn_sm modal__btn_add" v-on:click="login">{{ $t('login') }}</button>
            <button class="modal__btn modal__btn_sm modal__btn_login" v-on:click="register">{{ $t('register') }}</button>
          </div>
          <span class="modal__icon modal__icon_close" v-on:click="showRegisterModal = false">
            <font-awesome-icon icon="times-circle" />
          </span>
        </template>
      </Modal>
      <notification :title="notificationTitle" v-if="showNotification" @onCancel="showNotification = false" />
    </div>
    <div class="dropdown__item"><Language /></div>
  </div>
</template>

<script>
  import Modal from '@/components/common/Modal.vue';
  import Language from '@/components/common/Language.vue';
  import parseJWT from '@/utils/parseJWT';
  import authRequest from '@/services/auth';
  import Notification from '@/components/common/Notification.vue';

  export default {
    name: 'Auth',
    data: () => ({
      showRegisterModal: false,
      showNotification: false,
      email: '',
      password: '',
      notificationTitle: ''
    }),
    computed: {

    },
    methods: {
      closeDropDown() {
        // this.$emit('onMouseOut')
      },
      showError(responce) {
        console.log(responce);
        this.notificationTitle = responce.data.message ? responce.data.message : 'Error during request'
        this.showNotification = true;
      },
      login() {
        authRequest.login({
          email: this.email,
          password: this.password
        }).then(responce => {
        if (responce && responce.statusText === 'OK') {
          console.log(responce);
          this.showRegisterModal = false;
          const formData = JSON.parse(responce.config.data);
          window.localStorage.setItem('abrakadabra', responce.data.token);
          const tokenData = parseJWT(responce.data.token);
          const abrakadabraExp = (tokenData.exp - tokenData.iat) * 1000 - 60000;
          window.localStorage.setItem('abrakadabra-exp', abrakadabraExp);
          this.$store.commit('user/setUserToken', {
            token: responce.data.token,
            expire: abrakadabraExp,
            userId: responce.data.userId,
            email: formData.email
          });
          this.$emit('onMouseOut')
        } else {
          this.showError(responce)
        }
        })
      },
      register() {
        authRequest.register({
          email: this.email,
          password: this.password
        }).then(responce => {
          console.log(responce);
          if(responce && responce.status === 201) {
            this.$emit('onMouseOut')
          } else {
            this.showError(responce);
          }
        })
      },
      logout() {
        this.$store.commit('user/setUserToken', {});
      }
    },
    components: {
      Modal, Language, Notification,
    }
  }
</script>

<style scoped lang="stylus">
  .modal
    &__icon
      &_close
        cursor pointer
        position absolute
        font-size 20px
        top 5px
        right 10px
</style>
