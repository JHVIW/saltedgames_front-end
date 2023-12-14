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
    margin: 0 auto;
    text-align: center;
    max-width: 800px;
    padding: 2rem;
    background-color: #191d32;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    font-family: 'Arial', sans-serif;
    color: white;
  }
  
  .center-button,
  h2,
  .game-list {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s forwards;
    animation-delay: 0.3s;
  }
  
  .center-button {
    animation-delay: 0.4s;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  .game-list {
    animation-delay: 0.6s;
  }
  
  .game-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 0.5rem 0;
    background-color: #21263b;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    color: white;
  }
  
  .game-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.12);
  }
  
  .game-info {
    flex: 1;
    text-align: left;
  }
  
  .game-name {
    font-size: 1.4rem;
    font-weight: bold;
  }
  
  .playtime {
    font-size: 1.2rem;
    color: white;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  button:hover {
    background-color: #0056b3;
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.2);
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
  
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .list-enter-active,
  .list-leave-active {
    transition: transform 0.5s;
  }
  
  .list-enter,
  .list-leave-to {
    transform: translateX(10px);
  }
  </style>