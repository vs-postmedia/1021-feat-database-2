<script>
    export let data = [];
    export let menu = '';

    console.log(data)
    console.log(menu)
</script>

<h2></h2>

<!-- <pre>CHART: Combobox value = {menu || 'No selection'}</pre> -->

<!-- <h3 id="names-header">These are the names of all the missing people and unsolved murder victims in British Columbia...</h3> -->
<div id="names">
    {#each data as d} 
        <p class={d.sex}>{d.name}</p>
    {/each}
</div>

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

    #names p.male {
        color: #009775;
    }
    #names p.female {
        color: #9b3f86;
    }
    #names p.other {
        color: #898B8E;
    }
</style>
