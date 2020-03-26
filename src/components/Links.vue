<template>
  <div class="links">
    <div class="form__label">Links:</div>
    <div v-for="(icon, key, index) in linksList" :key="index" class="links__item">
      <div class="row">
        <div class="col-2">
          <span class="links__icon" :title="iconsConfig[key].title" v-if="iconsConfig[key]">
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
      <span class="btn btn-add" v-on:click="addSection" v-if="!linksListLength">Add links section</span>
      <div
          class="btn btn-add"
          v-if="linksListLength"
          v-on:click="addRandomLink"
      >Add random link</div>
      <span class="btn btn-remove" v-on:click="removeSection" v-if="linksListLength"><font-awesome-icon icon="trash-alt" /> Remove Links section</span>
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


