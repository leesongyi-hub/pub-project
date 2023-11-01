<template>
<!-- 문서탭 -->
<div id="tab1" class="tab-pane active" role="tabpanel" tabindex="0">

  <SearchToolbar /><!--툴바-->

  <div class="result_wrap">

    <!-- [리스트 0개일때 노출] -->
    <div class="nodate">
      검색 내역이 없습니다.
    </div>
    <!-- //리스트 0개일때 노출 -->

    <ul>
      <li class="list_item"
        v-for="index in 4"
        :key="index"
      >

        <h3 class="tit_area">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" :id="'docList_check' + index" aria-label="리스트선택">
            <label class="custom-control-label" :for="'docList_check' + index"></label>
          </div>

          <a href="javascript:;" class="tit">
            <span class="col_txt_blue">[샘플텍스트]</span> 샘플타이틀
          </a>

          <span class="txt_badge blue">badge</span>
          <!-- <span class="txt_badge green">badge</span>
          <span class="txt_badge yellow">badge</span>
          <span class="txt_badge red">badge</span>
          <span class="txt_badge gray">badge</span>
          <span class="txt_badge mint">badge</span>
          <span class="txt_badge navy">badge</span>
          <span class="txt_badge purple">badge</span>
          <span class="txt_badge pink">badge</span>
          <span class="txt_badge orange">badge</span> -->

          <!-- [반응형] 768px 이하에서 노출 -->
          <SearchResponsiveEditBtn />
          <!-- //[반응형] 768px 이하에서 노출 -->

        </h3>
        <!-- //tit_area -->

        <div class="info_area">
          <dl
            v-for="index in 10"
            :key="index"
          >
            <dt>샘플타이틀</dt>
            <dd>샘플텍스트</dd>
          </dl>
        </div>
        <!-- //info_area -->

        <div class="preview_area">
          샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트
        </div>
        <!-- //preview_area -->

        <div class="repoInfo_wrap">
          <div class="repoInfo_area">
            <div class="repoInfo_name"><span class="name">저장소명</span> 온라인 &gt; 정기/상해 &gt; 저장소명 (5)
              <button type="button" class="ico_box dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" aria-label="분류코드정보 보기">
                <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s12 ico_arr_bot">
                  <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />
                </svg>
              </button>
              <div class="repoInfo_layer dropdown-menu">
                <div class="head type_body_lg txt_bold">
                  분류 코드 정보
                </div>
                <div class="body">
                  <ul>
                    <li>온라인 &gt; 정기/상해 &gt; 상해상해상해상해상해상해상해</li>
                    <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                    <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                    <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                    <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <SearchEditBtn />
        </div>
        <!-- //repoInfo_wrap -->

      </li>
    </ul>
  </div>  
  <!--//result_wrap-->

  <BasePagination />

</div>
<!-- //문서탭 -->
</template>

<script>
import SearchToolbar from "@/components/search/SearchToolbar.vue";
import SearchEditBtn from "@/components/search/SearchEditBtn.vue";
import SearchResponsiveEditBtn from "@/components/search/SearchResponsiveEditBtn.vue";

export default {
  name:'SearchTabDoc',
  components: {
    SearchToolbar,
    SearchEditBtn,
    SearchResponsiveEditBtn
  }
}
</script>

<style lang="scss" scoped>

</style>
