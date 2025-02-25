<template>
  <div class="project" data-aos="fade-right">
    <ul class="col-12 projectUl d-flex" data-aos="fade-right" data-aos-duration="1200">
      <li class="col-4" v-for="(pj, i) in Project" :key="i">
        <router-link to="#">
          <div>
            <div class="imgDiv">
              <img
                :src="Project[i].img"
                alt=""
              />
            </div>
            <div class="projectDiv">
              <span>{{Project[i].responsive}}</span>
              <h3>{{Project[i].name}}</h3>
              <p>
                {{Project[i].detail}}
              </p>
              <div class="projectDetail">
                <span>{{Project[i].company}}</span>
                <p>{{Project[i].date}}</p>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import AOS from "aos";
AOS.init();
export default {
  name: "",
  data() {
    return {
      Project: [
        {
          responsive: "Web & Mobile (Vue.js)",
          name: "TheLifeofPable 쇼핑몰 초기제작 (미완성)",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "차기 쇼핑몰 제작을 위한 초기 세팅 작업 및 디자인, 퍼블리싱",
          company: "TLOP & 상상브레이커즈",
          date: "2024.12"
        },
        {
          responsive: "Mobile (Vue.js)",
          name: "KB스타드림 쿠폰 이벤트 페이지 제작",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "KB스타드림의 스타드림 룰렛 이벤트를 위한 모바일 페이지를 메인으로 반응형 웹의 제작",
          company: "KB국민은행",
          date: "2024.10 ~ 2024.12"
        },
           {
          responsive: "Web & Mobile (node & HTML)",
          name: "서큘러랩스 렌탈 시스템 제작",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "SKT와 JYP에 공급한 서큘러랩스 렌탈시스템의 퍼블리싱",
          company: "CircularLaps",
          date: "2024.08 ~ 2024.10"
        },
         {
          responsive: "Web & Mobile (Vue.js)",
          name: "온누리가전몰",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "온누리가전몰의 반응형웹을 위한 디자인 및 퍼블리싱, 그리고 프론트엔드 개발 업무",
          company: "온누리가전몰",
          date: "2024.03 ~ 2024.09"
        },
        {
          responsive: "Web & Mobile (HTML/CSS3)",
          name: "비플페이 예약시스템 모듈제작",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "비플페이와 포스코 출장예약 시스템을 위한 모듈 디자인 제작 및 퍼블리싱",
          company: "비플페이",
          date: "2024.08"
        },
        {
          responsive: "Web & Mobile (Vue.js)",
          name: "온누리가전몰",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "온누리가전몰의 반응형웹을 위한 디자인 및 퍼블리싱, 그리고 프론트엔드 개발 업무",
          company: "온누리가전몰",
          date: "2024.03 ~ 2024.09"
        },
        {
          responsive: "Mobile (Vue.js)",
          name: "MUCA",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "실물카드와 연동되는 전용 음악 어플 MUCA의 퍼블리싱 및 초기 디자인 제작, 프론트엔드 개발",
          company: "상상브레이커즈",
          date: "2023.12 ~ 2024.02"
        },
        {
          responsive: "Web & Mobile (Vue.js)",
          name: "CC127",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "비트포트를 베이스로 개발한 EDM 전용 음악 사이트 초기제작 및 디자인",
          company: "상상브레이커즈",
          date: "2023.10 ~ 2023.12"
        },
        {
          responsive: "Web & Mobile (Vue.js)",
          name: "서티라이프 앱 어드민 개발",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "NFT를 활용한 보증서 앱, 서티라이프의 어드민 제작 및 사이트 구현 퍼블리싱과 프론트 개발",
          company: "서티라이프",
          date: "2023.01 ~ 2023.07"
        },
        {
          responsive: "Web & Mobile (Wordpress)",
          name: "지넷시스템의 지온더로드 웹 페이지 및 반응형웹 제작",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "지온더로드의 웹페이지 제작 및 반응형웹의 개발",
          company: "주식회사 BMC",
          date: "2021.05 ~ 2021.09"
        },
        {
          responsive: "Web & Mobile (Wordpress)",
          name: "Valmax기술 웹 페이지 및 반응형웹 제작",
          img: "https://www.creamhouse.net/upload/2024/10/22/s_3a8a3eda-afaa-43d7-a115-1985ca1a36d9_FC%EC%84%9C%EC%9A%B8%EC%87%BC%ED%95%91%EB%AA%B0.jpg",
          detail: "발맥스 기술의 홈페이지의 워드프레스 제작 및 UI 개선",
          company: "주식회사 BMC",
          date: "2020.11 ~ 2021.04"
        },

      ]
    }
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
}
</script>
