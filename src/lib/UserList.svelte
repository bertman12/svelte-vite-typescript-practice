<script lang="ts">
    interface User{
        name: string, 
        occupation: string,
        age: string
    }
	import { createEventDispatcher, onMount } from 'svelte';

    export let magicNumber: number = 5;
    
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
    <button on:click={clickYes}> YES </button>
    <button on:click={clickNo}> NO </button>
    <button style="background-color: red ; border: 5px dashed; font-weight:100; padding: 10px; margin: 5px;" on:click={onClear}> Clear </button>
    
    <input bind:value={adminInput} type="text" placeholder="Enter something!" />

    <input type="radio" bind:group={selection} value="blue" bind:this={radio}>
    <input type="radio" bind:group={selection} value="red">

    <h1>Magic Number: {magicNumber}</h1>
    
    {#each list as user}
        <hr>
        <li>{user.name}</li>        
        <li>{user.age}</li>        
        <li>{user.occupation}</li>       
        <hr> 
    {/each}
    
    <!-- <h1>Value is: {userInput}</h1> -->
</main>



<style>

</style>