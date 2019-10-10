<template>
  <div class="all">
    <div class="d-flex justify-content-center">
      <h1>Events</h1>
    </div>
    <div v-if="logged==false" class="d-flex justify-content-center">
      <p>If you want to create a new event please login</p>
    </div>
    <div v-if="logged==true" class="d-flex justify-content-center">
      <p>Create and event</p>
      <v-btn
        class="btn btn-primary"
        role="button"
        href="#collapseExample2"
        data-toggle="collapse"
        x-small
      >+</v-btn>
    </div>

    <div class="collapse" id="collapseExample2">
      <div class="d-flex justify-content-center">
        <label>Name of the event:</label>
        <input type="text" v-model="nameEvent" placeholder=" ..." style="color:white" />
      </div>
      <div>
        <div class="d-flex justify-content-center">
          <label>Choose the date:</label>
          <v-btn
            id="dateBtn"
            outlined
            class="btn btn-primary"
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            small
            style="font-color:white"
          >DATE</v-btn>

          <div class="collapse" id="collapseExample">
            <v-date-picker v-model="picker" small></v-date-picker>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <label>Place of the event:</label>
        <input type="text" v-model="placeEvent" placeholder=" ..." />
      </div>
      <div class="d-flex justify-content-center">
        <v-btn v-on:click="createEvent()">create</v-btn>
      </div>
    </div>
    <div>
      <div class="d-flex justify-content-center">
        <h3>Events Created</h3>
      </div>
      <div class="scrollbox">
        <div v-if="logged==true">
          <div class="eachEvent" v-for="(event,e) in events" :key="e">
            <div
              class="name d-flex justify-content-center"
            >{{event.eventName}} created by: {{event.userName}}</div>
            <div class="details">
              <div
                class="place d-flex justify-content-center"
              >The place of the event is: {{event.eventPlace}}</div>
              <div
                class="date d-flex justify-content-center"
              >The date of the event is: {{event.eventDate}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      nameEvent: "",
      picker: "",
      placeEvent: "",
      events: []
    };
  },
  components: {},
  computed: {
    ...mapGetters(["logged"])
  },
  methods: {
    createEvent() {
      let event = {
        eventName: this.nameEvent,
        eventDate: this.picker,
        eventPlace: this.placeEvent,
        userName: firebase.auth().currentUser.displayName
      };
      alert("event Created");
      firebase
        .database()
        .ref("event")
        .push(event);
      this.nameEvent = "...";
      this.placeEvent = "...";
      this.picker = "...";
    }
  },
  created() {
    firebase
      .database()
      .ref("event")
      .on("value", data => {
        this.events = data.val();
        console.log(this.events);
      });
  }
};
</script>

<style scoped>
div {
  color: white;
}
::placeholder {
  color: white;
}
.name {
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.514);
}
.details {
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.411);
}

.all {
  margin-top: 50px;
}
.eachEvent {
  margin-bottom: 20px;
}
.dateBtn {
  color: white;
  background-color: white;
}
@media (orientation: portrait) {
  .scrollbox {
    height: 300px;
    overflow: auto;
  }
}
@media (orientation: landscape) {
  .eachEvent {
    margin-left: 70px;
    margin-right: 70px;
  }
  .scrollbox {
    height: 200px;
    overflow: scroll;
  }
  .all {
    margin-top: 0px;
  }
}
</style>

