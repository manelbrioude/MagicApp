<template>
  <div>
    <nav class="navbar-left navbar-dark fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav" style="font-size:5px">
          <div class="nav-item">
            <router-link to="/">
              <i class="fas fa-home"></i>
            </router-link>
          </div>
          <div class="nav-item">
            <router-link to="/Cards">
              <i class="fas fa-address-card"></i>
            </router-link>
          </div>
          <div class="nav-item">
            <router-link to="/Rules">
              <i class="fas fa-clipboard-list"></i>
            </router-link>
          </div>
          <div class="nav-item">
            <router-link to="/Events">
              <i class="fas fa-handshake"></i>
            </router-link>
          </div>
          <div class="nav-item">
            <router-link to="/Chat">
              <i class="fas fa-comments"></i>
            </router-link>
          </div>
          <div v-if="logged==false" class="nav-item">
            <i class="fas fa-sign-in-alt" @click="login"></i>
          </div>
          <div v-if="logged==true" class="nav-item">
            <i class="fas fa-sign-out-alt" @click="logout"></i>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  name: "magicHeader",
  methods: {
    login() {
      console.log("hola");
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          this.$store.commit("changelog", true);
        })
        .catch(err => alert(err));
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("changelog", false);
          // Sign-out successful.
        })
        .catch(function(error) {
          // An error happened.
        });
    }
  },
  computed: {
    ...mapGetters(["logged"])
  }
};
</script>

<style>
.nav-item i {
  color: white;
  font-size: 30px;
}

i {
  height: 40px;
  width: 40px;
}
button {
  color: darkred;
}

@media (orientation: landscape) {
  nav {
    height: 100vh;
    width: 60px;
  }
  .navbar-nav {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  button {
    margin-bottom: 5px;
  }
}
@media (orientation: portrait) {
  .navbar-nav {
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .fixed-top {
    display: flex;
  }
  button {
    margin-right: 5px;
  }
}
</style>