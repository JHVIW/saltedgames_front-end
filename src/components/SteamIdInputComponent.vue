<template>
  <div class="home">
    <div class="input-container">
      <input v-model="steam64Id" class="input-field" placeholder="Enter Steam64 ID" />
      <button @click="getGames" class="action-button">Get Games</button>
      <br>
    </div>
    <slot></slot>
  </div>
</template>
  
  
<script>
import { getGames } from '@/services/GetGames.js';

export default {
  data() {
    return {
      steam64Id: ""
    };
  },
  methods: {
    async getGames() {
      const result = await getGames(this.steam64Id);
      this.$emit('gamesFetched', result);
    }
  }

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

  