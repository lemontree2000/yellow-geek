import { Component } from "vue-property-decorator";

// for vue-router 2.2+
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate"
]);
