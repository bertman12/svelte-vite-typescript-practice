<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import UserList from './lib/UserList.svelte'
  import Features from './lib/Features.svelte';
  import MaxValue from './lib/MaxValue.svelte';
  import './app.css';
  import {tweened} from 'svelte/motion';
  import { cubicOut} from 'svelte/easing';


  const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

  function handleYes(data){
    console.log('User clicked YES!');
    console.log(data.detail);
  }

  function handleNo(){
    console.log('User clicked NO!');
  }

</script>

<main>
  <progress value={$progress}></progress>
  <!-- <button on:click={() => $progress.set(1)} ></button> -->
  <button class="btn btn-success" on:click="{() => progress.set(1)}">
    100%
  </button>

  <MaxValue></MaxValue>

  <br>
  <Features></Features>

  <img src={logo} alt="Svelte Logo" />
  <h1>Hello Typescript!</h1>

  <Counter />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>

  <UserList on:yes={handleYes} on:no={handleNo} magicNumber={10}></UserList>

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
