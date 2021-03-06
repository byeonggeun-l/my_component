<template>
  <div id="scroll_spy_section">
    <ul
      id="nav"
      ref="refNav"
      @click="clickNav"
    >
      <li class="on">
        <button>1</button>
      </li>
      <li><button>2</button></li>
      <li><button>3</button></li>
      <li><button>4</button></li>
      <li><button>5</button></li>
      <li><button>6</button></li>
      <li><button>7</button></li>
      <li><button>8</button></li>
    </ul>
    <div
      id="contents"
      ref="refContents"
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  </div>
</template>

<script>
import { throttle } from './util.js'
export default {
  name: "ScrollSopyThrottle",
  components: {
    // HelloWorld
  },
  data(){
    return {
      navElem:null,
      navItems:null,
      contentsElem:null,
      contentItems:null,
      offsetTops:[''],
      throttle:null,
    };
  },
  created(){
    // 페이지 이동 시 스크롤 초기화.
    window.scrollTo(0, 0);
  },  
  mounted() {
    // Init
    this.navElem = this.$refs.refNav;
    this.navItems = Array.from(this.navElem.children);
    this.contentsElem = this.$refs.refContents;
    this.contentItems = Array.from(this.contentsElem.children);
    // ========================================================
    // this.contentItems 은 #content > div 요소들의 값들이 들어있다.
    // offsetTop 에는 부모를 기준으로한 엘리먼트의 좌표값이 들어있다.
    // 그렇다면 첫번째 요소는 당연히 부모로부터 맨 아래에 있으므로 0에 
    // 위치해 있을 것이다.
    // ========================================================
    // clientHeight 는 엘리먼트의 내부 높이를 픽셀로 반환한다.
    // ========================================================
    this.offsetTops = this.contentItems.map((elem) => {
      const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
      return [ofs - clh / 2, ofs + clh / 2];
    });
    // Init

    // Add Event
    // 각 #contents > div 요소들의 시작 위치, 끝 위치와
    // 스크롤 위치를 비교하여 사용자가 현재 어느 위치를
    // 스크롤 하고 있는지 감지를 한다.
    this.throttle = throttle(this.setFocusElement, 300);
    window.addEventListener("scroll", this.throttle);
    // window.addEventListener("scroll", this.setFocusElement);
    // 강좌에서는 윈도우 크기를 변경하지 않았지만
    // 윈도우 크기를 변경을 하는 사용자들을 위해
    // 윈도우 크기 변경 이벤트를 감지하고,
    // 그때마다 요소 크기들을 다시 셋팅해야한다.
    window.addEventListener("resize", this.resetElementPosition);
    // Add event

  },
  unmounted(){
    ///////////////////////////////////
    document.removeEventListener("scroll", this.throttle);
    document.removeEventListener("resize", this.resetElementPosition);
    ///////////////////////////////////
  },
  methods:{
    // 클릭한 요소를 포함하고 있는 
    // li 요소를 찾아서
    // scrollIntoView 내장 함수를 이용해서
    // 스크롤 한다.
    clickNav(e){
      const targetElem = e.target;
      if (targetElem.tagName === "BUTTON") {
        const targetIndex = this.navItems.indexOf(targetElem.parentElement);
        this.contentItems[targetIndex].scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    },
    resetElementPosition(){
      this.offsetTops = this.contentItems.map((elem) => {
        const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
        return [ofs - clh / 2, ofs + clh / 2];
      });
      this.setFocusElement();
    },
    setFocusElement(){
      console.log('asdf');
      const scrollTop = document.documentElement.scrollTop;
      const targetIndex = this.offsetTops.findIndex(([from, to]) =>(
        // scrollTop >= from && scrollTop < to
        scrollTop >= from && scrollTop < to
      ));
      Array.from(this.navItems).forEach((c, i) => {
        if(i !== targetIndex) c.classList.remove('on');
        else c.classList.add('on');
      })
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#nav {
  position: fixed;
  display: flex;
  flex-direction: row;
  left: 0;
  top: 0;
  right: 0;
  border-bottom: 1px solid #000;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #fff8;
  color: #999;
  overflow: hidden;
}
#nav li {
  position: relative;
  flex: 1;
  text-align: center;
}
#nav li:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-left: solid 1px #000;
}
#nav li:first-child::before {
  border: 0;
}
#nav button {
  display: block;
  line-height: 30px;
  width: 100%;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
}
#nav button:hover {
  background-color: #fffc;
}
#nav li.on button {
  background-color: #888;
  color: #fff;
  font-weight: bold;
  font-size: 1.2em;
}

#contents > div {
  height: 100vh;
  line-height: 100vh;
  text-align: center;
  font-size: 15em;
}
#contents > div:nth-child(1) {
  background-color: #f99;
}
#contents > div:nth-child(2) {
  background-color: #fc9;
}
#contents > div:nth-child(3) {
  background-color: #ff9;
}
#contents > div:nth-child(4) {
  background-color: #afa;
}
#contents > div:nth-child(5) {
  background-color: #5cf;
}
#contents > div:nth-child(6) {
  background-color: #48c;
}
#contents > div:nth-child(7) {
  background-color: #a7a;
}
#contents > div:nth-child(8) {
  background-color: #a9a;
}

</style>