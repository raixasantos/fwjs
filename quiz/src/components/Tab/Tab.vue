<template>
    <div class="container-tab">
        <h2>Conteúdo</h2>
        <div class="container-tabcontent">
            <Nav
                :options="options"
                :selection="currentButton"
                @on-selection="select"
            />
            <Panel
                :text="texts[currentButton]"
            />
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import Panel, { type PanelProps } from './Panel.vue'
import Nav, { type NavProps} from './Nav.vue'

export interface TabProps {
    options: string[]
    texts: string[]
}

defineProps<TabProps>()

const currentButton =  ref(0)

function select(buttonIndex: number) {
    currentButton.value = buttonIndex
}

</script>

<style scoped>    
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