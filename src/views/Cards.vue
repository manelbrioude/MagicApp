<template>
  <div>
    <h3>List of Cards</h3>

    <filters />

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
  margin-top: 45px;
  text-align: center;
  color: white;
}
</style>
