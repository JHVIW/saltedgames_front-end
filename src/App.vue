<template>
  <div>
    <HeaderComponent />
    <router-view />

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent,
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
