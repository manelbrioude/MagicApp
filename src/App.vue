<template>
  <div>
    <magicHeader />
    <router-view />
  </div>
</template>
<script>
import magicHeader from "./components/Header.vue";
export default {
  components: {
    magicHeader
  }
};
</script>

<style>
</style>

