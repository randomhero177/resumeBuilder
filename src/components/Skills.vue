<template>
  <div class="row">
    <div class="col-md-12">
      <div class="form__label">Skills:</div>
      <multiselect
        v-model="value"
        tag-placeholder="Add this as new skill"
        placeholder="Search or add a skill"
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
    name: 'Expirience',

    data () {
      return {
        value: [],
        options: [
          { name: 'Vue.js', code: 'vu' },
          { name: 'Javascript', code: 'js' },
          { name: 'Open Source', code: 'os' }
        ]
      };
    },
    methods: {
      addTag (newTag) {
        const tag = {
          name: newTag,
          code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        }
        this.options.push(tag)
        this.value.push(tag)
      }
    },
  }
</script>
