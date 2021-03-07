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
export default {
  name: "ScrollSpyIntersectionObserver",
  components: {
    // HelloWorld
  },
  data() {
    return {
      navElem: null,
      navItems: null,
      contentsElem: null,
      contentItems: null,
    };
  },
  created() {
    // 페이지 이동 시 스크롤 초기화.
    window.scrollTo(0, 0);
  },  
  mounted() {
    this.navElem = this.$refs.refNav;
    this.navItems = Array.from(this.navElem.children);
    this.contentsElem = this.$refs.refContents;
    this.contentItems = Array.from(this.contentsElem.children);

    const scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        const { target } = entries.find(entry => entry.isIntersecting) || {};
        const targetIndex = this.contentItems.indexOf(target);
        Array.from(this.navItems).forEach((e, i) => {
          if (i === targetIndex) {
            e.classList.add('on');
          } else {
            e.classList.remove('on');
          }
        });
      },
      {
        threshold: 0.5,        
      }
    );
    this.contentItems.forEach((item) => scrollSpyObserver.observe(item));



  },
  unmounted() {
  },
  methods:{
    clickNav(e) {
      const targetElem = e.target;
      if (targetElem.tagName === "BUTTON") {
        const targetIndex = this.navItems.indexOf(targetElem.parentElement);
        this.contentItems[targetIndex].scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    },
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