<script>
  import './assets/App.css'
  import Todo from './lib/Todo.svelte'
  import {data} from './store'
</script>

<main>
  <header>
    <h1>TODOS</h1>
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
    justify-content: center;
    align-items: center;
  }

  h1{
    margin: 0;
    color: var(--color-bg)
  }

  section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>