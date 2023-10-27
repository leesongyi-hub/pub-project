<template>
  <div class="search_page" :class="!leftOpened && 'fold'">
    
    <SearchHeader 
      @updateLeftOpened="updateLeftOpened"
    />

    <SearchFilter
      :aria-expanded="leftOpened"
      @updateLeftOpened="updateLeftOpened"
    />

    <main class="content">
      <div class="main_panel">

        <div class="main_head">
          <div class="result_txt">
            <strong class="col_txt_primary">샘플텍스트</strong>
            &nbsp;검색결과
            <span class="count ml8">(총 <em class="col_txt_primary">293</em>건)</span>
          </div>
        </div>          

        <div class="main_body">

          <ul class="nav nav-tabs nav-justified mb12" id="resultTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" data-toggle="tab" data-target="#tab1" type="button" role="tab" aria-selected="true">샘플라벨<span class="mark_count">115</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" data-toggle="tab" data-target="#tab2" type="button" role="tab" aria-selected="false">샘플라벨<span class="mark_count">5</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" data-toggle="tab" data-target="#tab3" type="button" role="tab" aria-selected="false">샘플라벨<span class="mark_count">52</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" data-toggle="tab" data-target="#tab4" type="button" role="tab" aria-selected="false">샘플라벨<span class="mark_count disabled">0</span></button>
            </li>
          </ul>
          <div id="resultTabCont" class="tab-content">

            <SearchTabDoc />
            <SearchTabIndex />
            <SearchTabOpinion />
            <SearchTabFile />

          </div>
          <!-- //tab-content -->
        </div>
        <!-- //main_body -->
      </div>
      <!-- //main_panel-->

      <SearchRightPanel /><!-- 우측패널 -->

    </main>

    <ModalComment />
    <ModalDocInfo />
    <ModalStatus />
    <ModalManager />
    <div
      v-if="isMobile"
      class="overlay"
    >
    </div> 
  </div>
  
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

import SearchHeader from "../components/search/SearchHeader.vue";
import SearchFilter from "../components/search/SearchFilter.vue";
import SearchRightPanel from "../components/search/SearchRightPanel.vue";
import SearchTabDoc from "../components/search/SearchTabDoc.vue";
import SearchTabIndex from "../components/search/SearchTabIndex.vue";
import SearchTabOpinion from "../components/search/SearchTabOpinion.vue";
import SearchTabFile from "../components/search/SearchTabFile.vue";

import ModalComment from "./modal/ModalComment.vue";
import ModalDocInfo from "./modal/ModalDocInfo.vue";
import ModalStatus from "./modal/ModalStatus.vue";
import ModalManager from "./modal/ModalManager.vue";

export default {

  name:'SearchResult',
  components: {
    SearchHeader,
    SearchFilter,
    SearchRightPanel,
    SearchTabDoc,
    SearchTabIndex,
    SearchTabOpinion,
    SearchTabFile,
    ModalComment,
    ModalDocInfo,
    ModalStatus,
    ModalManager
  },

  setup() {
    const startSearch = ref(false);

    const leftOpened = ref(true);
    const updateLeftOpened = () => {
      leftOpened.value = !leftOpened.value;
      console.log(leftOpened.value);
    };

    const isMobile = ref(false);

    // 브라우저 창의 너비를 검사하여 isMobile 업데이트
    const checkMobile = () => {
      if(window.innerWidth <= 1024){
        leftOpened.value = false;
        isMobile.value = true;
      }else{
        isMobile.value = false;
      }
    };

    // 컴포넌트가 마운트된 후 checkMobile 함수를 호출하고, resize 이벤트 리스너 추가
    onMounted(() => {
      checkMobile();
      window.addEventListener('resize', checkMobile);
    });

    // 컴포넌트가 파괴되기 전에 이벤트 리스너를 제거
    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkMobile);
    });

    const leftOpenedTest = ref();
    const updateLeftOpenedTest = () => {
      leftOpenedTest.value = true;
    };


    
    return {
      startSearch,
      leftOpened,
      updateLeftOpened,
      updateLeftOpenedTest,
      leftOpenedTest,
      isMobile
    };
    
  },
}
</script>

<style lang="scss" scoped>

</style>
