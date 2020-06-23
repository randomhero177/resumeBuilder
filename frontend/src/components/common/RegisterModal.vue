<template>
  <div>
    <Modal
      :title="$t('auth')"
      @onCancel="closeModal"
      @onApprove="closeModal"
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
        <span class="modal__icon modal__icon_close" v-on:click="closeModal">
            <font-awesome-icon icon="times-circle" />
          </span>
      </template>
    </Modal>
    <Notification :title="notificationTitle" v-if="showNotification" @onCancel="showNotification = false" />
  </div>
</template>

<script>
  import Modal from '@/components/common/Modal.vue';
  import {mapState} from "vuex";
  import parseJWT from '@/utils/parseJWT';
  import authRequest from '@/services/auth';
  import apiRequests from '@/services/api';
  import Notification from '@/components/common/Notification.vue';

  export default {
    name: 'RegisterModal',
    data: () => ({
      showRegisterModal: false,
      showNotification: false,
      email: '',
      password: '',
      notificationTitle: ''
    }),
    computed: {
      ...mapState({
        isAuth: state => state.user.isAuth,
      }),
    },
    methods: {
      closeModal() {
        this.$emit('closeRegisterModal');
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
            this.$emit('closeRegisterModal');
            this.getResume();
          } else {
            this.showError(responce)
          }
        })
      },
      getResume() {
        const config = {
          headers: { Authorization: `Bearer ${this.$store.state.user.token.token}` }
        };
        apiRequests.getResume(config).then(responce => {
          if (responce && responce.status === 200) {
            this.$store.commit('user/setUserAuth', true);
            if(responce.data.length) {
              this.updateStoreModel(responce.data[0]);
              this.$store.commit('user/setExistance', true)
            }
          } else {
            console.log('not ok')
            this.$store.commit('user/setUserAuth', false)
            this.$store.commit('user/setUserToken', {})
          }
        })
      },
      register() {
        authRequest.register({
          email: this.email,
          password: this.password
        }).then(responce => {
          if(responce && responce.status === 201) {
            this.$emit('closeRegisterModal');
            this.login();
          } else {
            this.showError(responce);
          }
        })
      },
      showError(responce) {
        this.notificationTitle = responce.data.message ? responce.data.message : 'Error during request'
        this.showNotification = true;
      },
    },
    components: {
      Modal, Notification,
    }
  }
</script>

<style scoped lang="stylus">
  .footer
    background #1f1717
    color #a7a7a7
    padding 45px 0
    font-size .75rem
</style>
