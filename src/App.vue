<template>
  <div>
    <HeaderComponent />
    <SteamIdInputComponent @gamesFetched="updateGames" />
    <MessageComponent :message="message" />
    <GamesListComponent :games="games" />

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SteamIdInputComponent from './components/SteamIdInputComponent.vue';
import MessageComponent from './components/MessageComponent.vue';
import GamesListComponent from './components/GamesListComponent.vue';

export default {
  components: {
    HeaderComponent,
    SteamIdInputComponent,
    MessageComponent,
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

};
</script>
