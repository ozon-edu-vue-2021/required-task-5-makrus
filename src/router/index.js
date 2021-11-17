import Vue from 'vue';
import Router from 'vue-router';

import Storefront from "@/components/Storefront";
import Cart from "@/components/Cart";

Vue.use(Router);

export default new Router({
  mode: 'history', // default 'hash'
  routes: [
    {
    	path: "/",
    	component: Storefront,
    },
    {
        path: "/cart",
        component: Cart,
    }
  ]
});
