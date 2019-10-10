<template></template>

<script>
export default {
  name: "background"
};
</script>

<style>
body {
  background-image: url("../assets/vertical.jpg");
  background-position: center;
  background-size: cover;
  /* background-size: cover; */

  min-height: 100vh;
}
@media (orientation: landscape) {
  body {
    background-image: url("../assets/background.jpg");
    background-position: center;
    background-size: cover;

    min-height: 100vh;
  }
}
</style>