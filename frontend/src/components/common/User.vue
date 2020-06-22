<template>
  <div class="dropdown dropdown_user">
    <div class="dropdown__item" v-if="!isAuth">
      <b class="dropdown__link" v-on:click="showRegisterModal = true">{{ $t('login') }}/{{ $t('register') }}</b>
      <RegisterModal v-if="showRegisterModal" @closeRegisterModal="closeRegisterModal"/>
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
      <Notification :title="notificationTitle" v-if="showNotification" @onCancel="showNotification = false" />
    </div>
    <div class="dropdown__item"><Language /></div>
  </div>
</template>

<script>
  import Modal from '@/components/common/Modal.vue';
  import RegisterModal from '@/components/common/RegisterModal.vue';
  import Language from '@/components/common/Language.vue';
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
      closeRegisterModal() {
        this.showRegisterModal = false;
        this.$emit('onMouseOut');
      },
      logout() {
        window.localStorage.removeItem('abrakadabra');
        window.localStorage.removeItem('abrakadabra-exp');
        this.$store.commit('user/setUserToken', {});
        this.$store.commit('user/setUserAuth', false);
        this.$store.commit('user/setExistance', false);
        this.$emit('onMouseOut');
      }
    },
    components: {
      Modal, Language, Notification, RegisterModal,
    }
  }
</script>
