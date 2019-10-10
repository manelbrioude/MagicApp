import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    types: [],
    formats: [],
    supertypes: [],
    cards: [],
    singleCard: {},
    loading: false,
    loadingFilters: true,
    filtersFilling: 0,
    logged: false,
    data: {
      types: "",
      formats: "",
      supertypes: "",
      name: "",
      colors: []
    },
    pagNumber: 1
  },
  mutations: {
    fillTypes: (state, payloadt) => {
      state.types = payloadt;
    },
    fillFormats: (state, payloadf) => {
      state.formats = payloadf;
    },
    fillSupertypes: (state, payloads) => {
      state.supertypes = payloads;
    },
    fillCards: (state, payload) => {
      state.cards = payload;
    },
    fillData: (state, payload) => {
      state.data.types = payload.typeValue;
      // console.log(state.data.types);
      state.data.supertypes = payload.supertypeValue;
      // console.log(state.data.supertypes);
      state.data.formats = payload.formatValue;
      // console.log(state.data.formats);
      state.data.name = payload.cardName;
      // console.log(state.data.name);
      state.data.colors = payload.checkedColors;
      // console.log(state.data.colors);
    },

    setLoading: (state, payload) => {
      state.loading = payload;
    },
    changelog: (state, payload) => {
      state.logged = payload;
    },
    loadingReady: state => {
      if (state.filtersFilling == 2) {
        state.loadingFilters = false;
        console.log(state.loadingFilters);
      } else {
        state.filtersFilling += 1;
      }
    },
    pagNumberChange: state => {
      state.pagNumber += 1;
    },
    pagNumberLess: state => {
      state.pagNumber = -1;
    },
    erase: state => {
      state.cards = [];
    }
  },
  actions: {
    getCards({ state, commit }) {
      console.log(state.cards.length);
      if (state.cards.length == 0) {
        commit("setLoading", true);
        fetch(
          "https://api.magicthegathering.io/v1/cards/?colors=" +
            (state.data.colors || "") +
            "&type=" +
            (state.data.type || "") +
            "&gameFormat=" +
            (state.data.format || "") +
            "&supertypes=" +
            (state.data.supertype || "") +
            "&name=" +
            (state.data.name || "") +
            "&page=" +
            state.pagNumber,
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
            commit("fillCards", json.cards);

            commit("setLoading", false);
          });
      }
    },
    sendData({ commit }, payload) {
      commit("erase");
      commit("setLoading", true);
      fetch(
        "https://api.magicthegathering.io/v1/cards/?colors=" +
          (payload.checkedColors || "") +
          "&type=" +
          (payload.typevalue || "") +
          "&gameFormat=" +
          (payload.formatvalue || "") +
          "&supertypes=" +
          (payload.supertypevalue || "") +
          "&name=" +
          (payload.cardName || ""),
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
          commit("fillCards", json.cards);
          commit("setLoading", false);
          commit("fillData", payload);
          console.log(payload.supertypeValue);
          console.log(payload.typeValue);
          console.log(payload.formatpeValue);
          console.log(payload.checkedColors);
          console.log(payload.cardName);
        });
    },
    nextPage({ state, commit }) {
      commit("erase");
      commit("setLoading");
      commit("pagNumberplus");
      fetch(
        "https://api.magicthegathering.io/v1/cards/?colors=" +
          (state.data.colors || "") +
          "&type=" +
          (state.data.type || "") +
          "&gameFormat=" +
          (state.data.format || "") +
          "&supertypes=" +
          (state.data.supertype || "") +
          "&name=" +
          (state.data.name || "") +
          "&page=" +
          state.pagNumber,
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
          commit("fillCards", json.cards);
          commit("setLoading", false);
        });
    },
    previousPage({ state, commit }) {
      commit("setLoading");
      commit("pagNumberLess");
      fetch(
        "https://api.magicthegathering.io/v1/cards/?colors=" +
          (state.data.colors || "") +
          "&type=" +
          (state.data.type || "") +
          "&gameFormat=" +
          (state.data.format || "") +
          "&supertypes=" +
          (state.data.supertype || "") +
          "&name=" +
          (state.data.name || "") +
          "&page=" +
          state.pagNumber,
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
          commit("fillCards", json.cards);
          commit("setLoading", false);
        });
    },
    // the fetch to fill the dropdown menus of the filters
    getFormats({ state, commit }) {
      if (state.types.length == 0) {
        fetch("https://api.magicthegathering.io/v1/formats", {
          method: "GET"
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(json => {
            commit("fillFormats", json.formats);
            commit("loadingReady");
          });
      }
    },
    getTypes({ state, commit }) {
      if (state.types.length == 0) {
        fetch("https://api.magicthegathering.io/v1/types", {
          method: "GET"
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(json => {
            commit("fillTypes", json.types);
            commit("loadingReady");
          });
      }
    },
    getSupertypes({ state, commit }) {
      if (state.supertypes.length == 0) {
        fetch("https://api.magicthegathering.io/v1/supertypes", {
          method: "GET"
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(json => {
            commit("fillSupertypes", json.supertypes);
            commit("loadingReady");
          });
      }
    }
    // dropdown menus filling fetches
  },

  getters: {
    cards: state => state.cards,
    types: state => state.types,
    formats: state => state.formats,
    supertypes: state => state.supertypes,
    loading: state => state.loading,
    loadingFilters: state => state.loadingFilters,
    // singleCard: state => state.singleCard,
    singleCard: state => id => {
      return state.cards.find(card => card.id === id);
    },
    logged: state => state.logged,
    data: state => state.data,
    pagNumber: state => state.pagNumber
  }
});
