<template>

  <!--툴바-->
  <div class="resultBtn_area">
    <button type ="button" class="btn_createDoc button md outline mr8" data-toggle="modal" data-target="#modal_createDoc">샘플라벨</button>
    <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editCategory">샘플라벨</button>
    <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editField">샘플라벨</button>
    <button type ="button" class="button md outline mr8 disabled">샘플라벨</button>      
    <div class="customSelect_area mr8">
      <div class="customSelect button outline md disabled" tabindex="0" style="min-width:97px;">
        <span class="customSelect_text">상태변경</span>
        <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
          <svg aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_arrow"></use></svg>
        </i>
      </div>
      <ul class="customSelect_list" style="display:none;">
        <li value="selectOption1" class="customSelect_option">샘플옵션</li>
        <li value="selectOption2" class="customSelect_option">샘플옵션</li>
        <li value="selectOption3" class="customSelect_option">샘플옵션</li>
        <li value="selectOption3" class="customSelect_option">샘플옵션</li>
      </ul>        
      <select class="select_origin">
        <option value="selectOption1" class="customSelect_option">샘플옵션</option>
        <option value="selectOption2" class="customSelect_option">샘플옵션</option>
        <option value="selectOption3" class="customSelect_option">샘플옵션</option>
        <option value="selectOption3" class="customSelect_option">샘플옵션</option>
      </select>
    </div>

    <div class="customSelect_area mr8">
      <div class="customSelect button outline md" tabindex="0" style="min-width:80px;">
        <span class="customSelect_text">10건</span>
        <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
          <svg aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_arrow"></use></svg>
        </i>
      </div>
      <ul class="customSelect_list" style="display:none;">
        <li value="selectOption1" class="customSelect_option">10건</li>
        <li value="selectOption2" class="customSelect_option">20건</li>
        <li value="selectOption3" class="customSelect_option">30건</li>
      </ul>        
      <select class="select_origin">
        <option value="selectOption1" class="customSelect_option">10건</option>
        <option value="selectOption2" class="customSelect_option">20건</option>
        <option value="selectOption3" class="customSelect_option">30건</option>
      </select>
    </div>

    <button type ="button" class="btn_sort button md outline" data-toggle="modal" data-target="#modal_sortSet">
      정렬<span class="count type_caption_sm txt_info"> (3개)</span>
      <i class="icoSvg i_s20 col_gray ml2">
        <svg aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_align"></use></svg>
      </i>
    </button>
    <button type="button" class="btn_more button icoOnly md dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      <i class="icoSvg i_s20 col_gray ml2">
        <svg aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_more"></use></svg>
      </i>
    </button>
    <div class="dropdown-menu dropdown-menu-right">
      <a href="javascript:;" class="dropdown-item justify-content-start"><span>샘플</span></a>
      <a href="javascript:;" class="dropdown-item justify-content-start"><span>업로드</span></a>
      <a href="javascript:;" class="dropdown-item justify-content-start"><span>다운로드</span></a>
      <a href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 업로드</span></a>
      <a href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 다운로드</span></a>
    </div>
  </div>
  <!--//툴바-->

</template>

<script>

export default {
  name:'SearchToolbar',
}
</script>

<style lang="scss" scoped>

</style>
