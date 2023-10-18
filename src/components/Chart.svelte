<script>
    export let data = [];
    export let menu = '';

    console.log(data)
    console.log(menu)
</script>

<!-- HTML -->
<div id="names">
    {#each data as d} 
        <p class={d.person_state}>{d.name}</p>
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
        justify-content: space-around;
        overflow-y: scroll;
    }
    #names p {
        margin: 3px 5px;
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
