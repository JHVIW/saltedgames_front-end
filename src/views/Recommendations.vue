<template>
    <div>
      <button @click="getRecommendations">Get Recommendations</button>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <games-list :games="userTags"></games-list>
      </div>
    </div>
  </template>
  
  <script>
  import GamesList from '@/components/RecommendationList.vue';
  import { getUserTags } from '@/services/GetRecommendations.js';
  import store from '@/services/store.js';
  
  export default {
    name: 'RecommendationsPage',
    components: {
      GamesList,
    },
    data() {
      return {
        steam64Id: store.state.steamId || "",
        isLoading: false,
        userTags: [],
        errorMessage: "",
      };
    },
    methods: {
      async getRecommendations() {
        this.isLoading = true;
        try {
          const result = await getUserTags(this.steam64Id);
          if (result.message) {
            this.errorMessage = result.message;
            this.userTags = [];
          } else {
            this.errorMessage = "";
            this.userTags = result.tags;
          }
        } finally {
          this.isLoading = false;
        }
      },
    },
  };
  </script>
  