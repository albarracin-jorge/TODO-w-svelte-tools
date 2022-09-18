<script>
  import './assets/App.css'
  import {tweened} from 'svelte/motion'
  import Todo from './lib/Todo.svelte'
  import {data} from './store'
  import {progress} from './writable'
</script>

<main>
  <header>
    <h1>TODOS</h1>
    <progress value={$progress}></progress>
  </header>
  <section>
    {#each data as value}
      <Todo
        name={value.name}
        description={value.description}
      />    
    {/each}  
  </section>
</main>

<style>
  header{
    width: 100%;
    height: 15vh;
    background-color: var(--color-secondary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1{
    margin: 0 0 1em 0;
    color: var(--color-bg)
  }

  progress{
    padding: 1em;
    width: 60%;
  }

  section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>