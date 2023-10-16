<template>  
  <button type="button" class="btn_more button icoOnly sm dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    <i class="icoSvg i_s16 col_lightgray ml2">
      <svg aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_more"></use></svg>
    </i>
  </button>
  <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
    <a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
      <span>원본URL</span>
      <i class="icoSvg stroke i_s18">
        <svg aria-hidden="true" focusable="false">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_url"></use>
        </svg>
      </i>
  </a>
    <a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
      <span>의견</span>
      <span class="mark_ico">
        <span class="mark_count">6</span>
        <i class="icoSvg stroke i_s18">
          <svg aria-hidden="true" focusable="false">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_talk"></use>
          </svg>
        </i>
      </span>
    </a>
    <a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
      <span>문서</span>
      <i class="icoSvg stroke i_s18">
        <svg aria-hidden="true" focusable="false">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_list3"></use>
        </svg>
      </i>
    </a>
    <a href="javascript:;" class="dropdown-item justify-content-between border_bot align-items-center">
      <span>분류등록</span>
      <i class="icoSvg stroke i_s18">
        <svg aria-hidden="true" focusable="false">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_class"></use>
        </svg>
      </i>
    </a>
    <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>수정</span></a>
    <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>삭제</span></a>
  </div>
</template>