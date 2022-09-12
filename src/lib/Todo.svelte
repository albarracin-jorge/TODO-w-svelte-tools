<script>
  import {tweened} from 'svelte/motion'
  import {progress} from '../writable'

  export let name;
  export let description;

  let progressValue = progress;
  
  function addProgress(){
    progressValue+=0.25;
    if(progressValue > 1) progressValue = 1;
    console.log(progressValue); 
    return progressValue;
  }

  function restProgress(){
    progressValue-=0.25;
    if(progressValue < 0) progressValue = 0;
    console.log(progressValue); 
    return progressValue;
  }

  const progressChange = tweened(progressValue, {
    duration: 200
  });
</script>

<div>
  <h3>{name}</h3>
  <p>{description}</p>
  <button on:click={()=>{
    progress.set(addProgress())
  }}>Done</button>
  <button on:click={()=>{
    progress.set(restProgress())
  }}>Delete</button>
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