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
    div {
        text-align: center;
        border: 2px solid black;
        border-radius: 5px;
        padding: 50px 20px;
      }
</style>