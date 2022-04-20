<template>
    <div>
        <h2>{{text}}</h2>
    </div>
</template>

<script setup lang="ts">
    export interface PanelProps {
        text: string
    }

    defineProps<PanelProps>()
</script>

<style scoped>    
</style>