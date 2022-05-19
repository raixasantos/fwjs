<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let selection: number;
    const dispatcher = createEventDispatcher();
    function onClicked(index: number) {
        dispatcher("selection", index);
    }

    export let options: string[] = [];
</script>

<div>
    {#each options as option, index (option)}
        <button
            class={index === selection ? "selected" : ""}
            on:click={(e) => onClicked(index)}
        >
            {option}
        </button>
    {/each}
</div>

<style>
    div {
        float: left;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    button {
        padding: 5px;
    }

    .selected {
        font-weight: bold;
        background-color: #aaa;
    }
</style>
