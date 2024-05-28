<script lang="ts">
  let todos: Array<{ text: string; completed: boolean }> = [];
  let text = "";
</script>

<form
  on:submit={(e) => {
    e.preventDefault();
    todos = [{ text, completed: false }, ...todos];
    text = "";
  }}
>
  <input bind:value={text} />
</form>

<ul>
  {#each todos as todo (todo.text)}
    <li>{todo.text}</li>
  {/each}
</ul>

<style>
</style>
