<template>
  <div class="links form__item">
    <div class="form__label">{{ $t('links') }}:</div>
    <div v-for="(icon, key, index) in linksList" :key="index" class="form__elem">
      <div class="row">
        <div class="col-2">
          <span class="links__icon" v-tooltip="iconsConfig[key].title" v-if="iconsConfig[key]">
            <font-awesome-icon :icon="['fab', iconsConfig[key].icon]" />
          </span>
        </div>
        <div class="col-10">
          <input type="text" class="input"
            :value="icon"
            @input="updateLink($event, key)"
          >
        </div>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col" v-if="!linksListLength">
        <span class="form-btn btn-add" v-on:click="addSection">
          <span class="btn-add__icon"><font-awesome-icon icon="plus-circle" /></span>
          {{ $t('addLinkSection') }}
        </span>
      </div>
      <div class="col" v-if="linksListLength">
        <div
          class="form-btn btn-add"
          v-on:click="addRandomLink"
        >
          <span class="btn-add__icon"><font-awesome-icon icon="plus-circle" /></span>
          {{ $t('addRandomLink') }}
        </div>
      </div>
      <div class="col text-right" v-if="linksListLength">
        <span class="form-btn btn-remove" v-on:click="removeSection">
          <font-awesome-icon icon="trash-alt" /> {{ $t('removeLinkSection') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    name: 'Links',
    data () {
      return {

      };
    },
    computed: {
      ...mapState({
        linksList: state => state.links.linksList,
        iconsConfig: state => state.links.iconsConfig,
      }),
      linksListLength() {
        const check = Object.keys(this.linksList).length;
        return check;
      },
    },
    methods: {
      ...mapActions({
        setLink: 'links/setLink',
        addRandomLink: 'links/addRandomLink',
        addSection: 'links/addSection',
        removeSection: 'links/removeSection',
      }),
      updateLink(e, key) {
        this.setLink({
          link: e.target.value,
          key,
        })
      },
    },
  }
</script>

<style scoped lang="stylus">
  .links
    &__icon
      font-size 30px
    &__item
      margin-bottom 15px
</style>


