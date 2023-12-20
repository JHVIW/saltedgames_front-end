<template>
    <div>
      <input type="text" v-model="query" @input="searchGames" placeholder="Search games...">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: '',
      };
    },
    methods: {
      searchGames() {
        // Trigger the API call with the current query whenever a letter is typed
        this.$emit('search', this.query);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your search bar styles here */
  </style>
  