<script lang="ts">
    import Nav from "./Nav.svelte";
    import Panel from "./Panel.svelte";

    export let options: string[] = [];
    export let texts: string[] = [];
    
    let currentButton = 0;
    function onSelection(option) {
        currentButton = option;
    }
</script>

<div>
    <Nav options={options} selection={currentButton} on:selection={(e) => onSelection(e.detail)} />
    <Panel text={texts[currentButton]} />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        max-width: fit-content;
    }
</style>
