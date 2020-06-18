<template>
  <div class="create">
    <div class="row justify-content-between">
      <div class="col">
        <header class="heading">
          <h1 class="page__title">{{ $t('create.title') }}</h1>
        </header>
      </div>
      <div class="col-auto">
        <div class="form__elem">
          <span v-on:click="sendGtm('download-resume-after-editor')" style="display: inline-block">
            <router-link :to="'/preview-' + templateName" class="btn btn-preview" v-tooltip.left="$t('create.previewBtnTooltip')">{{ $t('create.previewBtn') }}</router-link>
          </span>
          <save-in-account />
        </div>
        <div class="text-right"><span class="form-btn btn-remove" v-on:click="showModal = true"><font-awesome-icon icon="trash-alt" /> {{ $t('clearAll') }}</span></div>
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
        <References />
      </div>
    </div>
    <div class="row justify-content-end align-content-center">
      <div class="col-auto">
        <div><small><i>{{ $t('unfilled') }}</i></small></div>
        <div><small><i v-html="$t('requiredDesc')"></i></small></div>
      </div>
      <div class="col-auto">
        <span v-on:click="sendGtm('download-resume-after-editor')">
          <router-link :to="'/preview-' + templateName" class="btn btn-preview" v-tooltip.left="$t('create.previewBtnTooltip')">{{ $t('create.previewBtn') }}</router-link>
        </span>
      </div>
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
  import References from '@/components/editor/References.vue';
  import Modal from '@/components/common/Modal.vue';
  import SaveInAccount from '@/components/common/SaveInAccount.vue';

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
      Experience, Profile, Details, Education, Accomplishments, Modal, References, SaveInAccount,
    },
    methods: {
      ...mapActions({
        setAccomplishments: 'accomplishments/setAccomplishments'
      }),
      sendGtm(name) {
        if(window.dataLayer) {
          window.dataLayer.push({'event': name})
        }
      },
      approveModal() {
        this.showModal = false;
        this.clearStorage();
        if(window.dataLayer) {
          window.dataLayer.push({'event': 'clear-editor-form'})
        }
      },
      clearStorage(){
        this.$store.commit('accomplishments/setAccomplishments', '');
        this.$store.commit('education/removeSection');
        this.$store.commit('form/setEmail', '');
        this.$store.commit('experience/removeSection');
        this.$store.commit('form/clearAll');
        this.$store.commit('languages/removeSection');
        this.$store.commit('links/removeSection');
        this.$store.commit('form/setPhone', '');
        this.$store.commit('profile/clearAll');
        this.$store.commit('skills/setSkills', []);
      },
    },
  }
</script>