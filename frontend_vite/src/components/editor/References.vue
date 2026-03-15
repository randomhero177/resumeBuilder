<template>
  <div class="accomplishments form__item">
    <header class="heading">
      <h2 class="heading__title">{{ $t('references') }}</h2>
    </header>
    <div>
      <wysiwyg v-model="accomplishments" :placeholder="$t('referencesDesc')"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'References',
    computed: {
      accomplishments: {
        get() {
          return this.$store.state.references.references
        },
        set(value) {
          this.$store.commit('references/setReferences', value)
        },
      },
    },
  }
</script>
