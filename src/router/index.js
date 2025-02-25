import {
  createRouter,
  createWebHistory
} from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue"; // 기본 홈 화면
import Project from "../components/Project.vue";
import Introduce from "../components/Introduce.vue";

const routes = [{
  path: "/",
  component: Main,
  children: [{
      path: "", // 기본 홈 페이지
      name: "home",
      component: Home,
    },
    {
      path: "project", // "/project" 경로에서만 보이게 함
      name: "project",
      component: Project,
    },
    {
      path: "Introduce", // "/Introduce" 경로에서만 보이게 함
      name: "Introduce",
      component: Introduce,
    },
  ],
},];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
