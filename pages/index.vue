<template>
  <main class="pokedex-list">
    <div
      class="card"
      v-for="pokemon in pokemons"
      :key="pokemon.name"
    >
      <figure class="card-figure">
        <img
          :src="pokemon.img"
          :alt="pokemon.name"
          width="215"
        >
      </figure>
      <span>{{ pokemon.name }}</span>
      <span>{{ pokemon.url }}</span>
    </div>
    <div v-if="loading">Loading ...</div>
    <div>{{loadPokemons}}</div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      pokemons: [],
      loading: true,
      limit: 100,
      offset: 200,
    };
  },
  computed: {
    loadPokemons: {
      get(): string {
        return this.$store.getters.loadPokemons;
      },
    },
  },
});
</script>

<style>
.pokedex-list {
  padding: 100px 40px 0px 40px;
  display: grid;
  grid-gap: 3rem 2rem;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
}

.card {
  background-color: #f2f2f2;
  overflow: hidden;
  position: relative;
}

.card:hover {
  animation: pokemon-up 0.3s;
  cursor: pointer;
}

.card:focus {
  outline: none;
}

.card .card-figure {
  text-align: center;
}

.card .card-figure img {
  position: relative;
  z-index: 1;
  transition: transform 0.3s;
}

.card:focus .card-figure img {
  transform: scale(0.6) translate(100px, -80px);
}

.card .card-description {
  background-color: #fff;
  margin: 0 1rem 1rem;
  padding: 0.5rem;
  transition: transform 0.3s;
}

.card:focus .card-description {
  transform: translateY(-160px);
}

.card .card-id {
  color: #919191;
}

.card .card-name {
  margin: 1rem 0 0.6rem;
  font-size: 1.5rem;
  font-weight: normal;
}

.card .card-types {
  display: flex;
}

.card .card-type {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  margin-right: 0.5rem;
  padding: 0.1rem 0.3rem;
  font-size: 0.8rem;
}

.card .card-stats {
  position: absolute;
  width: calc(100% - 2rem);
  margin: 0 1rem 1rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  background-color: #fff;
  transform: translatey(300px);
  transition: all 0.3s;
}

.card:focus .card-stats {
  transform: translatey(-180px);
}

.card .card-stats .stat-row {
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin: 0.5rem 0;
}

.card .card-stats .stat-bar {
  background-color: #a2a2a2;
}

.card .card-stats .stat-bar-bg {
  background-color: #212121;
  color: #fff;
  padding: 0 0.2rem;
}
.card .card-types {
  display: flex;
}

.card .card-type {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  margin-right: 0.5rem;
  padding: 0.1rem 0.3rem;
  font-size: 0.8rem;
}
</style>

