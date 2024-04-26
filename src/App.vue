<script setup>
import Home from './components/Home.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<main>
  <Suspense>
    <template #default>
      <RouterView/>
    </template>
    <template #fallback>
      <div>
        <p>Loading...</p>
      </div>
    </template>
  </Suspense>
</main>
</template>
