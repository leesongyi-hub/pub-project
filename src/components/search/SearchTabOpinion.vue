<template>
  <div id="tab3" class="tab-pane" role="tabpanel" tabindex="0">

    <SearchToolbar />

    <div class="result_wrap">

      <div class="nodate">
        검색 내역이 없습니다.
      </div>

      <ul>
        <li class="list_item type_comment"
        v-for="index in 4"
        :key="index"
      >
          <h3 class="tit_area">
            <div class="txt_bold mb4"><span class="col_txt_blue">[샘플텍스트]</span> 샘플텍스트</div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" :id="'opinionList_check' + index">
            <label class="custom-control-label" :for="'opinionList_check' + index"></label>
            </div>
            <a href="javascript:;" class="tit">
              샘플타이틀
            </a>
            <span class="txt_badge blue">Text</span>

            <!-- [반응형] 768px 이하에서 노출 -->
            <SearchResponsiveEditBtn />
            <!-- //[반응형] 768px 이하에서 노출 -->

          </h3>

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
            샘플텍스트<mark>샘플텍스트</mark>샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트
          </div>
          <!-- //preview_area -->

          <div class="repoInfo_wrap">
            <div class="repoInfo_area">
              <div class="repoInfo_name"><span class="name">저장소명</span> 온라인 &gt; 정기/상해 &gt; 저장소명
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

    <BasePagination />
  </div>
</template>

<script>
import SearchToolbar from "@/components/search/SearchToolbar.vue";
import SearchEditBtn from "@/components/search/SearchEditBtn.vue";
import SearchResponsiveEditBtn from "@/components/search/SearchResponsiveEditBtn.vue";

export default {
  name:'SearchTabOpinion',
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