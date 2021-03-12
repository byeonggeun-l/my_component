<template>
  <section class="notice">
    <div class="notice-line">
      <div class="bg-left" />
      <div class="bg-right" />
      <div class="inner">
        <div class="inner__left">
          <h2>공지사항</h2>
          <swiper
            :direction="'vertical'"
            :autoplay="true"
            :loop="true"
          >
            <swiper-slide>
              <a href="javascript:void(0)">
                크리스마스 & 연말연시 스타벅스 매장 영엽시간 변경 안내
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="javascript:void(0)">
                [당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="javascript:void(0)">
                스타벅스커피 코리아 애플리케이션 버전 업데이트 안내
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="javascript:void(0)">
                [당첨자 발표] 뉴이어 전자영수증 이벤트
              </a>
            </swiper-slide>
          </swiper>
          <a
            href="javascript:void(0)"
            class="notice-line__more"
          >
            <div class="material-icons">
              add_circle
            </div>
          </a>
        </div>
        <div class="inner__right">
          <h2>스타벅스 프로모션</h2>
          <div
            class="toggle-promotion"
            @click="closePromotion"
          >
            <div 
              v-if="isHidePromotion" 
              class="material-icons"
            >
              upload
            </div>
            <div 
              v-else-if="!isHidePromotion" 
              class="material-icons"
            >
              download
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="refPromotion"
      class="promotion"
    >
      <swiper
        :slides-per-view="3"
        :loop="true"
        :space-between="10"
        :centered-slides="true"
        :pagination="{ clickable: true }"
        navigation
      >
        <swiper-slide>
          <img
            src="@/assets/images/promotion_slide1.jpg"
            alt="2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!"
          >
          <a
            href="javascript:void(0)"
            class="btn"
          >
            자세히 보기
          </a>
        </swiper-slide>
        <swiper-slide>
          <img
            src="@/assets/images/promotion_slide2.jpg"
            alt="기간 내 스타벅스 카드 e-Gift를 3만원 이상 선물 시, 아메리카노 e-쿠폰을 드립니다."
          >
          <a
            href="javascript:void(0)"
            class="btn"
          >
            자세히 보기
          </a>
        </swiper-slide>
        <swiper-slide>
          <img
            src="@/assets/images/promotion_slide3.jpg"
            alt="2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!"
          >
          <a
            href="javascript:void(0)"
            class="btn"
          >
            자세히 보기
          </a>
        </swiper-slide>
        <swiper-slide>
          <img
            src="@/assets/images/promotion_slide4.jpg"
            alt="2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!"
          >
          <a
            href="javascript:void(0)"
            class="btn"
          >
            자세히 보기
          </a>
        </swiper-slide>
        <swiper-slide>
          <img
            src="@/assets/images/promotion_slide5.jpg"
            alt="2021 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!"
          >
          <a
            href="javascript:void(0)"
            class="btn"
          >
            자세히 보기
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>  
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


export default {
  name: "NoticeSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isHidePromotion:false,
    }
  },
  mounted() {
    const buttonPrev = document.createElement('div');
    buttonPrev.className = "material-icons"
    const buttonNext = document.createElement('div');
    buttonNext.className = "material-icons"

    const buttonTextPrev = document.createTextNode('arrow_back');
    const buttonTextNext = document.createTextNode('arrow_forward');
    buttonPrev.appendChild(buttonTextPrev);
    buttonNext.appendChild(buttonTextNext);

    document.getElementsByClassName("swiper-button-prev")[0].appendChild(buttonPrev);
    document.getElementsByClassName("swiper-button-next")[0].appendChild(buttonNext);

    // let insertElement = document.getElementsByClassName("swiper-button-prev");
    // console.log(insertElement);
    // console.log(insertElement.childNodes[0]);
    // insertElement.insertBefore(buttonPrev, insertElement);
  },
  methods: {
    prev() {
      this.$refs.swiper.$el.slideNext()
    },
    next() {
      this.$refs.swiper.$el.slideNext()
    },
    closePromotion() {
      this.isHidePromotion = !this.isHidePromotion;
      const isHidePromotion = this.isHidePromotion;
      console.log(this.isHidePromotion);
      const el = this.$refs.refPromotion;
      if (isHidePromotion) {
        el.classList.add('hide');
      } else {
        el.classList.remove('hide');
      }
    },
  },
}
</script>

<style>

.notice .notice-line {
  position:relative;
  
}

.notice .notice-line .bg-left {
  position: absolute;
  top: 0;
  left: 0;  
  width: 50%;
  height: 100%;
  background-color: #333;
}
.notice .notice-line .bg-right {
  position: absolute;
  top: 0;
  right: 0;  
  width: 50%;
  height: 100%;
  background-color: #f6f5ef;
}
.notice .notice-line .inner {
  height: 62px;  
  display: flex;
}
.notice .notice-line .inner__left {
  width: 60%;
  height: 100%;
  background-color: #333;
  display:flex;
  align-items: center;
}
.notice .notice-line .inner__left h2 {
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    margin-right: 20px;
}
.notice .notice-line .inner__left .swiper-container {
  height: 62px;
  flex-grow: 1;
}
.notice .notice-line .inner__left .swiper-slide {
  height: 62px;
  display: flex;
  align-items: center;
}
.notice .notice-line .inner__left .swiper-slide a {
  color: #fff;
}
.notice .notice-line .inner__left .notice-line__more {
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notice .notice-line .inner__left .notice-line__more .material-icons {
  color: #fff;
  font-size: 30px;
}
.notice .notice-line .inner__right {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.notice .notice-line .inner__right h2 {
  font-size: 17px;
  font-weight: 700;
}

.notice .notice-line .inner__right .toggle-promotion {
  width: 62px;
  height: 62px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.notice .notice-line .inner__right .toggle-promotion .material-icons {
  font-size: 30px;
}

.notice .promotion {
  /* width: auto; */
  height: 693px;
  background-color: #f6f5ef;
  position: relative;
  transition: height .4s;
  overflow: hidden;
}

.notice .promotion.hide {
  height: 0;
}

.notice .promotion .swiper-container {
  width: calc(819px * 3 + 20px);
  height: 700px;
  position: absolute;
  top: 40px;
  left: 50%;
  margin-left: calc((819px * 3 + 20px) / -2);
}

.notice .promotion .swiper-slide {
  opacity: .5;
  position: relative;
}

.notice .promotion .swiper-slide-active {
  opacity: 1;
}

.notice .promotion .swiper-slide .btn {
  position: absolute;
  bottom: 140px;
  left: 0;
  right: 0;
  margin: auto;
  display:none;
}
.notice .promotion .swiper-pagination {
  bottom: 80px;
}
.notice .promotion .swiper-pagination .swiper-pagination-bullet {
  background-color: transparent;
  background-image: url('~@/assets/images/promotion_slide_pager.png');
  width: 12px;
  height: 12px;
  margin-right: 6px;
  outline:none;
}
.notice .promotion .swiper-pagination .swiper-pagination-bullet:last-child {
  margin-right: 0px;
}
.notice .promotion .swiper-pagination .swiper-pagination-bullet-active { 
  background-image: url('~@/assets/images/promotion_slide_pager_on.png');
}

.notice .promotion .swiper-slide-active .btn { 
  display:block;
}

.notice .promotion .swiper-button-next,
.notice .promotion .swiper-button-prev {
  width: 42px;
  height:42px;
  border: 2px solid #333;
  border-radius: 50%;
  position: absolute;
  top: 300px;
  z-index: 2;
  cursor:pointer;
  outline:none;
  color:black;
  font-weight:1200px;

}
.notice .promotion .swiper-button-next {
  width: 42px;
  height:42px;
  border: 2px solid #333;
  border-radius: 50%;
  position: absolute;
  top: 300px;
  z-index: 2;
  cursor:pointer;
  outline:none;
  display:flex;
  justify-content: center;
  align-items:center;
  transition: .4s;
}

.notice .promotion .swiper-button-prev{
  left: 50%;
  margin-left: -480px;
}
.notice .promotion .swiper-button-next{
  right: 50%;
  margin-right: -480px;
}
.swiper-button-prev:after, 
.swiper-button-next:after {
  display:none;
}
.swiper-button-next:after, 
.swiper-button-next:after {
  display:none;
}
.notice .promotion .swiper-button-next:hover,
.notice .promotion .swiper-button-prev:hover {
  background-color: #333;
  color: #fff;
}
</style>