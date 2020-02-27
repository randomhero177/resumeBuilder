<template>
  <div>
    <Avatar />
    <Birthday />
    <Languages />
    <Skills />
  </div>
</template>

<script>
import Birthday from '@/components/form/Birthday.vue';
import Languages from '@/components/Languages.vue';
import Skills from '@/components/Skills.vue';
import Avatar from '@/components/form/Avatar.vue'

  export default {
    name: 'Details',
    components: {
      Birthday,
      Languages,
      Skills,
      Avatar,
    },
  }
</script>
