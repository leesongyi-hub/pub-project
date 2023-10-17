<template>  
  <button type="button" class="btn_more button icoOnly sm dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" aria-label="메뉴더보기">
    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_lightgray ml2">
      <use xlink:href="@/assets/images/sp_svg.svg#ico_more" />
    </svg>
  </button>
  <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
    <a href="javascript:;" role="button" class="dropdown-item justify-content-between align-items-center">
      <span>원본URL</span>   
      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s18">
        <use xlink:href="@/assets/images/sp_svg.svg#ico_url" />
      </svg>
    </a>
    <a href="javascript:;" role="button" class="dropdown-item justify-content-between align-items-center">
      <span>의견</span>
      <span class="mark_ico">
        <span class="mark_count">6</span>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s18">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_talk" />
        </svg>
      </span>
    </a>
    <a href="javascript:;" role="button" class="dropdown-item justify-content-between align-items-center">
      <span>문서</span>
      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s18">
        <use xlink:href="@/assets/images/sp_svg.svg#ico_list3" />
      </svg>
    </a>
    <a href="javascript:;" role="button" class="dropdown-item justify-content-between border_bot align-items-center">
      <span>분류등록</span>
      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s18">
        <use xlink:href="@/assets/images/sp_svg.svg#ico_class"></use>
      </svg>
    </a>
    <a href="javascript:;" role="button" class="dropdown-item justify-content-between align-items-center"><span>수정</span></a>
    <a href="javascript:;" role="button" class="dropdown-item justify-content-between align-items-center"><span>삭제</span></a>
  </div>
</template>