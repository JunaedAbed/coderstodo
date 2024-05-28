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
    <li>
      <button
        class:complete={todo.completed}
        on:click={() => {
          todo.completed = !todo.completed;
        }}
      >
        {todo.text}
      </button>
    </li>
  {/each}
</ul>

<style>
  .complete {
    text-decoration: line-through;
  }
</style>
