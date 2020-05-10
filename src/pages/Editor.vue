<template>
  <div class="create">
    <div class="row justify-content-between">
      <div class="col">
        <header class="heading">
          <h1 class="page__title">{{ $t('create.title') }}</h1>
        </header>
      </div>
      <div class="col-auto">
        <div>
          <router-link :to="'/preview-' + templateName" class="button-preview" v-tooltip.left="$t('create.previewBtnTooltip')">{{ $t('create.previewBtn') }}</router-link>
        </div>
        <br>
        <div class="text-right"><span class="btn btn-remove" v-on:click="showModal = true"><font-awesome-icon icon="trash-alt" /> {{ $t('clearAll') }}</span></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <header class="heading">
          <h2 class="heading__title">{{ $t('create.details') }}</h2>
        </header>
        <Details />
      </div>
      <div class="col-md-8">
        <Profile />
        <Education />
        <Experience />
        <Accomplishments />
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="col-auto"><router-link :to="'/preview-' + templateName" class="button-preview" v-tooltip.left="$t('create.previewBtnTooltip')">{{ $t('create.previewBtn') }}</router-link></div>
    </div>
    <Modal
      v-if="showModal"
      :title="$t('clearModalConfirm')"
      @onCancel="showModal = false"
      @onApprove="approveModal"
    />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Experience from '@/components/editor/Experience.vue';
  import Profile from '@/components/editor/Profile.vue';
  import Details from '@/components/editor/details/Details.vue';
  import Education from '@/components/editor/Education.vue';
  import Accomplishments from '@/components/editor/Accomplishments.vue';
  import Modal from '@/components/common/Modal.vue';

  export default {
    name: "editor",
    data() {
      return {
        showModal: false,
      };
    },
    computed: {
      ...mapState({
        templateName: state => state.template.templateName,
      }),
    },
    components: {
      Experience, Profile, Details, Education, Accomplishments, Modal,
    },
    methods: {
      ...mapActions({
        setAccomplishments: 'accomplishments/setAccomplishments'
      }),
      approveModal() {
        this.showModal = false;
        this.clearStorage();
      },
      clearStorage(){
        this.$store.commit('accomplishments/setAccomplishments', '');
        this.$store.commit('education/removeSection', );
        this.$store.commit('email/setEmail', '');
        this.$store.commit('experience/removeSection', );
        this.$store.commit('form/clearAll', );
        this.$store.commit('languages/removeSection', );
        this.$store.commit('links/removeSection', );
        this.$store.commit('phone/setPhone', '');
        this.$store.commit('profile/clearAll', );
        this.$store.commit('skills/setSkills', []);
      },
    },
  }
</script>