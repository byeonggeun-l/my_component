<template>
  <section class="visual">
    <div class="inner">
      <div class="title">
        <FadeElement 
          :el-tag-name="'img'"
          :img-tag-src="'images/starbucks_example/visual_title.png'"
          :img-tag-alt="'STARBUCKS DELIGHTFUL START TO THE YEARS'"
          :fade-sec="1"
        />
        <FadeElement 
          :el-tag-name="'a'"
          :class-list="'btn btn--brown'"
          :a-tag-inner-text="'자세히 보기'"
          :fade-sec="1"
        />
      </div>
      <div>
        <FadeElement 
          :el-tag-name="'img'"
          :class-list="'cup1 image'"
          :img-tag-src="'images/starbucks_example/visual_cup1.png'"
          :img-tag-alt="'NEW OATMEAL LATTE'"
          :fade-sec="2"
        />
        <FadeElement 
          :el-tag-name="'img'"
          :class-list="'cup1 text'"
          :img-tag-src="'images/starbucks_example/visual_cup1_text.png'"
          :img-tag-alt="'오트밀 라떼'"
          :fade-sec="2"
        />
      </div>
      <div>
        <FadeElement 
          :el-tag-name="'img'"
          :class-list="'cup2 image'"
          :img-tag-src="'images/starbucks_example/visual_cup2.png'"
          :img-tag-alt="'NEW STARBUCKS CARAMEL CRUMBLE MOCHA'"
          :fade-sec="3"
        />
        <FadeElement 
          :el-tag-name="'img'"
          :class-list="'cup2 text'"
          :img-tag-src="'images/starbucks_example/visual_cup2_text.png'"
          :img-tag-alt="'스타벅스 카라멜 크럼블 모카'"
          :fade-sec="3"
        />
      </div>
      <div>
        <FadeElement
          :el-tag-name="'img'"
          :class-list="'spoon'"
          :img-tag-src="'images/starbucks_example/visual_spoon.png'"
          :img-tag-alt="'Spoon'"
          :fade-sec="4"
        />
      </div>
    </div>
  </section>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import FadeElement from '@/views/Components/Example/FadeElements.vue'

export default {
  name: "VisualSection",
  components:{
    FadeElement,
  },
  mounted() {
  },
  created() {    
    window.scrollTo(0, 0);
  }
}
</script>

<style>
.visual {
    background-image: url("../../../assets/images/visual_bg.jpg");
    margin-top: 120px;
    background-position: 50%;

}


.inner {
    width: 1100px;
    margin: 0 auto;
    position: relative;
}

.visual .inner {
  height: 646px;
}

.visual .fade-in {
    opacity: 0;
}

.visual .title {
    position: absolute;
    top: 88px;
    left: -10px;

}

.visual .title .btn {
    position:absolute;
    top: 259px;
    left: 173px;
}

.visual .cup1.image {
    position: absolute;
    bottom: 0;
    right: -47px;
}

.visual .cup1.text {
    position: absolute;
    top: 38px;
    right: 171px;
}

.visual .cup2.image {
    position: absolute;
    bottom: 0;
    right: 162px;
}

.visual .cup2.text {
    position: absolute;
    top: 321px;
    right: 416px;
}

.visual .spoon {
    position: absolute;
    bottom: 0;
    left: 275px;
}

.btn {
    width: 130px;
    padding: 10px;
    border: 2px solid #333;
    border-radius: 4px;
    color: #333;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    display: block;
    transition: .4s;
}

a{
    text-decoration: none;
}

.btn.btn--brown {
    color: #592818;
    border-color: #592818;
}
.btn.btn--brown:hover {
    color: #FFF;
    background-color: #592B18;
}



</style>