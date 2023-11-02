<template>
  <div class="search_page" :class="!leftOpened && 'expanded'">
    
    <SearchHeader 
      @updateLeftOpened="updateLeftOpened"
    />
    <SearchFilter
      :aria-expanded="leftOpened"
      @updateLeftOpened="updateLeftOpened"
      :checkLoading="isLoaded"
    />
    <div class="content">
      <main class="content_wrap">
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

              <template v-if="isLoaded">
                <CompSpinner />
              </template>
                
              <template v-else>
                <SearchTabDoc />
                <SearchTabIndex />
                <SearchTabOpinion />
                <SearchTabFile />
              </template>
  
            </div>
            <!-- //tab-content -->
          </div>
          <!-- //main_body -->
        </div>


        <SearchRightPanel
          :checkLoading="isLoaded"
        />
      </main>
      <div
        v-if="isMobile"
        class="overlay"
      >
      </div>
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

export default {

  name:'SearchLoading',
  components: {
    SearchHeader,
    SearchFilter,
    SearchRightPanel,
    SearchTabDoc,
    SearchTabIndex,
    SearchTabOpinion,
    SearchTabFile,
  },

  setup() {
    const startSearch = ref(false);

    const leftOpened = ref(true);
    const updateLeftOpened = () => {
      leftOpened.value = !leftOpened.value;
    };

    const isLoaded = ref(true);
    
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
    
    onMounted(() => {
      checkMobile();
      window.addEventListener('resize', checkMobile);
    });
    
    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkMobile);
    });
    
    return {
      startSearch,
      leftOpened,
      updateLeftOpened,      
      isMobile,
      isLoaded
    };
    
  },
}
</script>

<style lang="scss" scoped>

</style>
