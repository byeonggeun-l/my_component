<template>
  <div>
    <Informatiom
      :component-name="'Context_Menu_Original'"
      :component-path="'/src/Components/01_Context_Menu/Context_Menu_Original'"
      :component-link="'context_menu_original'"
      :component-desc="
        `목록을 클릭하면 해당 아이템에 대한 컨텍스트메뉴가 나타나고,<br />
              메뉴를 선택하거나 그 외의 부분을 클릭하면 사라지는 팝오버 컴포넌트.<br />
              팝오버는 한 번에 하나만 보인다.`
      "
      :component-skills="`HTML, CSS, Javascript, EventListener, 이벤트 버블링.`"
    />
    <Informatiom
      :component-name="'Context_Menu_HTML_Details'"
      :component-path="
        '/src/Components/01_Context_Menu/Context_Menu_Context_Menu_HTML_Details'
      "
      :component-link="'context_menu_html_details'"
      :component-desc="
        `목록을 클릭하면 해당 아이템에 대한 컨텍스트메뉴가 나타나고,<br />
                메뉴를 선택하거나 그 외의 부분을 클릭하면 사라지는 팝오버 컴포넌트.<br />
                팝오버는 한 번에 하나만 보인다.`
      "
      :component-skills="
        `HTML(Details), CSS, Javascript, EventListener, 이벤트 버블링.<br />
            Context_Menu_Original 컴포넌트에서 숨겨져 있는 부분을 클릭 이벤트를 통해 보여지는<br />기능을
            HTML 에서 제공하는 DETAILS 요소를 통해 구현을 했다.<br />
            클릭한 요소에 대해서만 열기, 닫히기를 지원할 뿐,
            이미 열린 요소를 다른 요소를 클릭 했을 때 <br />닫기 기능 혹은
            다른 곳을 클릭을 했을 때 열린 요소에 대해 닫힘 기능은 기본 지원이 되지 않기 때문에<br />
            이 부분에 대해선 이벤트리스너를 통해 해결을 해야했다.`
      "
    />
    <Informatiom
      :component-name="'Context_Menu_Vue'"
      :component-path="
        '/src/Components/01_Context_Menu/Context_Menu_Context_Menu_Vue'
      "
      :component-link="'context_menu_vue'"
      :component-desc="
        `목록을 클릭하면 해당 아이템에 대한 컨텍스트메뉴가 나타나고,<br />
                메뉴를 선택하거나 그 외의 부분을 클릭하면 사라지는 팝오버 컴포넌트.<br />
                팝오버는 한 번에 하나만 보인다.`
      "
      :component-skills="
        `HTML(Details), CSS, Vue.js<br />>
            Context_Menu_Original 컴포넌트에서 자바스크립트를 제외하고,<br/> 
            뷰 문법만을 이용해서 같은 기능을 구현을 해봤다.<br />
            뷰로 컴포넌트화 하는 과정에서 자바스크립트를 그대로 옮기는 것보다<br />
            나름 전체적인 요소를 forEach 를 통해 하나하나 검사해가지 않고,<br />
            클릭했던 HTML 요소를 데이터에 저장시켜 그 요소 하나와 이벤트로 넘어온 값만을<br />
            참조해서 querySelectorAll 를 이용하지 않고도 기능을 구현했다<br />
            이게 합리적인 코드인지는 확신이 가지 않는다. (ㅠㅠ)<br />
            하지만 뷰로 옮기는 과정에서 목표했던 <br/>
            querySelectorAll, forEach 를 통해 전체 요소들을 접근하지 않고<br/>
            똑같은 기능을 구현하기 위한 목표는 달성했다!
            `
      "
    />
    <Informatiom
      :component-name="'Infinite_Scroll_Original'"
      :component-path="
        '/src/views/Components/02_Infinite_Scroll/Infinite_Scroll_Original'
      "
      :component-link="'infinite_scroll_original'"
      :component-desc="
        `무한 스크롤, 페이지 하단에 도달하면 다음 페이지로 이동하는 것이 아닌<br />
                페이지 하단에 도달하면 새로운 컨텐츠가 한 화면에 추가로 로드가 된다.`
      "
      :component-skills="
        `HTML(Details), CSS, 스크롤이벤트감지, async&await, promise.<br />
                하지만 현재 이 코드는 스크롤이벤트가 생길 때마다 감지하고 있어서<br />
                성능상으로 좋은 코드가 아니다.<br />
                이를 방지하기 위하여 이벤트를 제어하는 2가지 방식이 있다.<br />
                스로틀(Throttle) : 일정시간간격으로 한번씩만 실행.<br />
                디바운스(Debounce) : 연속으로 발생하는 이벤트에 대해 마지막 한 번만,
                <br />또는 처음 한 번만 실행.<br />
                `
      "
    />
    <Informatiom
      :component-name="'Infinite_Scroll_Debounce'"
      :component-path="
        '/src/views/Components/02_Infinite_Scroll/Infinite_Scroll_Debounce'
      "
      :component-link="'infinite_scroll_debounce'"
      :component-desc="
        `무한 스크롤, 페이지 하단에 도달하면 다음 페이지로 이동하는 것이 아닌<br />
                페이지 하단에 도달하면 새로운 컨텐츠가 한 화면에 추가로 로드가 된다.`
      "
      :component-skills="
        `HTML(Details), CSS, 스크롤이벤트감지, async&await, promise,<br />
        clearTimeout, setTimeout.<br />
        Original에서 스크롤 하는 만큼 스크롤에 등록된 이벤트가<br />
        호출이 되어 성능상 좋지 않았다.<br/>
        디바운스 핵심 함수(clearTimeout, setTimeout)들을 <br />
        활용하여 디바운싱 기능을 구현했다. <br />
        Debounce - 마지막으로 함수가 호출된 시점에서 <br />
        특정 초(설정한)가 지난 후 최종 이벤트만 발생하도록 하는 것.`
      "
    />
    <Informatiom
      :component-name="'Infinite_Scroll_Observer'"
      :component-path="
        '/src/views/Components/02_Infinite_Scroll/Infinite_Scroll_Observer'
      "
      :component-link="'infinite_scroll_observer'"
      :component-desc="
        `무한 스크롤, 페이지 하단에 도달하면 다음 페이지로 이동하는 것이 아닌<br />
                페이지 하단에 도달하면 새로운 컨텐츠가 한 화면에 추가로 로드가 된다.`
      "
      :component-skills="
        `HTML(Details), CSS, 스크롤이벤트감지, async&await, promise,<br />
        IntersectionObserver<br/>
        IntersectionObserver 을 이용하여 DOM 엘리먼트의 노출 여부를 비동기적으로<br />
        관찰하여 무한 스크롤 페이지를 구현하였다.<br />
        페이지를 맨 아래로 내려야 #fetchmore 엘리먼트가 보이고,<br />
        해당 엘리먼트가 보일 때 다음 컨텐츠가 로딩 되도록 구현을 했다.<br />
        Intersection Observer API 로 인해 스크롤 이벤트를 등록하지 않고도,<br />
        무한 스크롤을 구현을 했고,<br />
        해당 API는 이미지의 동적 로딩, 광고 배너의 노출 측정 등의 기능에 <br />
        효율적으로 사용을 할 수 있는 API라 소개가 되고 있다.<br />
        `
      "
    />
    <Informatiom
      :component-name="'Scroll_Spy_Original'"
      :component-path="
        '/src/views/Components/03_Scroll_Spy/Scroll_Spy_Original'
      "
      :component-link="'Scroll_Spy_Original'"
      :component-desc="
        `스크롤 스파이(스크롤 네비게이션)`
      "
      :component-skills="
        `HTML(Details), CSS, 스크롤이벤트감지, 
        `
      "
    />
    <Informatiom
      :component-name="'Scroll_Spy_Throttle'"
      :component-path="
        '/src/views/Components/03_Scroll_Spy/Scroll_Spy_Throttle'
      "
      :component-link="'Scroll_Spy_Throttle'"
      :component-desc="
        `스크롤 스파이(스크롤 네비게이션)`
      "
      :component-skills="
        `HTML(Details), CSS, 스크롤이벤트감지, Throttle.
        Original에서 스크롤 하는 만큼 이벤트가 감지되어
        호출이 되어 성능상 좋지 않다.
        Throttle 을 이용하여 설정한 시간이 소요(0.3초)가 되고,
        호출이 되도록 만들었다.
        리사이즈 또한 Debounce 를 적용시켰다.
        `
      "
    />
    <Informatiom
      :component-name="'Scroll_Spy_IntersectionObserver'"
      :component-path="
        '/src/views/Components/03_Scroll_Spy/Scroll_Spy_IntersectionObserver'
      "
      :component-link="'Scroll_Spy_IntersectionObserver'"
      :component-desc="
        `스크롤 스파이(스크롤 네비게이션)`
      "
      :component-skills="
        `HTML(Details), CSS, 스크롤이벤트감지, IntersectionObserver
        IntersectionObserver 를 활용하여 스크롤 하고 있는 사용자가
        어떤 위치를 스크롤 하고 있는지 관찰하여
        그에 따른 반응을 한다.
        기존 스크롤 스파이에서 요소들의 위치를 각각 계산하여
        반 정도 새로운 요소의 위치에 스크롤 했을 때를
        감지를 했는데 IntersectionObserver의 threshold 속성을 이용하여
        쉽게 반(50%) 위치를 스크롤 했을 때를 감지를 할 수 있다.
        `
      "
    />
    <Informatiom
      :component-name="'Scroll_Top_01'"
      :component-path="
        '/src/views/Components/04_Scroll_Top/Scroll_Top_01'
      "
      :component-link="'Scroll_Top_01'"
      :component-desc="
        `HTML, CSS, Javascript, 이벤트 리스너, 클래스 바인드.`
      "
      :component-skills="
        `
        스크롤 위치에 따른 클래스 값의 변화로
        탑 부분의 변화를 준다.
        강좌에서는 쿼리셀렉터, 클래스리스트를 통하여
        클래스 값을 변화를 줬지만
        리퍼러, 클래스 바인드 기능으로 구현을 해봤다.
        또한 
        `
      "
    />
    <Informatiom
      :component-name="'Scroll_Badges'"
      :component-path="
        '/src/views/Components/Example/Scroll_Badges'
      "
      :component-link="'Scroll_Badges'"
      :component-desc="
        `HTML, CSS, Javascript, 이벤트 리스너, lodash, gsap`
      "
      :component-skills="
        `
        각종 유용한 라이브러리를 이용해본다.
        lodash 라이브러리를 이용하여 Throttle 기능을 손쉽게 구현하고,
        gsap 라이브러리를 활용하여 좀 더 역동감 있게 배너가 사라지게 만들어본다.
        (자바스크립트 애니메이션).
        - 스크롤 Y 값이 500 이상이면 사라지고,
        500 이하면 보인다.
        사라지고 다시 보이는 과정이 gsap 자바스크립트 라이브러리 애니메이션을 이용해
        역동감있게 표현이 된다.
        `
      "
    />
  </div>
</template>

<script>
import Informatiom from '@/views/Information.vue';
export default {
  name: 'Home',
  components: {
    Informatiom,
  },
};
</script>

<style></style>
