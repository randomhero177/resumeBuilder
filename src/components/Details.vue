<template>
  <div>
    <Avatar />
    <Email />
    <Phone />
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
import Email from '@/components/create/Email.vue'
import Phone from '@/components/create/Phone.vue'

  export default {
    name: 'Details',
    components: {
      Birthday,
      Languages,
      Skills,
      Avatar,
      Email,
      Phone,
    },
  }
</script>
