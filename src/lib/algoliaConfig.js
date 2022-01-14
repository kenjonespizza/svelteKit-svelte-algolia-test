import 'dotenv/config' // optional
import axios from 'axios'

async function loadPokedex() {
	const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/');
	const pokemans = data.results.map((el) => ({ ...el, id: el.name }))
  return pokemans
}

export const algoliaConfig = {
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_ADMIN_KEY,
  indices: [
    { name: `Pokedex`, getData: loadPokedex },
  ],
  settings: {
    attributesToHighlight: [`name`],
  },
}