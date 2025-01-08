<template>
  <div class="poWrap mx-auto col-xl-12">
    <Header />
    <div class="mainWrap col-xl-12 d-flex">
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
        <div class="animated-bg" :style="bgStyle" v-if="activeTab === 'portfolio'">
        <a :href="currentLink">
        <img :key="currentImg" :src="currentImg" alt="" data-aos="fade-up" class="rotate-3d" />
        </a>
          
        </div>
        <div v-if="activeTab === 'career'" class="d-flex flex-column careerLeft">
          <div class="info">
            <img
              src="https://sajinkwan.com/wp-content/uploads/2018/11/%EA%B0%95%EB%8F%8C%EC%9D%B4_%EC%A6%9D%EB%AA%85.jpg"
              alt=""
            />
            <h2>김동훈 / Web Publisher</h2>
            <p class="fw-400">남 / 1991 / 34세</p>
          </div>
          <div class="accordion" id="accordionExample">
           <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  자기소개
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    안녕하세요, 제 이름은 김동훈이며, 2020년부터 현재까지 약 4년간 웹
                    퍼블리셔로 활동하고 있습니다. <br> <br>
                    첫 번째 회사인 BMC Co., Ltd.에서는 주로
                    WordPress를 사용하여 간단한 코딩 작업, 유지보수, 고객 서비스 업무를
                    담당했습니다. <br> <br> 현재는 2SBREAKERS에서 전반적인 레이아웃 디자인, 기획,
                    퍼블리싱을 맡고 있으며,  <br>일부 프론트엔드 작업도 진행하고 있습니다. <br> <br>
                    그동안 다양한 프로젝트를 독립적으로 진행하며 여러 클라이언트와
                    협업한 경험이 있습니다.  <br> <br>귀사에 입사하게 된다면, 이전 회사에서의 경험을
                    바탕으로 더 높은 수준의 기술 개발과 함께 회사와 함께 성장해 나가고
                    싶습니다. <br> <br> 감사합니다.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Skills
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="iconDiv">
                    <ul>
                      <li v-for="(ccc, i) in skills" :key="i">
                        <img :src="ccc.icon" alt="" />
                      </li>
                    </ul>
                  </div>
                  <ul class="textUl">
                    <li v-for="(ccc, i) in skills" :key="i">
                      <p>{{ ccc.text }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
        <nav>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                :class="{ active: activeTab === 'career' }"
                @click="setActiveTab('career')"
              >
                CAREER
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                :class="{ active: activeTab === 'portfolio' }"
                @click="setActiveTab('portfolio')"
              >
                PORTFOLIO
              </a>
            </li>
          </ul>
        </nav>
        <div id="career" v-if="activeTab === 'career'">
          <ul>
            <li v-for="(bbb, i) in career" :key="i">
              <div class="careerDiv d-flex align-items-start">
                <i class="fa-solid fa-circle listDeco"></i>
                <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 d-flex flex-column gap-1">
                  <h2 class="fw-700">{{ bbb.title }}</h2>
                  <h6 class="fw-500"><i class="fa-solid fa-briefcase"></i> {{ bbb.time }}</h6>
                  <h6 class="fw-500"><i class="fa-solid fa-money-bill"></i>￦ {{ formatPrice(bbb.cash )}}</h6>
                  <h6 class="fw-500"><i class="fa-solid fa-screwdriver-wrench"></i>{{ bbb.work }}</h6>
                  <p class="fw-700">주요 프로젝트: {{ bbb.text }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div id="portfolio" v-if="activeTab === 'portfolio'">
          <ul class="PTUl">
            <li v-for="(aaa, i) in PTList" :key="i" @click="hoveredIndex = i">
              <div class="listDiv d-flex align-items-start justify-content-around">
                <i class="fa-solid fa-circle listDeco"></i>
                <div class="col-xl-8 d-flex flex-column gap-1">
                  <h2 class="fw-bold">{{ aaa.title }}</h2>
                  <div class="progress-container d-flex gap-0">
                    <h6 class="col-xl-2 fw-700">기여도</h6>
                    <div class="custom-progress col-xl-10 col-lg-10 col-md-10 col-sm-9 col-9">
                      <div
                        class="custom-progress-fill"
                        :style="{
                          width: aaa.percent + '%',
                          backgroundColor: getBarColor(aaa.percent),
                        }"
                      >
                        {{ aaa.percent }}%
                      </div>
                    </div>
                  </div>
                  <h6 class="fw-400">
                    <p class="d-flex gap-3">
                      <i
                        v-for="(icon, iconIndex) in aaa.icons"
                        :key="iconIndex"
                        :class="icon"
                      ></i>
                    </p>

                    {{ aaa.text }}
                  </h6>
                </div>
                <button type="button" class="col-xl-2">
                  <a :href="aaa.link">VIEW</a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import Header from "@/components/Header";
import TLOP from "@/assets/img/THELIFEOFPABLO.svg";
import KB from "@/assets/img/img.png";
import BPLE from "@/assets/img/unnamed (1).png";
import CIRCULAR from "@/assets/img/E6535B86714D47A68399B49BDB4EFCD4.png";
import CERTILIFE from "@/assets/img/logo_4x.png";
import onnury from "@/assets/img/onnuryLOGO0.png";
import Valmax from "@/assets/img/valmax-removebg-preview.png";
import gnet from "@/assets/img/gnet.png"
import AOS from "aos";
AOS.init();
export default {
  name: "Main",
  components: {
    Header,
  },
  data() {
    return {
      activeTab: "career",
      hoveredIndex: null,
      PTList: [
        {
          title: "2SMall (The Life of Pable)",
          percent: 100,
          text:
            "자체 쇼핑몰 제작, 웹-태블릿-모바일 반응형 홈페이지, vue.js 활용. 개발중단 후 미출시.Figma를 통한 Layout 및 디자인 및 로고제작.",
          icons: ["fab fa-vuejs", "fas fa-laptop", "fas fa-mobile-alt", "fab fa-figma"],
          link: "/",
          img: TLOP,
          bgColor: "#dddddd",
        },
        {
          title: "KB 스타드림 쿠폰이벤트",
          percent: 100,
          text: "KB국민은행 쿠폰이벤트 제작, 크로스브라우징 및 반응형 웹앱.vue.js 활용.",
          icons: ["fab fa-vuejs", "fas fa-laptop", "fas fa-mobile-alt"],
          link: "https://play.google.com/store/apps/details?id=com.kbstar.kbbank&hl=ko",
          img: KB,
          bgColor: "#60584C",
        },
        {
          title: "온누리가전몰",
          percent: 100,
          text:
            "온누리 쇼핑몰 제작, 웹-태블릿-모바일 반응형 홈페이지, vue.js 활용.Figma를 통한 Layout 및 디자인.",
          icons: ["fab fa-vuejs", "fas fa-laptop", "fas fa-mobile-alt", "fab fa-figma"],
          link: "http://onnurihomeapp.co.kr",
          img: onnury,
          bgColor: "#FFBF97",
        },
        {
          title: "CERTILIFE",
          percent: 75,
          text: "NFT 인증서 서비스, 앱 퍼블리싱 및 어드민 페이지 제작, Vue.js 활용",
          icons: ["fab fa-vuejs", "fas fa-laptop", "fas fa-mobile-alt"],
          link: "https://apps.apple.com/kr/app/%EC%84%9C%ED%8B%B0%EB%9D%BC%EC%9D%B4%ED%94%84%EB%B3%91%EC%9B%90/id6450404968",
          img: CERTILIFE,
          bgColor: "#FFF1AC",
        },
         {
          title: "G-ON THE ROAD",
          percent: 75,
          text: "지넷시스템의 블랙박스 판매 사이트, WORDPRESS 활용 및 반응형 웹페이지 구현",
          icons: ["fab fa-wordpress", "fas fa-laptop", "fas fa-mobile-alt"],
          link: "https://www.g-on-the-road.com/",
          img: gnet,
          bgColor: "#f9f9f9",
        },
         {
          title: "VALMAX기술",
          percent: 100,
          text: "발맥스기술 공식홈페이지, WORDPRESS 활용 및 반응형 웹페이지 구현",
          icons: ["fab fa-wordpress", "fas fa-laptop", "fas fa-mobile-alt"],
          link: "/http://www.valmax.co.kr/",
          img: Valmax,
          bgColor: "#EAC6C6",
        },
      ],
      career: [
        {
          title: "2SBREAKERS",
          time: "2022.04 ~ 2024.12",
          cash: 33000000,
          work: "Web Publish, Design, Front-End",
          text: "써티라이프, 온누리가전몰, KB스타드림",
        },
        {
          title: "주식회사 BMC",
          time: "2020.12 ~ 2021.11",
          cash: 29000000,
          work: "Web Publish, Design, Wordpress, CS",
          text: "지넷시스템, 발맥스기술",
        },
      ],
      skills: [
        {
          icon:
            "https://static-00.iconduck.com/assets.00/vue-js-icon-2048x1766-btrgkrhi.png",
          text: "Vue.JS",
        },
        {
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
          text: "HTML",
        },
        {
          icon: "https://img.icons8.com/color/512/sass.png",
          text: "SCSS",
        },
        {
          icon:
            "https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png",
          text: "JAVASCRIPT",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
          text: "Wordpress",
        },
        {
          icon:
            "https://w7.pngwing.com/pngs/54/524/png-transparent-figma-app-logo-tech-companies-thumbnail.png",
          text: "FIGMA",
        },
        {
          icon:
            "https://w7.pngwing.com/pngs/548/34/png-transparent-adobe-photoshop-macos-bigsur-icon-thumbnail.png",
          text: "PHOTOSHOP",
        },
      ],
    };
  },
  computed: {
    currentImg() {
      return this.hoveredIndex !== null
        ? this.PTList[this.hoveredIndex].img
        : this.PTList[0].img; // 기본 이미지
    },
    currentLink() {
      return this.hoveredIndex !== null
        ? this.PTList[this.hoveredIndex].link
        : this.PTList[0].link; // 기본 이미지
    },
    bgStyle() {
      const gradient =
        this.hoveredIndex !== null
          ? this.PTList[this.hoveredIndex].bgColor
          : "transparent"; // Default color when no hover
      return {
        background: gradient,
        animation: this.hoveredIndex !== null ? "fill-bg 1s ease-in-out" : "none",
      };
    },
  },
  watch: {
    hoveredIndex() {
      // Reinitialize AOS whenever the hovered index changes
      this.$nextTick(() => {
        AOS.refresh();
      });
    },
  },
  mounted() {
    // Initialize AOS on page load
    AOS.init();
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    getBarColor(percent) {
      if (percent < 50) return "#f44336"; // Red
      if (percent < 75) return "#ff9800"; // Orange
      return "#0FFF3B"; // Green
    },
    formatPrice(cash) {
    // Convert the price to a string and add commas

    return cash.toLocaleString();
  }
  },
};
</script>
