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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;