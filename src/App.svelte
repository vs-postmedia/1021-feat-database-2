<script>
    // COMPONENTS
    import { onMount } from 'svelte';
    import { csvParse } from 'd3-dsv';
    import Chart from "$components/Chart.svelte";
    import Select from "svelte-select"; // https://github.com/rob-balfre/svelte-select

    // DATA
    import { menuItems } from "$data/menu-items";
    const dataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/midnight-order-mmd/db-output.csv';

    // VARIABLES
    let city, data, value, sortedMenuItems, person, status, pronoun, year;

    // REACTIVE VARIABLES
    $: value, updateData(value);

    function handleClickEvent(e) {
        updateData(e.detail);
    }

    function updateData(selector) {
        if (!selector || !selector.value) return;

        // filter for our selected person
        person = data.filter(d => d.id === selector.value)[0];
        
        // tidy up the text...
        if (person.person_state === 'missing') {
            status = 'last seen';
        } else if (person.person_state === 'deceased') {
            status = 'found dead';
        }

        if (person.location_last_seen_suburb === 'unknown'.toLowerCase()) {
            city = 'an unknown location';
        } else if (person.location_last_seen_suburb === 'NA') {
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
    }

    onMount(init);
</script>

<header>
    <h1>B.C.’s 1,725 <span class="missing">missing people</span> and  <span class="deceased">unsolved murders</span> in the Midnight Order database</h1>
    <!-- <p class="subhead">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
</header>

<main>
    <Select items={sortedMenuItems}
        bind:value
        change={updateData}
        placeholder="Search for a person..."
		showChevron="true"
		listOpen={false}
    />

    {#if person}
        <p id="descriptor">{person.name} was {status} in {city} {year}. {pronoun} was {person.age} years old.</p>
    {/if}
    
    <Chart 
        bind:value
        on:event={handleClickEvent}
        data={data}
        menu={value}
    />
</main>

<footer>
    <p class="note">If you know of someone that should be included in the database, please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBbrOu7zBvVcdeoOj1Idi1lnaLyIMMwoPn4FtePNNgDL5-FA/viewform" target="_blank">this form</a>.</p>
    <p class="note">Questions, corrections and comments should be sent to <a href="mailto:Midnightordermmd@gmail.com" target="_blank">midnightordermmd@gmail.com</a>.</p>
    <p class="source">Source: Midnight Order</p>
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
        margin: 25px auto;
        max-width: 90%;
        text-align: center;
    }
    :global(.deceased) {
        color: #009775;
    }
    :global(.missing) {
        color: #9b3f86;
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
