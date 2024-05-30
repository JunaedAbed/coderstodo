<script lang="ts">
  import { onMount } from "svelte";

  let todos: Array<{ text: string; completed: boolean }> = [];
  let text = "";
  onMount(() => {
    // Handle messages sent from the extension to the webview
    window.addEventListener("message", (event) => {
      const message = event.data; // The json data that the extension sent
      console.log({ message });
      switch (message.type) {
        case "new-todo":
          // Split the message.value by \r\n, \n, or \r
          const lines = message.value
            .split(/\r?\n|\r/)
            .filter((line: string) => line.trim() !== "");

          lines.forEach((line: string) => {
            todos = [{ text: line, completed: false }, ...todos];
          });
          break;
      }
    });
  });
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
  {#each todos as todo, index (index)}
    <li>
      <button
        type="button"
        class="list-button"
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

<!-- svelte-ignore missing-declaration -->
<button
  on:click={() => {
    vscodeapi.postMessage({
      type: "onInfo",
      value: "info message",
    });
  }}
  >Click Me
</button>

<!-- svelte-ignore missing-declaration -->
<button
  on:click={() => {
    vscodeapi.postMessage({
      type: "onError",
      value: "info message",
    });
  }}
  >Click Me
</button>

<style>
  .complete {
    text-decoration: line-through;
  }

  .list-button {
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

  .list-button:focus {
    outline: none;
  }

  .list-button.complete {
    color: grey;
  }
</style>
