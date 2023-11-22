<template>
  <div class="home">
    <div class="hero">
      <h1 class="title">SaltedGames</h1>
      <p class="subtitle">Ontdek en deel je favoriete games</p>
      <router-link to="/mijn-games" class="explore-button">Mijn Spellen</router-link>
    </div>
    <div class="features">
      <div class="feature">
        <i class="fas fa-search"></i>
        <h2>Zoeken</h2>
        <p>Vind eenvoudig je favoriete games met onze krachtige zoekfunctie.</p>
      </div>
      <div class="feature">
        <i class="fas fa-users"></i>
        <h2>Gemeenschap</h2>
        <p>Sluit je aan bij onze gemeenschap en deel je game-ervaringen met anderen.</p>
      </div>
      <div class="feature">
        <i class="fas fa-chart-line"></i>
        <h2>Trending</h2>
        <p>Blijf op de hoogte van de nieuwste en populairste games.</p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "HomeComponent",
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

body, html {
  margin: 0;
  padding: 0;
}

.home {
  height: 100vh; /* Ensure it fills the full viewport height */
  text-align: center;
  padding: 2rem;
  background-color: #191d32;
  
}

.hero {
  background-image: url('../assets/images/background_hero.png');
  background-size: cover; 
  background-repeat: no-repeat; 
  color: white;
  padding: 4rem;
  border-radius: 5px;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.explore-button {
  background-color: #759aab;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.explore-button:hover {
  background-color: #ff6600;
  transform: scale(1.05);
}

.features {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 3rem;
}

.feature {
  flex: 1;
  padding: 1rem;
  transition: transform 0.3s ease;
  background-color: #21263b; 
  border: 1px solid white; 
  max-width: 300px;
}

.feature:hover {
  transform: scale(1.05);
}

.feature i {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white; /* Set icon color to white */
}

.feature h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white; /* Set text color to white */
}

.feature p {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: white; /* Set text color to white */
}
</style>
