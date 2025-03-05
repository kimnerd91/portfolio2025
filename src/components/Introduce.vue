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
  <div class="d-flex  introduce">
    <div class="col-3 left" data-aos="fade-right" data-aos-duration="1500">
      <div>
        <img src="@/assets/img/profile.png" alt="" />
      </div>
      <div>
        <h2 class="col-3">김동훈</h2>
        <p>Kim Dong-Hoon</p>
        <p>1991.09.10</p>
        <p>010.3270.2978</p>
        <p>kimnerd91@gmail.com</p>
      </div>
    </div>
    <div class="col-6 right">
      <div class="block" data-aos="fade-up" data-aos-duration="1500">
        <h4 class="fw-bold">About Me</h4>
        <div>
          <h6>4년차 퍼블리셔, 1년차 프론트엔드, 디자이너</h6>
          <p class="col-7 fw-300">
            4년간 두개의 회사에서 워드프레스, 순수 HTML, Vue.js로 여러 반응형 웹, 웹앱들을
            제작해왔습니다. 작은 프로젝트의 경우에는 직접 UI/UX 디자인을 맡아왔으며, 크고
            작은 프로젝트에서 20여가지 프로젝트를 진행해왔습니다.
          </p>
        </div>
      </div>
    <div class="block" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
        <h4 class="fw-bold">Education</h4>
        <div>
          <ul>
            <li class="d-flex align-items-center">
              <p class="col-2">2017.02</p>
              <p>순천향대 국제통상학과 졸업.</p>
            </li>
            <li class="d-flex align-items-center">
              <p class="col-2">2010.02</p>
              <p>서인천 고등학교 졸업.</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="block" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
        <h4 class="fw-bold">Work</h4>
        <div>
          <ul>
            <li class="d-flex align-items-center">
              <p class="col-2">2020.12</p>
              <p>주식회사 BMC 입사</p>
            </li>
            <li class="d-flex align-items-center">
              <p class="col-2">2021.12</p>
              <p>주식회사 BMC 퇴사.</p>
            </li>
            <li class="d-flex align-items-center">
              <p class="col-2">2021.03</p>
              <p>비긴잇 입사.</p>
            </li>
            <li class="d-flex align-items-center">
              <p class="col-2">2024.12</p>
              <p>비긴잇 퇴사.</p>
            </li>
          </ul>
        </div>
      </div>
     <div class="block skils" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
      <h4 class="fw-bold">Skills</h4>
      <ul>
        <li class="d-flex align-items-center">
          <p class="col-2">HTML</p>
          <p class="progress-bar-wrap flex-grow-1">
            <span class="progress-bar" style="width: 100%"></span>
          </p>
        </li>
        <li class="d-flex align-items-center">
          <p class="col-2">Css5</p>
          <p class="progress-bar-wrap flex-grow-1">
            <span class="progress-bar" style="width: 100%"></span>
          </p>
        </li>
        <li class="d-flex align-items-center">
          <p class="col-2">Vue.Js</p>
          <p class="progress-bar-wrap flex-grow-1">
            <span class="progress-bar" style="width: 80%"></span>
          </p>
        </li>
        <li class="d-flex align-items-center">
          <p class="col-2">Photoshop</p>
          <p class="progress-bar-wrap flex-grow-1">
            <span class="progress-bar" style="width: 50%"></span>
          </p>
        </li>
        <li class="d-flex align-items-center">
          <p class="col-2">Figma</p>
          <p class="progress-bar-wrap flex-grow-1">
            <span class="progress-bar" style="width: 50%"></span>
          </p>
        </li>
        <li class="d-flex align-items-center">
          <p class="col-2">Tailwind</p>
          <p class="progress-bar-wrap flex-grow-1">
            <span class="progress-bar" style="width: 50%"></span>
          </p>
        </li>
      </ul>
    </div>
    </div>
    
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
export default {
    
}
</script>