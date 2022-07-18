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

<div class="container-tab">
    <h2>Conteúdo</h2>
    <div class="container-tabcontent">
        <Nav options={options} selection={currentButton} on:selection={(e) => onSelection(e.detail)} />
        <Panel text={texts[currentButton]} />
    </div>
</div>

<style>
    .container-tab {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
        min-width: 400px;
    }

    .container-tabcontent {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
</style>
