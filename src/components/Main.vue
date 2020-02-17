<template>
  <div class="row">
    <div class="col-md-6">
      <input type="text" v-model="name" placeholder="Your name">
    </div>
    <div class="col-md-6">
      <input type="text" v-model="lastName" placeholder="Your last name">
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Bio',

    data: () => ({
      name: '',
      lastName: '',
    }),
    components: {

    }
  }
</script>
