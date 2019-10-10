<template>
  <div>
    <background />
    <magicHeader />
    <router-view />
  </div>
</template>
<script>
import magicHeader from "./components/Header.vue";
import background from "./components/Background.vue";
export default {
  components: {
    magicHeader,
    background
  }
};
</script>

<style>
</style>