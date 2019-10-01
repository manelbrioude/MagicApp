<template>
  <div>
    <h3>List of Cards</h3>
    <p>You can filter through the list of cards, selecting your preferences and click on search</p>
    <!-- <div>
      <filters />
    </div>-->

    <cardList />
  </div>
</template>

<script>
import filters from "../components/Filters.vue";
import cardList from "../components/CardList.vue";
export default {
  components: {
    filters,
    cardList
  },
  data() {
    return {
      newSearchData: {}
    };
  },
  methods: {
    chagedOptions: function(filteredData) {
      this.newSearchData = filteredData;
    }
  }
};
</script>
<style scoped>
h3 {
  margin-top: 0px;
  text-align: center;
}
p {
  text-align: center;
}
</style>
