<template>
  <div>
    <Avatar />
    <Email />
    <Phone />
    <Birthday />
    <Skills />
    <Links />
    <Languages />
  </div>
</template>

<script>
import Birthday from '@/components/form/Birthday.vue';
import Languages from '@/components/Languages.vue';
import Skills from '@/components/Skills.vue';
import Avatar from '@/components/form/Avatar.vue'
import Email from '@/components/create/Email.vue'
import Phone from '@/components/create/Phone.vue'
import Links from '@/components/Links.vue';

  export default {
    name: 'Details',
    components: {
      Birthday,
      Languages,
      Skills,
      Avatar,
      Email,
      Phone,
      Links,
    },
  }
</script>
