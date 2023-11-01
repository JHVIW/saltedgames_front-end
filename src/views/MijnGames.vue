<template>
  <div class="parent-background">
    <SteamIdInputComponent @gamesFetched="updateGames">
      <MessageComponent :message="message" />
      <GamesListComponent :games="games" />
    </SteamIdInputComponent>
  </div>
</template>
  
<script>
import MessageComponent from '../components/MessageComponent.vue';
import GamesListComponent from '../components/GamesListComponent.vue';
import SteamIdInputComponent from '../components/SteamIdInputComponent.vue';

export default {
  components: {
    MessageComponent,
    SteamIdInputComponent,
    GamesListComponent
  },
  data() {
    return {
      games: [],
      message: ""
    };
  },
  methods: {
    updateGames(result) {
      this.games = result.games;
      this.message = result.message;
    }
  }
}
</script>

<style>
.parent-background {
  background-color: #191d32;
  min-height: 100vh;
}
</style>