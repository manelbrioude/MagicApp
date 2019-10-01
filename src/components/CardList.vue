<template>
  <!-- erase down -->
  <div>
    <div>
      <p>
        <a
          class="btn btn-primary"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >Filters</a>
      </p>
      <form @submit.prevent=" sendData()">
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <div>
              <div class="colors">
                <input type="checkbox" id="myCheckbox1" value="green" v-model="checkedColors" />
                <label for="myCheckbox1">
                  <img src="../assets/ManaLogos/GreenMana.png" />
                </label>
                <input type="checkbox" id="myCheckbox2" value="white" v-model="checkedColors" />
                <label for="myCheckbox2">
                  <img src="../assets/ManaLogos/WhiteMana.png" />
                </label>
                <input type="checkbox" id="myCheckbox3" value="black" v-model="checkedColors" />
                <label for="myCheckbox3">
                  <img src="../assets/ManaLogos/BlackMana.png" />
                </label>
                <input type="checkbox" id="myCheckbox4" value="blue" v-model="checkedColors" />
                <label for="myCheckbox4">
                  <img src="../assets/ManaLogos/BlueMana.png" />
                </label>
                <input type="checkbox" id="myCheckbox5" value="red" v-model="checkedColors" />
                <label for="myCheckbox5">
                  <img src="../assets/ManaLogos/RedMana.png" />
                </label>
              </div>

              <div>
                <label>
                  Name
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Write the card name"
                    v-model="cardName"
                  />
                </label>
              </div>
              <div id="dropdowns">
                <label>
                  Type
                  <select name="type" v-model="typevalue">
                    <option value>All</option>
                    <option v-for="(type, t) in types" :key="t">{{type}}</option>
                  </select>
                </label>
                <label>
                  Format
                  <select name="format" v-model="formatvalue">
                    <option value>All</option>
                    <option v-for="(format, f) in formats" :key="f">{{format}}</option>
                  </select>
                </label>
                <label>
                  supertypes
                  <select name="supertype" v-model="supertypevalue">
                    <option value>All</option>
                    <option v-for="(supertype, s) in supertypes" :key="s">{{supertype}}</option>
                  </select>
                </label>
              </div>
            </div>
            <div id="buttons">
              <button value="send">Search</button>
              <button type="reset">Clear</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- erase up -->
    <!-- cardlist -->
    <div>
      <div id="cardlist">
        <button v-if="pagNumber!=1" v-on:click="pagNumber -= 1,getMore()">Previous page</button>
        <button v-on:click="pagNumber += 1,getMore()">Next Page</button>
        <div v-for="(card, t) in cards" :key="t">
          <router-link v-bind:to="'/card-details/'+card.id">
            <img v-bind:src="card.imageUrl" />
          </router-link>
          <li>{{card.name}}</li>
          <li v-for="(color,c) in card.colors" :key="c">{{color}}</li>
          <li>{{card.type}}</li>
        </div>
      </div>
    </div>
    <!-- cardlist -->
  </div>
</template>

<script>
import eventBus from "./eventBus";
import { log } from "util";
export default {
  name: "cardList",
  components: {},
  data() {
    return {
      checkedColors: [],
      selected: "",
      cards: [],
      pagNumber: 1,
      cardName: "",
      // erase down
      formats: [],
      types: [],
      supertypes: [],
      formatvalue: "",
      typevalue: "",
      supertypevalue: ""
      // erase up
    };
  },
  methods: {
    // erase down
    getFormats() {
      fetch("https://api.magicthegathering.io/v1/formats", {
        method: "GET"
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.formats = json.formats;
        });
    },
    getTypes() {
      fetch("https://api.magicthegathering.io/v1/types", {
        method: "GET"
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.types = json.types;
        });
    },
    getSupertypes() {
      fetch("https://api.magicthegathering.io/v1/supertypes", {
        method: "GET"
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.supertypes = json.supertypes;
        });
    },
    // erase up
    getCards() {
      fetch(
        "https://api.magicthegathering.io/v1/cards/?page=" + this.pagNumber,
        {
          method: "GET"
        }
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.cards = json.cards;
        });
    },
    getMore() {
      fetch(
        "https://api.magicthegathering.io/v1/cards?page=" + this.pagNumber,
        {
          method: "GET"
        }
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.cards = json.cards;
        });
    },
    sendData() {
      fetch(
        "https://api.magicthegathering.io/v1/cards/?name=" +
          this.cardName +
          "&type=" +
          this.typevalue +
          "&=gameFormat" +
          this.formatvalue +
          "&supertypes=" +
          this.supertypevalue +
          "&colors=" +
          this.checkedColors,
        {
          method: "GET"
        }
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.cards = json.cards;
        });
    }
  },
  created() {
    this.getCards();
    // erase down
    this.getFormats();
    this.getTypes();
    this.getSupertypes();
    // erase up
  }
};
</script>

<style>
/* erase down */
label {
  margin-right: 1px;
}
label img {
  height: 30px;
  width: 30px;
}
/* erase up */
</style>