<template>
  <div>
    <div class="d-flex justify-content-center">
      <v-btn
        id="filters"
        outlined
        class="btn btn-primary"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        small
      >Filters</v-btn>
    </div>
    <div class="filters">
      <form @submit.prevent=" sendData()">
        <div class="collapse" id="collapseExample">
          <div v-if="loadingFilters==true" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="card card-body">
            <div v-if="loadingFilters==false">
              <div>
                <div class="colors d-flex justify-content-around">
                  <input
                    type="checkbox"
                    id="myCheckbox1"
                    value="green"
                    style="display:none"
                    v-model="filtersValues.checkedColors"
                  />
                  <label for="myCheckbox1">
                    <img src="../assets/ManaLogos/GreenMana.png" />
                  </label>
                  <input
                    type="checkbox"
                    id="myCheckbox2"
                    value="white"
                    style="display:none"
                    v-model="filtersValues.checkedColors"
                  />
                  <label for="myCheckbox2">
                    <img src="../assets/ManaLogos/WhiteMana.png" />
                  </label>
                  <input
                    type="checkbox"
                    id="myCheckbox3"
                    value="black"
                    style="display:none"
                    v-model="filtersValues.checkedColors"
                  />
                  <label for="myCheckbox3">
                    <img src="../assets/ManaLogos/BlackMana.png" />
                  </label>
                  <input
                    type="checkbox"
                    id="myCheckbox4"
                    value="blue"
                    style="display:none"
                    v-model="filtersValues.checkedColors"
                  />
                  <label for="myCheckbox4">
                    <img src="../assets/ManaLogos/BlueMana.png" />
                  </label>
                  <input
                    type="checkbox"
                    id="myCheckbox5"
                    value="red"
                    style="display:none"
                    v-model="filtersValues.checkedColors"
                  />
                  <label for="myCheckbox5">
                    <img src="../assets/ManaLogos/RedMana.png" />
                  </label>
                </div>

                <div class="input d-flex justify-content-center">
                  <label>
                    <span>Name:</span>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Write the card name"
                      v-model="filtersValues.cardName"
                    />
                  </label>
                </div>
                <div id="dropdowns" class="d-flex">
                  <label>
                    <span>Type:</span>
                    <select name="type" v-model="filtersValues.typevalue">
                      <option value>All</option>
                      <option v-for="(type, t) in types" :key="t" v-bind:value="type">{{type}}</option>
                    </select>
                  </label>
                  <label>
                    <span>Format:</span>
                    <select name="format" v-model="filtersValues.formatvalue">
                      <option value>All</option>
                      <option
                        v-for="(format, f) in formats"
                        :key="f"
                        v-bind:value="format"
                      >{{format}}</option>
                    </select>
                  </label>
                  <label>
                    <span>supertypes:</span>
                    <select name="supertype" v-model="filtersValues.supertypevalue">
                      <option value>All</option>
                      <option
                        v-for="(supertype, s) in supertypes"
                        :key="s"
                        v-bind:value="supertype"
                      >{{supertype}}</option>
                    </select>
                  </label>
                </div>
              </div>
              <div id="buttons" class="d-flex" style="justify-content:center">
                <v-btn value="send" v-on:click="filterFetch">Search</v-btn>
                <v-btn type="reset">Clear</v-btn>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "filters",
  data() {
    return {
      filtersValues: {
        checkedColors: [],
        supertypevalue: null,
        formatvalue: null,
        typevalue: null,
        cardName: null
      }
    };
  },
  created() {},
  computed: {
    ...mapMutations(["changeLoadingFilters"]),
    ...mapGetters([
      "types",
      "formats",
      "supertypes",
      "loading",
      "loadingFilters"
    ])
  },
  mounted() {
    this.getFormats();
    this.getTypes();
    this.getSupertypes();
  },
  methods: {
    ...mapActions(["getFormats", "getTypes", "getSupertypes"]),
    filterFetch: function() {
      console.log(this.filtersValues);
      this.$store.dispatch("sendData", this.filtersValues);
    }
  }
};
</script>

<style scoped>
@media (orientation: portrait) {
  .form {
    width: 374px;
  }
}
/* loader */
.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* loader */
#filters {
  background-color: rgba(0, 0, 0, 0);
}
.card-body {
  background-color: rgba(0, 0, 0, 0);
}
label {
  margin-right: 1px;
}
span {
  color: white;
}

.dropdowns label {
  border: 1px solid white;
}
label::before {
  height: 30px;
  width: 30px;
}
label img {
  height: 30px;
  width: 30px;
}
:checked + label img {
  height: 50px;
  width: 50px;
}
form {
  border: 1px solid white;
}
.filters {
  display: flex;
  justify-content: center;
}
select {
  background-color: white;
}
input {
  background-color: white;
}
label {
  margin-right: 1px;
}
</style>