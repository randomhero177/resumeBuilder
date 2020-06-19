import Vue from 'vue';

const updateStoreModel = {
  methods: {
    updateStoreModel(data) {
      console.log(data);
      this.$store.commit('accomplishments/setAccomplishments', data.accomplishments);
      this.$store.commit('education/setEducationList', data.education);
      this.$store.commit('experience/setExperienceList', data.experience);
      this.$store.commit('profile/setPosition', data.position);
      this.$store.commit('profile/setProfileDesc', data.profile);

    }
  },
};

Vue.mixin(updateStoreModel);