<script>
    export let data = [];
    export let menu = '';
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();


    console.log(data)
    console.log(menu)

    function handleClick(e) {
       dispatch('event', {value: e.target.getAttribute('data-id')});
    }
</script>

<!-- HTML -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="names" on:click={handleClick}>
    {#each data as d} 
        <p class={d.person_state} data-id={d.id}>{d.name}</p>
    {/each}
</div>

<!-- CSS -->
<style>
    #names-header {
        line-height: 1.3;
        margin-bottom: 10px;
    }
    #names {
        display: flex;
        flex-wrap: wrap;
        height: 400px;
        justify-content: space-between;
        overflow-y: scroll;
        padding: 0 3px;
    }
    #names p {
        cursor: pointer;
        margin: 3px 0;
    }

    #names p.deceased {
        color: #009775;
    }
    #names p.missing {
        color: #9b3f86;
    }
    #names p.unknown {
        color: #898B8E;
    }
</style>
