<template>
    <div class="input-container">
        <input v-model="steam64Id" class="input-field" placeholder="Enter Steam64 ID" />
        <button @click="getGames" class="action-button">Get Games</button>
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
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
}

.input-field {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid #007BFF;
  border-radius: 5px;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease-in-out;
}

.input-field:focus {
  outline: none;
  border-color: #0056b3;
}

.action-button {
  padding: 0.5rem 1rem;
  background-color: #007BFF;
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

  