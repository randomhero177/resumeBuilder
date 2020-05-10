<template>
  <div>
    <Name />
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
import Birthday from '@/components/editor/details/Birthday.vue';
import Languages from '@/components/editor/details/Languages.vue';
import Skills from '@/components/editor/details/Skills.vue';
import Avatar from '@/components/editor/details/Avatar.vue';
import Email from '@/components/editor/details/Email.vue';
import Phone from '@/components/editor/details/Phone.vue';
import Links from '@/components/editor/details/Links.vue';
import Name from '@/components/editor/details/Name.vue';

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
      Name,
    },
  }
</script>
