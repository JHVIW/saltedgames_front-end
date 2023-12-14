<template>
  <div class="home">
    <div class="input-container">
      <br>
    </div>
    <div v-if="isLoading" class="loading-spinner">
      <div class="spinner"></div>
      Loading...
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { getGames } from '@/services/GetGames.js';
import store from '@/services/store.js';

export default {
  data() {
    return {
      steam64Id: store.state.steamId || "",
      isLoading: false,
    };
  },
  methods: {
    async getGames() {
      this.isLoading = true;
      try {
        const result = await getGames(this.steam64Id);
        this.$emit('gamesFetched', result); // Emit an event when games are fetched
      } finally {
        this.isLoading = false;
      }
    }
  },
  watch: {
    'store.state.steamId'(newSteamId) {
      this.steam64Id = newSteamId; // Update steam64Id when store state changes
      this.getGames(); // Call getGames method when steamId changes
    },
  },
  created() {
    this.getGames(); // Call getGames method when the component is created
  },
};
</script>


<style scoped>
.home {
  text-align: center;
  padding: 2rem;
  background-color: #191d32;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  background-color: #191d32;
}

.loading-spinner {
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
  color: #759aab;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #759aab;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite; 
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.input-field {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid #759aab;
  border-radius: 5px;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease-in-out;
}

.input-field:focus {
  outline: none;
}

.action-button {
  padding: 0.5rem 1rem;
  background-color: #759aab;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;
}

.action-button:hover {
  background-color: #0056b3;
}
</style>
