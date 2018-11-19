import "nprogress/nprogress.css";
import NProgress from "nprogress";
import router from "./router";

NProgress.configure({
  showSpinner: true
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
