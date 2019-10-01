<template>
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
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        <div>
          <div class="colors">
            <input type="checkbox" id="myCheckbox1" />
            <label for="myCheckbox1">
              <img src="../assets/ManaLogos/GreenMana.png" />
            </label>
            <input type="checkbox" id="myCheckbox2" />
            <label for="myCheckbox2">
              <img src="../assets/ManaLogos/WhiteMana.png" />
            </label>
            <input type="checkbox" id="myCheckbox3" />
            <label for="myCheckbox3">
              <img src="../assets/ManaLogos/BlackMana.png" />
            </label>
            <input type="checkbox" id="myCheckbox4" />
            <label for="myCheckbox4">
              <img src="../assets/ManaLogos/BlueMana.png" />
            </label>
            <input type="checkbox" id="myCheckbox5" />
            <label for="myCheckbox5">
              <img src="../assets/ManaLogos/RedMana.png" />
            </label>
          </div>

          <div>
            <label>
              Name
              <input type="text" name="name" />
            </label>
          </div>
          <div id="dropdowns">
            <label>
              Format
              <select>
                <option value="All">All</option>
                <option v-for="(format, f) in formats" :key="f">{{format}}</option>
              </select>
            </label>
            <label>
              Set
              <select name id>
                <option value="All">All</option>
                <option v-for="(set, t) in sets" :key="t">{{set.name}}</option>
              </select>
            </label>
            <label>
              Type
              <select name id>
                <option value="All">All</option>
                <option v-for="(type, t) in types" :key="t">{{type}}</option>
              </select>
            </label>
          </div>
          <div id="buttons">
            <button v-on:click="sendData()" value="send">Search</button>
            <button>Clear</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filters",
  data() {
    return {
      formats: [],
      types: [],
      sets: []
    };
  },
  methods: {
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
    getSets() {
      fetch("https://api.magicthegathering.io/v1/sets", {
        method: "GET"
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => {
          this.sets = json.sets;
        });
    }
  },
  created() {
    this.getFormats();
    this.getTypes();
    this.getSets();
  }
};
</script>

<style scoped>
label {
  margin-right: 1px;
}
img {
  height: 30px;
  width: 30px;
}
</style>