<template>
  <div class="poWrap d-flex col-xl-12">
  <Sidebar />
    <div class="">  
      <Header />
      <div>
        <router-view></router-view>
      </div>
    </div>
 
  </div>
</template>
<script>
/* eslint-disable */
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar.vue"
import AOS from "aos";
AOS.init();
export default {
  name: "Main",
  components: {
    Header,
    Sidebar
  },
  data() {
    return {
      activeTab: "career",
      hoveredIndex: null,

    };
  },

  mounted() {
    // Initialize AOS on page load
    AOS.init();
  },

};
</script>
