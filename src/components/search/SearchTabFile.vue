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
      v-for="index in 4"
      :key="index"
    >
      <h3 class="tit_area">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" :id="'fileList_check' + index">
          <label class="custom-control-label" :for="'fileList_check' + index"></label>
        </div>
        <a href="javscript:void(0);" class="tit">

          <!--
            .ico_doc
            .ico_hwp
            .ico_ppt
            .ico_zip
            .ico_xls
            .ico_pdf
            .ico_pic
            .ico_etc
          -->
          <i class="ico sp_file ico_doc"></i>
          첨부<mark>파일</mark>명.doc<span class="col_txt_light type_caption_sm ml4">29KB</span>
        </a>

        <!-- [반응형] 768px 이하에서 노출 -->
        <SearchResponsiveEditBtn />
        <!-- //[반응형] 768px 이하에서 노출 -->

      </h3>
      <!-- //tit_area -->

      <div class="preview_area">
        <div class="inner">
            1975년 우라늄협회로 출발한 세계원자력협회(WNA)는 원자력을 평화적으로 이용하는 것을 적극 지원하고, 원자력 발전과 핵연료주기 전반에 걸친 원자력 산업 발전을 위하고자 설립한 세계적 민간 기구로, 우라늄 채광부터 변환, 농축, 핵연료 제조, 원자력발전 운영, 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다 원자력 발전을 촉진하고 관...
            1975년 우라늄협회로 출발한 세계원자력협회(WNA)는 원자력을 평화적으로 이용하는 것을 적극 지원하고, 원자력 발전과 핵연료주기 전반에 걸친 원자력 산업 발전을 위하고자 설립한 세계적 민간 기구로, 우라늄 채광부터 변환, 농축, 핵연료 제조, 원자력발전 운영, 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다 원자력 발전을 촉진하고 관...
            1975년 우라늄협회로 출발한 세계원자력협회(WNA)는 원자력을 평화적으로 이용하는 것을 적극 지원하고, 원자력 발전과 핵연료주기 전반에 걸친 원자력 산업 발전을 위하고자 설립한 세계적 민간 기구로, 우라늄 채광부터 변환, 농축, 핵연료 제조, 원자력발전 운영, 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다 원자력 발전을 촉진하고 관...
        </div>

        <button type="button" class="btn_more">
          <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
            <svg aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_arrow"></use></svg>
          </i>
        </button>
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

<!--페이징-->
<BasePagination />
<!--//페이징-->

</div>
<!-- //첨부파일탭 -->
</template>

<script>
import SearchToolbar from "@/components/search/SearchToolbar.vue";
import SearchEditBtn from "@/components/search/SearchEditBtn.vue";
import SearchResponsiveEditBtn from "@/components/search/SearchResponsiveEditBtn.vue";

export default {
  name:'SearchTabFile',
  components: {
    SearchToolbar,
    SearchEditBtn,
    SearchResponsiveEditBtn
  },
  setup() {
  },
}
</script>

<style lang="scss" scoped>

</style>