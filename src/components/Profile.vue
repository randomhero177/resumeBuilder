<template>
  <div>
    <h2>Profile</h2>
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
    name: 'HelloWorld',

    data: () => ({

    }),
    methods: {
      hui() {
        console.log('sdfsdf');
      }
    }
  }
</script>
