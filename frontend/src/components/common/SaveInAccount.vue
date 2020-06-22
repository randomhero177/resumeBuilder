<template>
  <div style="display: inline-block; margin-left: 10px;" v-if="isAuth">
    <div class="btn btn-home" v-on:click="saveInAccount" v-if="isAuth && !doesResumeExist">
      Save resume in account
    </div>
    <div class="btn btn-home" v-on:click="updateInAccount" v-if="isAuth && doesResumeExist">
      Update saved resume
    </div>
    <notification :title="title" v-if="showNotification" @onCancel="showNotification = false" />
  </div>

</template>

<script>
  import { mapState } from 'vuex';
  import Notification from '@/components/common/Notification.vue';
  import apiRequests from '@/services/api';

  export default {
    name: 'SaveInAccount',
    data: () => ({
      title: '',
      showNotification: false,
      token: localStorage.getItem('abrakadabra'),
    }),
    computed: {
      ...mapState({
        accomplishments: state => state.accomplishments.accomplishments,
        avatar: state => state.form.avatar,
        birthday: state => state.form.birthday,
        education: state => state.education.educationList,
        email: state => state.form.email,
        experience: state => state.experience.experienceList,
        languages: state => state.languages.languages,
        lastName: state => state.form.lastName,
        links: state => state.links.linksList,
        name: state => state.form.name,
        position: state => state.profile.position,
        phone: state => state.form.phone,
        profile: state => state.profile.profile,
        references: state => state.profile.references,
        doesResumeExist: state => state.user.doesResumeExist,
        isAuth: state => state.user.isAuth,
      }),
    },
    methods: {
      prepareData() {
        return {
          accomplishments: this.accomplishments,
          avatar: {
            mime: this.avatar.mime,
            src: this.avatar.src,
          },
          birthday: this.birthday,
          education: this.education,
          email: this.email,
          experience: this.experience,
          languages: this.languages,
          lastName: this.lastName,
          links: this.links,
          name: this.name,
          profile: this.profile,
          phone: this.phone,
          position: this.position,
          references: this.references,
        };
      },
      saveInAccount() {
        const data = this.prepareData()
        const config = {
          headers: { Authorization: `Bearer ${this.token}` }
        };
        apiRequests.saveResume(data, config).then(responce => {
          this.showNotification = true;
          if (responce.status === 'Ok') {
            console.log(responce)
            this.title = 'Resume successfully saved'
          } else {
            console.log(responce)
            this.title = responce.data.message;
          }
        })
      },
      updateInAccount() {
        const data = this.prepareData()
        const config = {
          headers: { Authorization: `Bearer ${this.token}` }
        };
        apiRequests.updateResume(data, config).then(responce => {
          this.showNotification = true;
          if (responce.status === 'Ok') {
            console.log(responce)
            this.title = 'Resume successfully saved'
          } else {
            console.log(responce)
            this.title = responce.data.message;
          }
        })
      },
    },
    components: {
      Notification,
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
