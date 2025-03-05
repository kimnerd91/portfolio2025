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
    <div class="home">
        <h1 data-aos="fade-up" data-aos-duration="300">P</h1>
        <h1 data-aos="fade-up" data-aos-duration="500">O</h1>
        <h1 data-aos="fade-up" data-aos-duration="700">R</h1>
        <h1 data-aos="fade-up" data-aos-duration="900">T</h1>
        <h1 data-aos="fade-up" data-aos-duration="1100">F</h1>
        <h1 data-aos="fade-up" data-aos-duration="1300">O</h1>
        <h1 data-aos="fade-up" data-aos-duration="1500">L</h1>
        <h1 data-aos="fade-up" data-aos-duration="1700">I</h1>
        <h1 data-aos="fade-up" data-aos-duration="1900">O</h1>
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
AOS.init();
export default {
    
}
</script>