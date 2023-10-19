<script>
    // COMPONENTS
    import { onMount } from 'svelte';
    import { csvParse } from 'd3-dsv';
    import Search from 'svelte-search'; // https://github.com/metonym/svelte-search

    // DATA
    const dataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/midnight-order-mmd/db-output.csv';

    // VARIABLES
    let age_known, city, data, value, sortedMenuItems, status, pronoun, year, person;

    // REACTIVE VARIABLES
    // $: value, returnResults(value);

    function returnResults(value) {
        // filter for our selected person
        person = data.filter(d => d.name.toLowerCase() === value.toLowerCase());

        // return if no results
        if (person.length < 1) return;

        // dead/missing
        if (person[0].person_state === 'missing') {
            status = 'last seen';
        } else if (person[0].person_state === 'deceased') {
            status = 'found dead';
        }

        // city last seen
        if (person[0].location_last_seen_suburb === 'unknown'.toLowerCase()) {
            city = 'an unconfirmed location';
        } else if (person[0].location_last_seen_suburb === 'NA') {
            city = 'an unconfirmed location';
        } else {
            city = person[0].location_last_seen_suburb;
        }

        // year last seen
        if (person[0].last_seen_year === 'Unknown') {
            year = 'on an unconfirmed date';
        } else {
            year = `in ${person[0].last_seen_year}`;
        }

        // pronoun
        if (person[0].sex === 'male') {
            pronoun = 'He';
        } else if (person[0].sex === 'female') {
            pronoun = 'She';
        }

        // age
        if (person[0].age === 'Unknown') {
            age_known = false;
        } else {
            age_known = true;
        }
    }

    async function fetchData(url) {
        const resp = await fetch(url);
        data = await resp.text();
        return csvParse(data);
    }

    async function init() {     
        // get the data
        data = await fetchData(dataUrl);
    }

    onMount(init);
</script>

<header>
    <h1>Search the Midnight Order database of missing people and unsolved deaths in B.C.</h1>
</header>

<main>
    <Search
        bind:value
        label=""
        placeholder="Enter a person’s full name..."
        on:submit={() => returnResults(value)}
    />

    <!-- svelte-ignore empty-block -->
    {#if !Array.isArray(person) }
    {:else if person.length === 0}
        <p class="descriptor">No one by that name was found in the database.</p>
    {:else if person.length > 0}
        <p class="descriptor">{person[0].name} was {status} in {city} {year}. {#if age_known} {pronoun} was {person[0].age} years old.{/if}</p>
    {/if}

    <h2>Stories from the missing and murdered database</h2>
    <iframe src='https://flo.uri.sh/visualisation/15410744/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:450px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/15410744/?utm_source=embed&utm_campaign=visualisation/15410744' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
</main>

<footer>
    <p class="note">Researchers also included a few deaths, suicides and overdoses that appeared suspicious; all Indigenous murders, whether solved or unsolved, to help build a complete list of Indigenous victims in Canada; and victims of serial killers to allow for the study of patterns.</p>

    <p class="note">If you know of someone that should be included in the database, please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBbrOu7zBvVcdeoOj1Idi1lnaLyIMMwoPn4FtePNNgDL5-FA/viewform" target="_blank">this form</a>. Questions, corrections and comments should be sent to <a href="mailto:Midnightordermmd@gmail.com" target="_blank">midnightordermmd@gmail.com</a>.</p>
   
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
        font-size: 1.8rem !important;
        line-height: 1.1;
		text-align: center;
	}
	header .subhead {
		margin: 0 auto;
		max-width: 525px;
		text-align: center;
	}

    .descriptor {
        font-size: 1.6rem;
        line-height: 1.3;
        margin: 25px auto;
        max-width: 90%;
        text-align: center;
    }

    #app main h2 {
        margin-top: 2rem;
    }

    :global([data-svelte-search] input) {
        width: 100%;
        font-size: 1rem;
        font-family: 'BentonSansCond-Regular', sans;
        padding: 0.5rem;
        max-width: 350px;
        margin: 0.5rem auto;
        display: block;
        border: 1px solid #e0e0e0;
        border-radius: 0.25rem;
    }
    
</style>
