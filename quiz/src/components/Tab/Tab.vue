<template>
    <div>
        <Nav
            :options="options"
            :selection="currentButton"
            @on-selection="select"
        />
        <Panel
            :text="texts[currentButton]"
        />
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
    div {
        display: flex;
        flex-direction: column;
        max-width: fit-content;
      }
</style>