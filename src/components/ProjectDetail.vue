<template>
  <div class="mobileOnly">
    <header class="col-xl-12 d-flex justify-content-start">
      <button
        type="button"
        class="btn  "
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <h1 data-aos="fade-down" data-aos-duration="1000">RESUME</h1>
    </header>
  </div>
  <div class="d-flex col-12 pjd position-relative" v-if="projectData">
    <div class="col-5 detailImg" data-aos="fade-right" data-aos-duration="2000">
      <img :src="projectData.detailImg" alt="" />
    </div>
    <div class="col-5 detailText" data-aos="fade-left" data-aos-duration="2000">
      <h1>{{ projectData.name }}</h1>
      <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000">
        <h6>Overview</h6>
        <p class="fw-300">{{ projectData.detail }}</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="1500" data-aos-duration="2000">
        <h6>Key Infomation</h6>
        <ul>
          <li class="d-flex col-12 align-items-center">
            <span class="col-2 fw-500">Project</span>
            <p class="fw-300">{{ projectData.name }}</p>
          </li>
          <li class="d-flex col-12 align-items-center">
            <span class="col-2 fw-500">Client</span>
            <p class="fw-300">{{ projectData.company }}</p>
          </li>
          <li class="d-flex col-12 align-items-center">
            <span class="col-2 fw-500">Period</span>
            <p class="fw-300">{{ projectData.date }}</p>
          </li>
          <li class="d-flex col-12 align-items-center">
            <span class="col-2 fw-500">Link</span>
            <p class="fw-300">{{ projectData.name }}</p>
          </li>
        </ul>
      </div>
      <div data-aos="fade-up" data-aos-delay="1500" data-aos-duration="2000">
        <h6>Visit</h6>
        <button type="button">
          <a :href="projectData.link">바로가기</a>
        </button>
        <button type="button">
          <a :href="projectData.git">Git</a>
        </button>
      </div>
    </div>
  </div>

  <!-- 오프캔버스 -->
  <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
     <h1>PORTFOLIO</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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

export default {
  props: ["id"],
  data() {
    return {
      projectData: null,
    };
  },
  created() {
    this.fetchProject();
  },
  methods: {
    fetchProject() {
      const foundProject = Project.find((item) => item.id === Number(this.id));
      this.projectData = foundProject || null;
    },
  },
};
</script>
