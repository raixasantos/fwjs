<template>
    <div class="nav-menu">
        <button v-for="(option, index) in options" :key="option"
        :class="{ selected: index === selection }"
        @click="$emit('onSelection', index)">
        {{ option }}
        </button>
    </div>
</template>

<script setup lang="ts">
    export interface NavProps {
        options: string[] 
        selection?: number 
    }

    export interface NavEvents {
        (e: 'onSelection', val: number): void 
    }

    defineProps<NavProps>()
    defineEmits<NavEvents>()
</script>

<style scoped>    
.nav-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
}

button {
    margin-right: 10px;
    padding: 5px;
}

.selected {
    margin-right: 10px;
    font-weight: bold;
    background-color: #aaa;
}
</style>