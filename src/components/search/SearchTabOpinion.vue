<template>
              <!-- 의견탭 -->
              <div id="tab3" class="tab-pane" role="tabpanel" tabindex="0">

<!--툴바-->
<SearchToolbar />
<!--//툴바-->

<!--리스트아이템-->
<div class="result_wrap">
  <ul>
    <li class="list_item type_comment">

      <h3 class="tit_area">
        <div class="txt_bold mb4"><span class="col_txt_blue">[샘플텍스트]</span> 샘플텍스트</div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="list_check1">
          <label class="custom-control-label" for="list_check1"></label>
        </div>
        <a href="javscript:void(0);" class="tit">
          샘플타이틀
        </a>
        <span class="txt_badge blue">Text</span>

        <!-- [반응형] 768px 이하에서 노출 -->
        <button type="button" class="btn_more button icoOnly sm dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <i class="icoSvg i_s16 col_lightgray ml2">
            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more"></use></svg>
          </i>
        </button>
        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
            <span>원본URL</span>
            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg></i>
         </a>
          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
            <span>의견</span>
            <span class="mark_ico">
              <span class="mark_count">6</span>
              <i class="icoSvg stroke i_s18">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
              </i>
            </span>
          </a>
          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
            <span>문서</span>
            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg></i>
          </a>
          <a href="javascript:;" class="dropdown-item justify-content-between border_bot align-items-center">
            <span>분류등록</span>
            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg></i>
          </a>
          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>수정</span></a>
          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>삭제</span></a>
        </div>
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
            <button type="button" class="ico_box dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <i class="icoSvg stroke i_s12 ico_arr_bot">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
              </i>
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
        <div class="btn_area">
          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="원문 URL">
            <i class="icoSvg stroke i_s16">
              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg>
            </i>
          </a>
          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="의견">
            <span class="mark_count">6</span>
            <i class="icoSvg stroke i_s16">
              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
            </i>
          </a>
          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="문서">
            <i class="icoSvg stroke i_s16">
              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg>
            </i>
          </a>
          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="분류등록">
            <i class="icoSvg stroke i_s16">
              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg>
            </i>
          </a>
          <!-- S.버튼 구분선 -->
          <span class="division"></span>
          <!-- //E.버튼 구분선 -->
          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="수정">
            <i class="icoSvg stroke i_s16">
              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_edit"></use></svg>
            </i>
          </a>
          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="삭제">
            <i class="icoSvg stroke i_s16">
              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_del"></use></svg>
            </i>
          </a>
        </div>
      </div>
      <!-- //repoInfo_wrap -->
    </li>
  </ul>
</div>
<!--//리스트아이템-->

<!--페이징-->
<BasePagination />
<!--//페이징-->

</div>
<!-- //의견탭 -->
</template>

<script>
import SearchToolbar from "@/components/search/SearchToolbar.vue";

export default {
  name:'SearchTabOpinion',
  components: {
    SearchToolbar
  },
  setup() {
  },
}
</script>

<style lang="scss" scoped>

</style>