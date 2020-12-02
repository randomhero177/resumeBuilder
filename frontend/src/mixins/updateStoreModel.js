import Vue from 'vue';

const updateStoreModel = {
  methods: {
    updateStoreModel(data) {
      const config = {
        accomplishments: 'accomplishments/setAccomplishments',
        education: 'education/setEducationList',
        experience: 'experience/setExperienceList',
        avatar: 'form/setAvatar',
        birthday: 'form/setBirthday',
        name: 'form/setUserLastName',
        lastName: 'form/setUserLastName',
        phone: 'form/setPhone',
        email: 'form/setEmail',
        position: 'profile/setPosition',
        profile: 'profile/setProfileDesc',
        languages: 'languages/setLanguages',
        links: 'links/setLinksListConfig'
      };

      for (let [key, value] of Object.entries(config)) {
        if(data[key] && typeof data[key] !== 'undefined') {
          this.$store.commit(value, data[key]);
        }
      }
    }
  },
};

Vue.mixin(updateStoreModel);