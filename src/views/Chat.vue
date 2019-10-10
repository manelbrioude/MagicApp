<template>
  <div class="all">
    <div class="d-flex justify-content-end align-items-center">
      <v-btn v-if="logged==false" small @click="login()">Login</v-btn>
      <v-btn v-if="logged==true" small @click="logout()">Logout</v-btn>
    </div>

    <div id="chat">
      <div id="chatError" class="d-flex justify-content-center align-items-center">
        <p v-if="logged==false">PLEASE, LOGIN TO CHAT</p>
      </div>
      <div v-if="logged==true">
        <div v-for="(mess,m) in messages" :key="m">
          <img v-bind:src="mess.foto" style="width: 40px;" />
          {{mess.name}}: {{mess.text}}
        </div>
      </div>
    </div>
    <div class="writeSend">
      <input type="text" v-model="message" placeholder="Write your message" />
      <v-btn small @click="sendMessages()">Send</v-btn>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      message: "",
      messages: []
    };
  },
  methods: {
    login() {
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
    },
    sendMessages() {
      let obj = {
        text: this.message,
        name: firebase.auth().currentUser.displayName,
        foto: firebase.auth().currentUser.photoURL
      };
      firebase
        .database()
        .ref("chat")
        .push(obj);
      this.message = "";
    },
    scrollToEnd: function() {
      var container = document.getElementById("chat");
      container.scrollTop = container.scrollHeight;
    }
  },
  created() {
    firebase
      .database()
      .ref("chat")
      .on("value", data => {
        this.messages = data.val();
        setTimeout(() => {
          this.scrollToEnd();
        }, 100);
      });
  },
  computed: {
    ...mapGetters(["logged"])
  }
};
</script>

<style scoped>
::placeholder {
  color: black;
}
.writeSend {
  display: flex;
  justify-content: center;
}
input {
  background-color: rgb(255, 255, 255);
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  width: 300px;
}
@media (orientation: landscape) {
  #chatError {
    height: 250px;
  }
  #chat {
    height: 250px;
    overflow: auto;
    margin-left: 70px;
    margin-right: 70px;
    border: 1px solid white;
    color: white;
  }
  .all {
    margin-top: 10px;
  }
}
@media (orientation: portrait) {
  #chatError {
    height: 400px;
  }
  #chat {
    height: 400px;
    overflow: auto;

    border: 1px solid white;
    color: white;
  }
  .all {
    margin-top: 70px;
  }
}
</style>