<template>
  <div>
    <div id="cardlist">
      <div id="cardBox">
        <div class="scrollbox">
          <div class="d-flex justify-content-center">
            <div v-if="loading==true" class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="aCard" v-for="(card, t) in cards" :key="t">
            <div class="eachCard" style="text-align:center">
              <div class="name">{{card.name}}</div>
              <div style="text-align:center" v-on:click="getOneCard">
                <router-link v-bind:to="'/card-details/'+card.id">
                  <img v-bind:src="card.imageUrl" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <v-btn id="previous" v-if="pagNumber!=1" v-on:click="getless" outlined x-small>Previous page</v-btn>
      <v-btn id="next" v-on:click="getMore" outlined x-small>Next Page</v-btn>
    </div>
  </div>
  <!-- cardlist -->
</template>

<script>
import { log } from "util";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "cardList",
  components: {},
  data() {
    return {
      selected: "",

      cardName: ""
    };
  },
  computed: {
    ...mapGetters(["cards", "loading", "pagNumber"])
  },
  methods: {
    ...mapActions(["getCards"]),
    getOneCard() {
      return this.$store.commit("fillSingleCard");
    },
    getMore() {
      this.$store.dispatch("nextPage");
    },
    getLess() {
      this.$store.dispatch("previousPage");
    }
  },
  created() {
    this.getCards();
  }
};
</script>

<style>
/* loader */
.lds-roller {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 32px 32px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  margin: -3px 0 0 -3px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 50px;
  left: 50px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 54px;
  left: 45px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 57px;
  left: 39px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 58px;
  left: 32px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 57px;
  left: 25px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 54px;
  left: 19px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 50px;
  left: 14px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 45px;
  left: 10px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* loader */
.scrollbox {
  height: 405px;
  width: 374px;
  border: 1px solid #ccc;
  font: 16px/26px;
  overflow: scroll;
}
.scrollbox img {
  height: 155px;
  width: 111px;
}
@media (orientation: portrait) {
  .allItems {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
}
@media (orientation: landscape) {
  .scrollbox {
    display: flex;
    height: 250px;
    width: 550px;
    font: 16px/26px;
    overflow: scroll;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
  }

  .aCard {
    width: 50%;
    display: flex;
    justify-content: center;
  }
}

.name {
  font-size: 25px;
}
#next {
  color: white;
}
#previous {
  color: white;
}
#filters {
  color: white;
}
.name {
  color: white;
}
.filters {
  display: flex;
  justify-content: center;
}
</style>