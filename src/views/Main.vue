<template>

  <div class="poWrap d-flex col-xl-12">
  <Sidebar />
    <div class="col-12 all" >  
      <Header v-if="!$route.meta.hideHeader" />
      <div>
        <router-view></router-view>
      </div>
    </div>
     </div> <!-- Close the div for poWrap -->
 
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
}
</script>
