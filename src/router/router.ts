import Vue from "vue";
import Router from "vue-router";
import Main from "../views/Main/Main.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/Home/Home.vue")
        },
        {
          path: "/discovery",
          name: "discovery",
          component: () => import("../views/Discovery/Discovery.vue")
        },
        {
          path: "/dynamic",
          name: "dynamic",
          component: () => import("../views/Dynamic/Dynamic.vue")
        },
        {
          path: "/mine",
          name: "mine",
          component: () => import("../views/Mine/Mine.vue")
        }
      ]
    },
    {
      path: "/createDynamic",
      name: "createDynamic",
      component: () => import("../views/CreateDynamic/CreateDynamic.vue")
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    // },
    {
      path: "/graphql-demo",
      name: "demo",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../components/ApolloExample.vue")
    }
  ]
});
