<template>
  <div>
    <header class="heading">
      <h2 class="heading__title">Profile</h2>
    </header>
    <v-container fluid>
      <v-textarea
          clearable
          label="Text"
          value="This is clearable text."
          @keydown="hui"
      ></v-textarea>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Profile',

    data: () => ({

    }),
    methods: {
      hui() {
        console.log('sdfsdf');
      }
    }
  }
</script>
