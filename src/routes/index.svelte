<script>
  import Search from 'svelte-algolia'
  import PokemonHit from '$lib/components/PokemonHit.svelte'

  const appId = import.meta.env.VITE_ALGOLIA_APP_ID
  const searchKey = import.meta.env.VITE_ALGOLIA_SEARCH_KEY
</script>

<h1>Welcome to Svelte-Algolia on SvelteKit</h1>
<p>Use the input below to search</p>

<Search
  {appId}
  {searchKey}
  indices={{ Pokedex: PokemonHit }}
  placeholder="Search Pokedex" />


