import {
  createRouter,
  createWebHistory
} from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import Project from "../components/Project.vue";
import Introduce from "../components/Introduce.vue";
import ProjectDetail from "../components/ProjectDetail.vue"; // 첫 글자 대문자 권장

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
      path: "projectDetail/:id",
      name: "ProjectDetail",
      component: ProjectDetail,
      props: true,
      meta: {
        hideHeader: true,
      },
    },
    {
      path: "introduce",
      name: "introduce",
      component: Introduce,
    },
  ],
}, ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
