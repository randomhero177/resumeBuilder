<template>
  <div class="row form__item">
    <div class="col-md-12">
      <div class="form__label">{{ $t('skills') }}:</div>
      <multiselect
        v-model="skillsList"
        :tag-placeholder="$t('workHistory.skillPlaceholder')"
        :placeholder="$t('workHistory.searchSkill')"
        :selectLabel="$t('selectLabel')"
        :deselectLabel="$t('removeLabel')"
        :selectedLabel="$t('selectedLabel')"
        label="name"
        track-by="code"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addTag"
      />
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Skills',
    data () {
      return {
        value: [],
        options: [
          { "name": "Vue.js", "code": "vu" },
          { "name": "Javascript", "code": "js" },
          { "name": "Gulp", "code": "Gu9116667" },
          { "name": "Webpack", "code": "We8718389" },
          { "name": "TypeScript", "code": "Ty9971407" },
          { "name": "OpenApi", "code": "Op2971758" },
          { "name": "Jquery", "code": "Jq9294925" }
        ]
      };
    },
    computed: {
      skillsList: {
        get() {
          return this.$store.state.skills.skills;
        },
        set(value) {
          this.$store.commit('skills/setSkills', value)
        },
      },
    },
    methods: {
      addTag (newTag) {
        const tag = {
          name: newTag,
          code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        };
        this.options.push(tag);
        this.value.push(tag);
      },
    },
  }
</script>
