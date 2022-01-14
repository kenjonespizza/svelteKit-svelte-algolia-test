<script>
  export let hit
</script>

<h2>{@html hit.name}</h2>

<div>
 <p>... all I pulled is the 'name'</p>
</div>

<style>
  /* highlights text matching the search string */
  :global(em) {
    color: darkcyan;
    line-height: 1.2em;
    border-radius: 3pt;
    font-style: normal;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
</style>