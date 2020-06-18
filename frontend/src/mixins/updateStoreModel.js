import Vue from 'vue';

const updateStoreModel = {
  methods: {
    updateStoreModel(data) {
      console.log(data);
      this.$store.commit('accomplishments/setAccomplishments', data.accomplishments);
      this.$store.commit('profile/setPosition', data.position);
      this.$store.commit('profile/setProfileDesc', data.profile);
      this.$store.commit('education/setEducationList', data.education);
    }
  },
};

Vue.mixin(updateStoreModel);