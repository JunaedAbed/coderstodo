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
        type="button"
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

  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    text-align: left;
    width: 100%;
    outline: none;
    color: #ffffff;
  }

  button:focus {
    outline: none;
  }

  button.complete {
    color: grey;
  }
</style>
