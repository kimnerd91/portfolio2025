<template>
  <div id="sidebar" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
    <div>
      <h1>PORTFOLIO</h1>
    </div>
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
</template>
<script>
import AOS from "aos";
AOS.init();
export default {
    
}
</script>
