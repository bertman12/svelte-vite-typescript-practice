<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import Home from './Home.svelte';
    import {adminNames} from './MainStore.js';
    let items:any = [];
    adminNames.subscribe(data => items.push(data));
    //Props
    export let magicNumber: number = 5;
    interface User{
        name: string, 
        occupation: string,
        age: string
    }
    
	const dispatch = createEventDispatcher();

	function clickYes() {
		dispatch('yes', {data: adminInput});
	}

	function clickNo() {
		dispatch('no');
	}

    function onClear(){
        adminInput = '';
    }

    const list: User[] = [
        {
            name: 'Rick',
            age: '25',
            occupation: 'Software Developer'
        },
        {
            name: 'Jenny',
            age: '40',
            occupation: 'Software Developer'
        },
        {
            name: 'Hubert',
            age: '100',
            occupation: 'Senior Software Developer'
        },
    ];
    
    let adminInput: any = "Welcome Admin!";
    onMount( () => {
        console.log(adminInput);
        console.log(radio);
        
    });
    
    let selection = 'user-choice';
    let radio: HTMLInputElement;
    
</script>

<main>
    <!-- {#if true === false} -->
        
    {#each items as item }
        <p>{JSON.stringify(item)}</p>
    {/each}
    <p>Store Ref: {JSON.stringify($adminNames)}</p>

    <button on:click={clickYes}> YES </button>
    <button on:click={clickNo}> NO </button>
    <button style="background-color: red ; border: 5px dashed; font-weight:100; padding: 10px; margin: 5px;" on:click={onClear}> Clear </button>
    
    <input bind:value={adminInput} type="text" placeholder="Enter something!" />

    <input type="radio" bind:group={selection} value="blue" bind:this={radio}>
    <input type="radio" bind:group={selection} value="red">

    <h1 class="bg-red-500">Magic Number: {magicNumber}</h1>
    
    {#each list as user}
        <hr>
        <li>{user.name}</li>        
        <li>{user.age}</li>        
        <li>{user.occupation}</li>       
        <hr> 
    {/each}

    {#each list as user }
        <p>{user}</p>
    {/each}
    <button class="btn">TESTING</button>
    <button class="btn">TESTING</button>
    <button class="btn">TESTING</button>
    <!-- {:else} -->

    <!-- <Home></Home> -->
    <!-- {/if} -->
</main>

<style>

</style>