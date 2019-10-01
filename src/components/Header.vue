<template>
  <div>
    <div>
      <div class="logChat">
        <button id="login" class="btn">
          <i class="fas fa-sign-in-alt"></i>
        </button>
        <button id="chat" class="btn">
          <i class="fas fa-comment-alt"></i>
        </button>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Cards">Cards</router-link>
      <router-link to="/Rules">Rules</router-link>
      <router-link to="/Events">Events</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "magicHeader"
};
</script>

<style>
/* #logo {
} */
#nav {
  padding: 30px;
  width: 100%;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 12px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  color: #e98008;
}
/* Style buttons */
.btn {
  background-color: rgb(18, 21, 24); /* Blue background */
  color: white; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
}

/* Darker background on mouse-over */
.btn:hover {
  color: white;
}
</style>