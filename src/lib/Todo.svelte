<script>
  import {progress, taskAverage} from '../writable'

  export let name;
  export let description;

  let progressValue = progress;

  const addProgress = ()=>{
    $progress += $taskAverage;
    if($progress > 1) $progress = 1;
  }

  const restProgress = ()=>{
    $progress -= $taskAverage;
    if($progress < 0) $progress = 0;
  }
</script>

<div>
  <h3>{name}</h3>
  <p>{description}</p>
  <button on:click={addProgress}>Done</button>
  <button on:click={restProgress}>Delete</button>
</div>

<style>
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    border: solid 1px var(--color-primary);
    width: 50vw;
    background-color: #1f1f1f;
  }

  h3{
    margin-bottom: 0;
  }

  p{
    padding: .5em 1em 1em 1em
  }

  button{
    margin: 0 0 1em 0;
    width: 7em;
    padding: .5em;
    background-color: var(--color-primary);
    color: var(--color-font)
  }

  button:hover{
    background-color: #764ede;
    cursor: pointer;
  }

  button:active{
    background-color: #6442bd;
  }
</style>