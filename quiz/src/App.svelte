<script lang="ts">
	import Tab from "../src/components/Tab/Tab.svelte"
    import TabsForm from "../src/components/Tab/TabsForm.svelte"

	const buttonsOptions = ["Tab1", "Tab2", "Tab3", "Tab4"];
    const texts = [
        "Texto da Tab1",
        "Texto da Tab2",
        "Texto da Tab3",
        "Texto da Tab4",
    ];
</script>

<div class="container-page">
    <div class="container-tabs">
        <TabsForm />
    </div>
    <div class="container-content">
        <Tab options={buttonsOptions} texts={texts}/>
    </div>
</div>

<style>
    body {
        text-align: center;
    }
    
    .container-page {
        display: flex;
        font-family: 'Lato', sans-serif;
    }
    
    .container-tabs,
    .container-content {
        margin: 30px;
    }
</style>