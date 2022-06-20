<script lang=ts>
    export let count = 5;
    export let inc = 1;
    $: calculation = count + inc;

</script>

<main>
    <p>{calculation}</p>
</main>









