<script>
    // COMPONENTS
    import { onMount } from 'svelte';
    import { csvParse } from 'd3-dsv';
    import Example from "$components/Example.svelte";
    import Chart from "$components/Chart.svelte";
    import Select from "svelte-select"; // https://github.com/rob-balfre/svelte-select

    // DATA
    import { menuItems } from "$data/menu-items";
    const dataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/midnight-order-mmd/db-output.csv';

    // VARIABLES
    let city, data, value, sortedMenuItems, person, status, pronoun, year;
    // const defaultSelectValue = menuItems[0].value;

    // REACTIVE VARIABLES
    $: value, updateData(value);
    $: person;

    function updateData(selector) {
        if (!selector || !selector.value) return;

        console.log(selector);

        person = data.filter(d => d.id === selector.value)[0];
        console.log(person)
        
        if (person.person_state === 'missing') {
            status = 'last seen';
        } else if (person.person_state === 'deceased') {
            status = 'killed';
        }

        if (person.location_last_seen_suburb === 'unknown'.toLowerCase()) {
            city = 'an unknown location';
        } else {
            city = person.location_last_seen_suburb;
        }

        if (person.last_seen_year === 'Unknown') {
            year = 'at an unconfirmed date';
        } else {
            year = `in ${person.last_seen_year}`;
        }

        if (person.sex === 'male') {
            pronoun = 'He';
        } else if (person.sex === 'female') {
            pronoun = 'She';
        }
    }

    async function fetchData(url) {
        const resp = await fetch(url);
        data = await resp.text();
        return csvParse(data);
    }

    async function init() {
        console.log("INIT!");
        
        // get the data
        data = await fetchData(dataUrl);
        // console.log(data)

        // sort names 
        sortedMenuItems = menuItems.sort((a,b) => a.name_last.toLowerCase().localeCompare(b.name_last.toLowerCase()))

        // default display selector value
		// value = defaultSelectValue;
    }

    onMount(init);
</script>

<header>
    <h1>These are the names of all B.C.’s missing people and unsolved murder victims</h1>
    <!-- <p class="subhead">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
</header>

<main>
    <Select items={sortedMenuItems}
        bind:value
        change={updateData}
        placeholder="Search for a name..."
		showChevron="true"
		listOpen={false}
    />

    {#if person}
        <p id="descriptor">{person.name} was {status} in {city} {year}. {pronoun} was {person.age}.</p>
    {/if}
    
    <Chart 
        data={data}
        menu={value}
    />
</main>

<footer>
    <p class="note">NOTE: tk.</p>
    <p class="source">Source:  <a href="https:vancouversun.com" target="_blank">TK</a></p>
</footer>
  
<style>
    @import '$css/normalize.css';
    @import '$css/fonts.css';
    @import '$css/colors.css';
    @import '$css/app.css';

    header {
		margin-bottom: 2rem;
	}
	header > h1 {
        line-height: 1.1;
		text-align: center;
	}
	header .subhead {
		margin: 0 auto;
		max-width: 525px;
		text-align: center;
	}

    #descriptor {
        font-size: 1.6rem;
        line-height: 1.3;
        margin: 25px 0;
        text-align: center;
    }

    /* COMBOBOX SELECTOR */
  	:global(.svelte-select) {
		margin: 1rem auto !important;
		max-width: 325px;
  	}
  	:global(input:focus) {
		outline: none;
  	}

	:global(
		.svelte-select .selected-item,
		.svelte-select .item,
		.svelte-select input
	) {
		font-family: 'BentonSansCond-Regular', sans;
	}
</style>
