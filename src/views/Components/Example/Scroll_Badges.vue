<template>
  <div class="main">
    <header>
      <div
        ref="refBadges"
        class="badges"
      >
        <div class="badge">
          <img
            src="@/assets/images/starbucks_example/badge1.jpg"
            alt="badge"
          >
        </div>
        <div class="badge">
          <img
            src="@/assets/images/starbucks_example/badge2.jpg"
            alt="badge"
          >
        </div>
      </div>
    </header>  
  </div>
</template>

<script>
import { throttle } from 'lodash';
import gsap from "gsap";

export default {
  name: "ScrollBadges",
  created() {
    // 페이지 이동 시 스크롤 초기화.
    window.scrollTo(0, 0);
  },
  mounted() {
    window.addEventListener('scroll', throttle(this.scrolling, 300));
  },
  methods:{
    scrolling() {
      if (window.scrollY > 500) {
        gsap.to(this.$refs.refBadges, .6, {
          opacity: 0,
          display: 'none',
        });
      } else {
        gsap.to(this.$refs.refBadges, .6, {
          opacity: 1,
          display: 'block',
        });
      }
    }
  }
}
</script>

<style scoped>
.main{
    height: 3000px;
}
header {
    position: fixed;
    top: 0;
    width:100%;
    height: 3000px;
}
.badges {
  position: absolute;
  top: 50px;
  right: 12px;
}
</style>