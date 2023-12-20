<template>
  <div>
    <search-bar @search="onSearch"></search-bar>
    <games-list :games="filteredGames" :currentPage="currentPage" :totalPages="totalPages" @prevPage="prevPage"
      @nextPage="nextPage"></games-list>
  </div>
</template>

<script>

import GamesList from "@/components/GamesList.vue";
import SearchBar from "@/components/SearchBar.vue";
import { searchGamesByName, getAllGames } from "@/services/GetGames.js";

export default {
  components: {
    GamesList,
    SearchBar,
  },
  data() {
    return {
      games: [],
      currentPage: 1,
      pageSize: 10,
      totalGames: 0,
      searchQuery: '',
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalGames / this.pageSize);
    },
    filteredGames() {
      const query = this.searchQuery.toLowerCase();
      if (!query) {
        return this.games;
      }
      return this.games.filter(game => game.name.toLowerCase().includes(query));
    },
  },
  methods: {
    async fetchGames() {
      try {
        const response = await getAllGames(this.currentPage, this.pageSize);
        if (response && response.games && response.total) {
          this.games = response.games;
          this.totalGames = response.total;
        } else {
          console.error('Invalid response data:', response);
        }
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    },
    async onSearch(query) {
    this.searchQuery = query;
    try {
      if (query.trim() === '') {
        // Als de zoekquery leeg is, haal alle games op met getAllGames
        await this.fetchGames();
      } else {
        const response = await searchGamesByName(query);
        if (response) {
          this.games = response;
        } else {
          console.error('Invalid response data:', response);
        }
      }
    } catch (error) {
      console.error("Error searching games:", error);
    }
  },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchGames();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchGames();
      }
    },
  },
  mounted() {
    this.fetchGames();
  },
};
</script>

<style scoped>
/* Add your component's styles here */

/* Container style */
div {
  text-align: center;
  padding: 2rem;
  background-color: #191d32;
}

/* Header style */
h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* List style */
ul.games-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li.game-item {
  margin: 1rem;
  background-color: #21263b;
  border: 1px solid white;
  min-height: 300px;
  max-width: 400px;
  max-height: 300px;
  /* Adjust the maximum height as needed */
  padding: 1rem;
  transition: transform 0.3s ease;
  flex: 1 0 calc(33.33% - 2rem);
  /* Adjust the width as needed */
  overflow: hidden;
}

li.game-item:hover {
  overflow-y: auto;
  /* Show the scrollbar on hover */
}

li:hover {
  transform: scale(1.05);
}

/* Game name style */
h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Paragraph style */
p {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: white;
}

/* Pagination style */
.pagination {
  margin-top: 2rem;
}

button {
  background-color: #759aab;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
}

button:disabled {
  background-color: #666;
  cursor: not-allowed;
}

button:hover {
  background-color: #ff6600;
  transform: scale(1.05);
}

span {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: white;
}

/* Media query to adjust layout for smaller screens */
@media (max-width: 768px) {
  ul.games-list {
    flex-direction: column;
    align-items: center;
  }

  li.game-item {
    width: 100%;
    /* Full width for smaller screens */
  }
}</style>
