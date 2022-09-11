<script>
  export let name;
  export let description;
</script>

<div>
  <h3>{name}</h3>
  <p>{description}</p>
  <button>Done</button>
  <button>Delete</button>
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

  p{
    padding: 1em
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