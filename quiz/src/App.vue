<script setup lang="ts">
import Tab, { type TabProps } from './components/Tab/Tab.vue'
import TabForm from './components/Tab/TabForm.vue'

  const buttonsOptions: TabProps = ["Tab1", "Tab2", "Tab3", "Tab4"]
  const texts: TabProps = ["Texto da Tab1", "Texto da Tab2", "Texto da Tab3", "Texto da Tab4"]
</script>


<template>
  <div class="container-page">
    <div class="container-tabs">
      <TabForm />
    </div>
    <div class="container-content">
      <Tab :options="buttonsOptions" :texts="texts"></Tab>
    </div>    
  </div>
</template>

<style>
@import './assets/base.css';

.container-page {
  display: flex;
  font-family: 'Lato', sans-serif;
}

.container-tabs,
.container-content {
  margin: 30px;
}
</style>
