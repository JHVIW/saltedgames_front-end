<template>
  <div>
    <div class="header-container">
      <router-link to="/home" style="text-decoration: none;">
        <h1 class="header">SaltedGames</h1>
      </router-link>
      <form action="https://steamcommunity.com/openid/login" method="post" class="steam-login-form">
        <input type="hidden" name="openid.identity" value="http://specs.openid.net/auth/2.0/identifier_select" />
        <input type="hidden" name="openid.claimed_id" value="http://specs.openid.net/auth/2.0/identifier_select" />
        <input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0" />
        <input type="hidden" name="openid.mode" value="checkid_setup" />
        <input type="hidden" name="openid.realm" value="http://localhost:8080/" />
        <input type="hidden" name="openid.return_to" value="http://localhost:8080/" />
        <button type="submit" class="steam-login-btn">
          <img src="../assets/login_logo.png" alt="Login" />
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.header {
  font-size: 2.5rem;
  color: #007BFF;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Helvetica Neue', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0;
}


.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 2px solid #007BFF;
}

.header-container router-link {
  text-decoration: none;
}

.steam-login-form {
  text-align: center;
  margin: 0;
}

.steam-login-btn {
  border: none;
  cursor: pointer;
  background: none;
}

.steam-login-btn img {
  height: 40px;
  width: auto;
}
</style>
