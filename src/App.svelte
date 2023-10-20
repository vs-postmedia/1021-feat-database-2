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
        person = data.filter(d => d.name.split(' ').pop().toLowerCase() === value.toLowerCase());

        // return if no results
        if (person.length < 1) return;

        prepDescriptionText(person);
    }
    
    function prepNameText(person) {
        return person.name;
    }

    function prepDescriptionText(person) {
        // dead/missing
        if (person.person_state === 'missing') {
            status = 'last seen';
        } else if (person.person_state === 'deceased') {
            status = 'found dead';
        }

        // city last seen
        if (person.location_last_seen_suburb === 'unknown'.toLowerCase()) {
            city = 'an unconfirmed location';
        } else if (person.location_last_seen_suburb === 'NA') {
            city = 'an unconfirmed location';
        } else {
            city = person.location_last_seen_suburb;
        }

        // year last seen
        if (person.year === 'NA') {
            year = 'on an unconfirmed date';
        } else {
            year = `in ${person.year}`;
        }

        // pronoun
        if (person.sex === 'male') {
            pronoun = 'He';
        } else if (person.sex === 'female') {
            pronoun = 'She';
        }

        // age
        if (person.age === 'Unknown') {
            age_known = false;
        } else {
            age_known = true;
        }

        // let's build some sentences!!!
        const p1 = `was ${status} in ${city} ${year}`
        const p2 = age_known ? `${pronoun} was ${person.age} years old` : '';
        const p3 = parseInt(person.year_last_seen) < parseInt(person.year) ? ` in ${person.year_last_seen} when ${pronoun.toLowerCase()} went missing` : '';
        
        return `${p1}. ${p2}${p3}.`.replace(/date\. \./g, 'date.');
    }

    async function fetchData(url) {
        const resp = await fetch(url);
        data = await resp.text();
        return csvParse(data);
    }

    async function init() {     
        // get the data
        data = await fetchData(dataUrl);
        // console.log(data[0])
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
        placeholder="Search by last name..."
        on:submit={() => returnResults(value)}
    />

    <div id="descriptor-block">
        <!-- svelte-ignore empty-block -->
        {#if !Array.isArray(person)}
        {:else if person.length === 0}
            <p class="descriptor">No one by that name was found in the database.</p>
        {:else if person.length > 0}
            {#each person as p}
                <p class="descriptor"><span class="bold">{prepNameText(p)}</span> {prepDescriptionText(p)}</p>
            {/each}
        {/if}
    </div>

    <h2>Stories from the missing and murdered database</h2>
    <iframe src='https://flo.uri.sh/visualisation/15410744/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:450px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/15410744/?utm_source=embed&utm_campaign=visualisation/15410744' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>
</main>

<footer>
    <p class="note">This is a “live” database and some information in subject to change. Researchers also included a few deaths, suicides and overdoses that appeared suspicious; all Indigenous murders, whether solved or unsolved, to help build a complete list of Indigenous victims in Canada; and victims of serial killers to allow for the study of patterns.</p>

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

    #descriptor-block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .descriptor {
        font-size: 1.2rem;
        line-height: 1.3;
        margin: 25px auto;
        max-width: 45%;
        text-align: center;
    }
    .descriptor > span {
        font-family: 'BentonSansCond-Bold', bold;
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
