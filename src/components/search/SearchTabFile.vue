<template>
<!-- 첨부파일탭 -->
<div id="tab4" class="tab-pane" role="tabpanel" tabindex="0">

<!--툴바-->
<SearchToolbar />
<!--//툴바-->

<!--리스트아이템-->
<div class="result_wrap">
  <!-- [리스트 0개일때 노출] -->
  <div class="nodate">
    검색 내역이 없습니다.
  </div>
  <!-- //리스트 0개일때 노출 -->

  <ul>
    <li class="list_item type_file"
      v-for="(items, index) in fileIcons"
      :key="index"
    >
      <h3 class="tit_area">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" :id="'fileList_check' + index">
          <label class="custom-control-label" :for="'fileList_check' + index"></label>
        </div>
        <a href="javscript:void(0);" class="tit">
          <i
            class="ico sp_file ico_doc"
            :class="fileIcons[index]"
          >
          </i>
          첨부<mark>파일</mark>명.doc<span class="col_txt_light type_caption_sm ml4">29KB</span>
        </a>

        <!-- [반응형] 768px 이하에서 노출 -->
        <SearchResponsiveEditBtn />
        <!-- //[반응형] 768px 이하에서 노출 -->

      </h3>
      <!-- //tit_area -->

      <div class="preview_area">
          샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트
      </div>
      <!-- //preview_area -->

      <div class="docTit_category txt_weight_md mb4">
        <span class="col_txt_blue">[문서명 표기] </span>
        문서명 입니다.
        <i class="icoSvg stroke i_s16 ico_arr_right col_lightgray">
          <svg aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_arrow"></use></svg>
        </i>
        목차명 입니다.
      </div>
      <div class="repoInfo_wrap">

        <div class="info_area">
          <dl
            v-for="index in 4"
            :key="index"
          >
            <dt>샘플타이틀</dt>
            <dd>샘플텍스트</dd>
          </dl>
        </div>
        <!-- //info_area -->

        <SearchEditBtn />
      </div>
    </li>
  </ul>
</div>
<!--//리스트아이템-->


<BasePagination />

</div>
<!-- //첨부파일탭 -->
</template>

<script>
import SearchToolbar from "@/components/search/SearchToolbar.vue";
import SearchEditBtn from "@/components/search/SearchEditBtn.vue";
import SearchResponsiveEditBtn from "@/components/search/SearchResponsiveEditBtn.vue";

// import { ref } from "vue";

export default {
  name:'SearchTabFile',
  components: {
    SearchToolbar,
    SearchEditBtn,
    SearchResponsiveEditBtn
  },
  setup() {
    const fileIcons = [
      "ico_doc",
      "ico_hwp",
      "ico_ppt",
      "ico_zip",
      "ico_xls",
      "ico_pdf",
      "ico_pic",
      "ico_etc",
    ]

    return{
      fileIcons
    }
  },
}
</script>

<style lang="scss" scoped>

</style>