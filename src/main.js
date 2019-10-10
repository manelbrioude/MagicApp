import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import vuex from "vuex";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyBgKyemkq_KZOikwNXxRS7LSLdYn_mzws0",
      authDomain: "magic-app-90ec9.firebaseapp.com",
      databaseURL: "https://magic-app-90ec9.firebaseio.com",
      projectId: "magic-app-90ec9",
      storageBucket: "",
      messagingSenderId: "81645688524",
      appId: "1:81645688524:web:0cf981a0c7e5eadb0d9469",
      measurementId: "G-RBP39KGSXV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        store.commit("changelog", true);
      } else {
        store.commit("changelog", false);
      }
    });
  }
}).$mount("#app");
