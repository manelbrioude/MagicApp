<template>
  <div class="allScreen">
    <div>
      <div class="forLandscape">
        <div class="detText">
          <div class="details">
            <ul>
              <li class="name">Name: {{getCard.name}}</li>
              <li class="color" v-for="(color,c) in getCard.colors" :key="c">Color: {{color}}</li>
              <li class="type">Type: {{getCard["type"]}}</li>
              <li class="rarity">Rarity: {{getCard["rarity"]}}</li>
              <li class="set">Set: {{getCard["set"]}}</li>
            </ul>
          </div>
          <div class="text">Text: {{getCard["text"]}}</div>
          <div>Flavour: {{getCard["flavour"]}}</div>
        </div>
        <div class="cardPicture">
          <a v:bind:href="getCard.imageUrl" data-fancybox>
            <img v-bind:src="getCard.imageUrl" alt />
          </a>
        </div>
      </div>
    </div>
    <router-link to="/Cards" class="d-flex justify-content-center">
      <v-btn small outlined style="color:white">back to cards</v-btn>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CardDetails",
  components: {},
  props: ["id"],
  data() {
    return {
      choosenCard: {}
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["singleCard"]),
    getCard() {
      return this.singleCard(this.id);
    }
  },
  mounted() {}
};
</script>

<style scoped>
ul {
  text-decoration-style: none;
}
li {
  color: white;
  list-style-type: none;
}

.text {
  color: white;
  margin-left: 10px;
  margin-right: 10px;
}

@media (orientation: portrait) {
  .details {
    padding-top: 45px;
    display: flex;
    justify-content: center;
  }
  .cardPicture {
    display: flex;
    justify-content: center;
  }
  .allScreen {
    width: 100%;
    height: 100vh;
    /* background-color: rgba(0, 0, 0, 0.322); */
  }
}
@media (orientation: landscape) {
  .details {
    margin-left: 60px;
  }
  .text {
    margin-left: 60px;
  }
  .cardPicture {
    display: flex;
  }
  .forLandscape {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
}
</style>