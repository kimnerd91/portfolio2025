<template>
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
      </div>
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
