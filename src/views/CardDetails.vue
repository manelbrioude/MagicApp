<template>
  <div>
    <ul>
      <li>{{choosenCard["name"]}}</li>
      <li v-for="(color,c) in choosenCard.colors" :key="c">{{color}}</li>
      <li>{{choosenCard["type"]}}</li>
      <li>{{choosenCard["rarity"]}}</li>
      <li>{{choosenCard["set"]}}</li>
      <li>{{choosenCard["text"]}}</li>

      <li>
        imageUrl:
        <img v-bind:src="choosenCard.imageUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CardDetails",
  components: {},
  data() {
    return {
      choosenCard: {}
    };
  },
  methods: {
    getFormats() {
      fetch(
        "https://api.magicthegathering.io/v1/cards/" + this.$route.params.id,
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
          this.choosenCard = json.card;
        });
    }
  },
  created() {
    this.getFormats();
  }
};
</script>

<style>
</style>