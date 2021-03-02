<template>
  <div>
    <!-- <Informatiom
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
    /> -->
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
