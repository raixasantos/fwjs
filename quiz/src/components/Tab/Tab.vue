<template>
    <div>
        <Nav
            :options="buttonsOptions"
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

const buttonsOptions: NavProps = ["Tab1", "Tab2", "Tab3", "Tab4"]
const texts = ["Texto da Tab1", "Texto da Tab2", "Texto da Tab3", "Texto da Tab4"]

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