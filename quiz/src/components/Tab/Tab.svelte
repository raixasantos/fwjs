<script lang="ts">
    import Nav from "./Nav.svelte";
    import Panel from "./Panel.svelte";

    const buttonsOptions = ["Tab1", "Tab2", "Tab3", "Tab4"];
    const texts = [
        "Texto da Tab1",
        "Texto da Tab2",
        "Texto da Tab3",
        "Texto da Tab4",
    ];
    let currentButton = 0;
    function select(buttonIndex: number) {
        this.currentButton = buttonIndex;
    }
    function onSelection(option) {
        currentButton = option;
    }
</script>

<div>
    <Nav options={buttonsOptions} selection={currentButton} on:selection={(e) => onSelection(e.detail)} />
    <Panel text={texts[currentButton]} />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        max-width: fit-content;
    }
</style>
