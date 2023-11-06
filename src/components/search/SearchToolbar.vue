<template>
  <div class="resultBtn_area">
    <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#">샘플라벨</button>
    <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#">샘플라벨</button>
    <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#">샘플라벨</button>
    <button type ="button" class="button md outline mr8 disabled">샘플라벨</button>
    <button type ="button" class="btn_sort button md outline" data-toggle="modal" data-target="#">
      정렬<span class="count typo_caption_sm txt_info"> (3개)</span>
      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_gray ml2">
        <use xlink:href="@/assets/images/sp_svg.svg#ico_align"></use>
      </svg>
    </button>
    <button type="button" class="btn_more button icoOnly md dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" aria-label="메뉴더보기">
      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_gray ml2">
        <use xlink:href="@/assets/images/sp_svg.svg#ico_more"></use>
      </svg>
    </button>
    <div class="dropdown-menu dropdown-menu-right">
      <a role="button" href="javascript:;" class="dropdown-item justify-content-start"><span>샘플</span></a>
      <a role="button" href="javascript:;" class="dropdown-item justify-content-start"><span>업로드</span></a>
      <a role="button" href="javascript:;" class="dropdown-item justify-content-start"><span>다운로드</span></a>
      <a role="button" href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 업로드</span></a>
      <a role="button" href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 다운로드</span></a>
    </div>
  </div>
</template>

<script>

export default {
  name:'SearchToolbar',
  setup() {    
  },
};
</script>

<style lang="scss" scoped>

</style>
