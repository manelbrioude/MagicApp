import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Cards",
      name: "Cards",
      component: () => import("./views/Cards.vue")
    },
    {
      path: "/Events",
      name: "Events",
      component: () => import("./views/Events.vue")
    },
    {
      path: "/Rules",
      name: "Rules",
      component: () => import("./views/Rules.vue")
    },
    {
      path: "/card-details/:id",
      name: "CardDetails",
      component: () => import("./views/CardDetails.vue"),
      props: true
    }
  ]
});
