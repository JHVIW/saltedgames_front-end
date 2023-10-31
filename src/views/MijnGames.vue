<template>
    <div>
        <SteamIdInputComponent @gamesFetched="updateGames" />
        <MessageComponent :message="message" />
        <GamesListComponent :games="games" />
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