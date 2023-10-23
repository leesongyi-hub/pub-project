<template>
  <div class="search_page">

    <button
      type="button"
      class="btn_createDoc button md outline mr8"
      data-toggle="modal"
      data-target="#modal_comment"
      style="position:fixed;top:0;left:0;"
    >
      샘플라벨
    </button>

    <button
      type="button"
      class="btn_createDoc button md outline mr8"
      data-toggle="modal"
      data-target="#modal_editCategory"
      @click="modalVisible = true"
      style="position:fixed;top:0;left:200px;"
    >
      샘플라벨
    </button>

    
    <main class="content">
      <div class="main_panel">
        <div class="main_head">
          <div class="result_txt"><strong class="col_txt_primary">샘플텍스트&nbsp;</strong>검색결과 <span class="count ml8">(총 <em class="col_txt_primary">293</em>건)</span></div>
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
              <!-- 0개일때 addClass('disabled') -->
              <button class="nav-link" data-toggle="tab" data-target="#tab4" type="button" role="tab" aria-selected="false">샘플라벨<span class="mark_count disabled">0</span></button>
            </li>
          </ul>
          <div id="resultTabCont" class="tab-content">

            <SearchTabDoc /><!-- //문서탭 -->
            <SearchTabIndex /><!-- //목차탭 -->
            <SearchTabOpinion /><!-- //의견탭 -->
            <SearchTabFile /><!-- //첨부파일탭 -->

          </div>
          <!-- //tab-content -->

        </div>
        <!-- //main_body -->
      </div>
      <!-- //main_panel-->

    </main>    

    <!-- <modalTest /> -->

  </div>
</template>

<script>
import { ref } from "vue";

import SearchTabDoc from "../components/search/SearchTabDoc.vue";
import SearchTabIndex from "../components/search/SearchTabIndex.vue";
import SearchTabOpinion from "../components/search/SearchTabOpinion.vue";
import SearchTabFile from "../components/search/SearchTabFile.vue";


export default {


  name:'SearchResult',
  components: {
    SearchTabDoc,
    SearchTabIndex,
    SearchTabOpinion,
    SearchTabFile,

  },

  setup() {

    const modalVisible = ref(false);


    const closeModal = (value) => {
      modalVisible.value = value;
    }; 

    return {
      modalVisible,      
      closeModal
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
