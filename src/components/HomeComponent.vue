<template>
    <div class="home">
      <div class="hero">
        <h1 class="title">Welkom bij SaltedGames</h1>
        <p class="subtitle">Ontdek en deel je favoriete games</p>
        <router-link to="/mijn-games" class="explore-button">Verken Spellen</router-link>
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
  .home {
    text-align: center;
    padding: 2rem;
  }
  
  .hero {
    background-color: #007BFF;
    color: white;
    padding: 4rem;
    border-radius: 5px;
  }
  
  .title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .explore-button {
    background-color: #ff9900;
    color: white;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
  }
  
  .explore-button:hover {
    background-color: #ff6600;
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
  }
  
  .feature i {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .feature h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .feature p {
    font-size: 1rem;
  }
  </style>
  