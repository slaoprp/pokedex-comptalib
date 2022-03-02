import { Module, VuexModule, Action } from 'vuex-module-decorators'
import axios from "axios"

@Module
export default class Pokemon extends VuexModule {
  pokemons: Array<object>
  loading: boolean = true
  limit: number = 100
  offset: number = 200
  get loadPokemons() {
    return this.pokemons
  }

@Action
async getPokemons(link: string) {
  const pokemonsArray: any = [];
    try {
      const pokemons = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`
      );
      pokemons.data.results.forEach(async (item: any) => {
        const responseImg = await axios.get(item.url);
        const image = {
          img: responseImg.data.sprites.other["official-artwork"].front_default,
        };
        const pokemon = Object.assign(item, image);
        pokemonsArray.push(pokemon);
      });

      this.context.commit('getPokemon', pokemonsArray)
      this.loading = false;
    } catch (err) {
      console.log(err);
      this.loading = false;
    }
  }  
}

