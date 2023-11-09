<template>
  <div>
    <nav class="navbar">
      <div class="navbar-logo">
        <h1 class="header">
          <router-link to="/home" style="text-decoration: none;" class="salted-games-link">SaltedGames</router-link>
        </h1>
      </div>
        <button @click="loginViaSteam" class="steam-login-btn">
          <img src="../assets/logo/login_logo.png" alt="Login" />
        </button>
      <div class="navbar-links">
        <button class="hamburger-btn" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
      </div>
    </nav>
    <div v-if="isMenuOpen" class="menu">
      <router-link to="/home" style="text-decoration: none;" @click="toggleMenu">
        Home
      </router-link>
      <br>
      <router-link to="/mijn-games" style="text-decoration: none;" @click="toggleMenu">
        Mijn Games
      </router-link>
      <br>
      <router-link to="/all-games" style="text-decoration: none;" @click="toggleMenu">
        Alle Games
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  font-size: 2.5rem;
  background-color: #1C223D;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Helvetica Neue', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0;
}

.salted-games-link {
  color: white;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 2px solid #1C223D;
  background-color: #1C223D;
}

.navbar-logo {
  flex: 1;
  text-decoration: none;
}

.navbar-links {
  display: flex;
  align-items: center;
}

.navbar-links router-link {
  text-decoration: none;
  margin-right: 20px;
}

.steam-login-btn {
  outline: none;
  display: block;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
}

.menu {
  background-color: white;
  position: absolute;
  top: 70px;
  right: 10px;
  padding: 10px;
  border-radius: 5px;
}

.menu router-link {
  display: block;
  color: #fff;
  text-decoration: none;
  margin: 10px 0;
}
</style>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenuOnClickOutside(event) {
      // Controleer of het menu open is
      if (this.isMenuOpen) {
        // Verkrijg een referentie naar het menu en de hamburger button
        const menuElement = this.$el.querySelector('.menu');
        const hamburgerButton = this.$el.querySelector('.hamburger-btn');

        // Als de klik buiten het menu is en niet op de hamburger button, sluit het menu
        if (!menuElement.contains(event.target) && !hamburgerButton.contains(event.target)) {
          this.isMenuOpen = false;
        }
      }
    },
    loginViaSteam() {
    window.location.href = 'http://localhost:5124/Auth/login'; // Dit moet de URL zijn van je .NET Core API login endpoint
  },
  },
  
  mounted() {
    document.addEventListener("click", this.closeMenuOnClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeMenuOnClickOutside);
  },
  beforeRouteLeave(to, from, next) {
    this.isMenuOpen = false;
    next();
  },
  closeMenu() {
    this.isMenuOpen = false;
  },
};
</script>

