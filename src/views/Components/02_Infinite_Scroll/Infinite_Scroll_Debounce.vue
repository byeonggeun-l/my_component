<template>
  <div
    id="scroll_main"
  >
    <div
      id="scroll"
      ref="refScroll"
      class="loading"
    >
      <ul
        id="list" 
        ref="refList"
      />
      <div
        id="fetchMore" 
        ref="refFetchMore"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { v4 as uuidv4 } from "uuid";
import { LoremIpsum } from "lorem-ipsum";
import { debounce } from './util.js'

export default {
  name: "InfiniteScrollDebounce",
  components: {
    // HelloWorld
  },
  data(){
    return {
      page: 0,
      list:[],
      ITEMS_PER_PAGE:20,
      lorem:null,
      listElem:null,
      timeOut:null,
      debounce:null,
    };
  },
  created(){
    // 페이지 이동 시 스크롤 초기화.
    window.scrollTo(0, 0);
  },
  mounted() {
    ///////////////////////////////////
    this.lorem = new LoremIpsum({
      'wordsPerSentence': { min: 10, max: 30 },
    });
    ///////////////////////////////////
    this.listElem = this.$refs.refList;
    ///////////////////////////////////
    this.debounce = debounce(this.onScroll, 1000);






    //Default Call
    ///////////////////////////////////
    this.loadMore();
    ///////////////////////////////////
    // this.addDebounceScrollListner();
    document.addEventListener("scroll", this.debounce);
    // document.addEventListener("scroll", this.onScroll);
    // const myFunction = _.debo
    ///////////////////////////////////






  },
  unmounted() {
    ///////////////////////////////////
    document.removeEventListener("scroll", this.debounce);
    ///////////////////////////////////
  },
  methods: {
    // onScroll
    // 스크롤이 페이지 맨 하단에 위치해있는지 감지를 한다.
    // 맨 하단에 위치해 있을 경우 loadMore 메서드를 호출한다.
    onScroll(){
      console.log('Call onScroll()');
      const scrollHeight = document.getElementsByTagName("html")[0].offsetHeight;
      const scrollTop = window.top.pageYOffset;
      const clientHeight = window.top.innerHeight;
      if (scrollTop + clientHeight === scrollHeight) {
        this.loadMore();
      }
    },
    // onScroll
    // 어떤 부분에 위치해 있을지 타겟을 잡는다.
    // 페이지가 0일 경우 당연히 app 의 위치에,
    // 0이 아닌 경우 맨 아래에 loading 이 위치해 있어야 하므로
    // fetchMore 위치에 loading 이 나오게 한다.
    // 또한 renderList 를 호출한다.
    async loadMore(){      
      const app = this.$refs.refScroll;
      const fetchMoreTrigger = this.$refs.refFetchMore;

      const target = this.page ? fetchMoreTrigger : app;
      target.classList.add("loading");
      await this.renderList(this.page++);
      target.classList.remove("loading");
    },
    // renderList()
    // dummyFetcher 함수를 이용하여
    // 서버로부터 데이터를 받아오는 느낌을 들게 하기 위해
    // 딜레이 및 getList 함수를 호출시키고,
    
    async renderList(page){
      const list = await this.dummyFetcher(this.getList, page);      

      const frag = document.createDocumentFragment();
      list.forEach((item) => frag.appendChild(this.renderItem(item)));
      this.listElem.appendChild(frag);
    },



    dummyFetcher(method, args){
      return new Promise(
        resolve => {
          this.timeOut = setTimeout(() => {
            resolve(method(args))
          }, 100);
        }
      );

    },




    
    getList(page = 0){
      const list = [];
      list[page] = this.listBuilder(page);
      return list[page];
    },
    
    listBuilder(page){
      return Array.from({ length: this.ITEMS_PER_PAGE }).map((_, i) =>
        this.itemBuilder(page * this.ITEMS_PER_PAGE + i + 1)
      );
    },


    renderItem({ id, no, text }){
      const li = document.createElement("li");
      li.insertAdjacentHTML(
        "beforeend",
        `
      <div class="no">${no}</div>
      <div class="content">
        <div class="_id">${id}</div>
        <div class="text">${text}</div>
      </div>
    `
      );
      return li;
    },





    itemBuilder(no){
      const obj = {
        id: uuidv4(),
        no: no,
        text: this.lorem.generateWords()
      }
      return obj;
    },
  }
};
</script>

<style>
#scroll_main {
  text-align: left;
}
#scroll {
  position: relative;
  padding: 10px 10px 0;
}
#scroll.loading {
  height: 100vh;
}
#scroll.loading:after {
  content: "... 로딩중 ...";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#list {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: solid 1px #ccc;
}

#fetchMore {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 10px;
  display: none;
  text-align: center;
  line-height: 28px;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
  background-color: #ff9;
}

#fetchMore.loading {
  display: block;
}
li {
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px #ccc;
  font-size: 0.8em;
  color: #999;
}
.no {
  flex: 0 0 30px;
  padding: 10px 5px;
  text-align: center;
  place-self: center;
}
.content {
  padding: 10px 5px;
  border-left: 1px solid #ccc;
}
.text {
  font-size: 1em;
  color: #000;
  margin-top: 5px;
  line-height: 1.5em;
}
</style>
