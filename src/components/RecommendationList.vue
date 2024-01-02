<template>
  <div>
    <ul class="games-list">
      <li v-for="game in games" :key="game.sid" class="game-item">
        <h3>{{ game.name }}</h3>
        <p>Price: ${{ game.full_price / 100}}</p>
        <p>Developers: {{ game.developers }}</p>
        <p>Publishers: {{ game.publishers }}</p>
        <p>Tags: {{ game.tags }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    games: Array,
    currentPage: Number,
    totalPages: Number,
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('prevPage');
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('nextPage');
      }
    },
  },
};
</script>

<style scoped>

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
  max-height: 300px; /* Adjust the maximum height as needed */
  padding: 1rem;
  transition: transform 0.3s ease;
  flex: 1 0 calc(33.33% - 2rem); /* Adjust the width as needed */
  overflow: hidden;
}
li.game-item:hover {
  overflow-y: auto; /* Show the scrollbar on hover */
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


/* Media query to adjust layout for smaller screens */
@media (max-width: 768px) {
  ul.games-list {
    flex-direction: column;
    align-items: center;
  }

  li.game-item {
    width: 100%; /* Full width for smaller screens */
  }
}
</style>
