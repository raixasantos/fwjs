<script setup lang="ts">
import Quiz from './components/Quiz.vue'
import Tab, { type TabProps } from './components/Tab/Tab.vue'

  const buttonsOptions: TabProps = ["Tab1", "Tab2", "Tab3", "Tab4"]
  const texts: TabProps = ["Texto da Tab1", "Texto da Tab2", "Texto da Tab3", "Texto da Tab4"]
</script>


<template>
  <!-- <Quiz></Quiz> -->
  <Tab :options="buttonsOptions" :texts="texts"></Tab>
</template>

<style>
@import './assets/base.css';
</style>
