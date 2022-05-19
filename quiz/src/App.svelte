<script lang="ts">
	import Tab from "../src/components/Tab/Tab.svelte"

	const buttonsOptions = ["Tab1", "Tab2", "Tab3", "Tab4"];
    const texts = [
        "Texto da Tab1",
        "Texto da Tab2",
        "Texto da Tab3",
        "Texto da Tab4",
    ];
</script>

<main>
	<Tab options={buttonsOptions} texts={texts}/>
</main>

<style>
</style>