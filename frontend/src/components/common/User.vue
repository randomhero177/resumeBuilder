<template>
  <div class="dropdown dropdown_user">
    <div class="dropdown__item" v-if="!isAuth">
      <b class="dropdown__link" v-on:click="showRegisterModal = true">{{ $t('login') }}/{{ $t('register') }}</b>
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
    <div class="dropdown__item" v-if="isAuth">
      <b class="dropdown__link" v-on:click="showLogoutModal = true">{{ $t('logout') }}</b>
      <Modal
        v-if="showLogoutModal"
        title="Please confirm you would like to logout"
        @onCancel="showLogoutModal = false"
        @onApprove="showLogoutModal = false"
      >
        <template v-slot:buttons>
          <div class="text-right">
            <button class="modal__btn modal__btn_sm" v-on:click="showLogoutModal = false">{{ $t('cancel') }}</button>
            <button class="modal__btn modal__btn_sm modal__btn_login" v-on:click="logout">{{ $t('logout') }}</button>
          </div>
          <span class="modal__icon modal__icon_close" v-on:click="showLogoutModal = false">
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
  import apiRequests from '@/services/api';
  import Notification from '@/components/common/Notification.vue';
  import {mapState} from "vuex";

  export default {
    name: 'Auth',
    data: () => ({
      showRegisterModal: false,
      showLogoutModal: false,
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
          this.$emit('onMouseOut');
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
            console.log(responce.data.length);
            if(responce.data.length) {
              this.updateStoreModel(responce.data[0]);
              console.log('ect')
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
          console.log(responce);
          if(responce && responce.status === 201) {
            this.$emit('onMouseOut')
          } else {
            this.showError(responce);
          }
        })
      },
      logout() {
        window.localStorage.removeItem('abrakadabra');
        window.localStorage.removeItem('abrakadabra-exp');
        this.$store.commit('user/setUserToken', {});
        this.$store.commit('user/setUserAuth', false);
        this.$store.commit('user/setExistance', false);
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
