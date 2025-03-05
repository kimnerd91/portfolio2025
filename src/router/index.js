<<<<<<< HEAD
import {
  createRouter,
  createWebHistory
} from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue"; 
import Project from "../components/Project.vue";
import Introduce from "../components/Introduce.vue";
import projectDetail from "../components/ProjectDetail.vue"

const routes = [{
  path: "/",
  component: Main,
  children: [{
      path: "",
      name: "home",
      component: Home,
    },
    {
      path: "project",
      name: "project",
      component: Project,
    },
    {
      path: '/projectDetail/:id',
      name: 'ProjectDetail',
      component: () => import('@/components/ProjectDetail.vue'),
      props: true,
      meta: {
        hideHeader: true
      },
    },
    {
      path: "Introduce",
      name: "Introduce",
      component: Introduce,
    },
  ],
}, ];
=======
import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
];
>>>>>>> 9c5399188c42b3f86c18e2b1d3b60b22ba370817

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> 9c5399188c42b3f86c18e2b1d3b60b22ba370817
