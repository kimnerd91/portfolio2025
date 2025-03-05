<template>
  <div class="mobileOnly">
    <header class="col-xl-12 d-flex justify-content-start">
      <button
        type="button"
        class="btn"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <h1 data-aos="fade-down" data-aos-duration="1000">RESUME</h1>
    </header>
  </div>
  <div class="project" data-aos="fade-right">
    <ul class="col-12 projectUl d-flex" data-aos="fade-right" data-aos-duration="1200">
      <li class="col-4" v-for="(pj, i) in Project" :key="i">
        <router-link :to="'/projectDetail/' + Project[i].id">
          <div>
            <div class="imgDiv">
              <img :src="Project[i].img" alt="" />
            </div>
            <div class="projectDiv">
              <span>{{ Project[i].responsive }}</span>
              <h3 class="fw-500">{{ Project[i].name }}</h3>
              <p>
                {{ Project[i].detail }}
              </p>
              <div class="projectDetail">
                <span class="fw-300">{{ Project[i].company }}</span>
                <p class="fw-300">{{ Project[i].date }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
    <!-- 오프캔버스 -->
  <div
    class="offcanvas offcanvas-start"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div class="offcanvas-header">
      <h1>PORTFOLIO</h1>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/Introduce">Introduce</router-link>
        </li>
        <li>
          <router-link to="/project">Project</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import { Project } from "../assets/projectData.js";

AOS.init();
export default {
  name: "",
  data() {
    return {
      Project,
    };
  },
  mounted() {
    const projectList = document.querySelector(".projectUl"); // 요소 직접 선택
    if (projectList) {
      projectList.addEventListener("wheel", this.handleWheelScroll);
    }
  },
  beforeUnmount() {
    const projectList = document.querySelector(".projectUl"); // 요소 다시 선택 후 이벤트 제거
    if (projectList) {
      projectList.removeEventListener("wheel", this.handleWheelScroll);
    }
  },
  methods: {
    handleWheelScroll(event) {
      event.preventDefault();
      const projectList = document.querySelector(".projectUl");
      if (projectList) {
        projectList.scrollLeft += event.deltaY;
      }
    },
  },
};
</script>
