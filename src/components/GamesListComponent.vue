<template>
  <div v-if="games.length > 0" class="center-container">
    <div class="center-button">
      <button @click="sortGamesByPlaytime(games)">Sort by Playtime</button>
    </div>
    <h2>Games:</h2>
    <ul class="game-list">
      <li v-for="game in filteredGames" :key="game.steamAppID" class="game-item">
        <div class="game-info">
          <div class="game-name">{{ game.gameName }}</div>
          <div class="playtime">{{ convertMinutesToHours(game.playtime) }} hours</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { convertMinutesToHours, sortGamesByPlaytime } from '@/services/GetGames';

export default {
  props: {
    games: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    filteredGames() {
      return this.games.filter(game => game.gameName && game.gameName.trim() !== '');
    }
  },
  methods: {
    convertMinutesToHours,
    sortGamesByPlaytime
  }
};
</script>

<style scoped>
.center-container {
  text-align: center;
  margin: 2rem auto;
  max-width: 800px;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-in-out;
  font-family: 'Arial', sans-serif; /* Use your preferred font */
}

.center-button {
  text-align: center;
  margin-top: 1rem;
}

h2 {
  font-size: 2rem;
  color: #333;
}

.game-list {
  list-style: none;
  padding: 0;
}

.game-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.game-item:hover {
  transform: scale(1.02);
}

.game-info {
  flex: 1;
  text-align: left;
}

.game-name {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
}

.playtime {
  font-size: 1.2rem;
  color: #666;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #0056b3;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
