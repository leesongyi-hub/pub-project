<template>
  <header class="doc_header">
    <div class="left_area">
      <div class="d-flex align-items-center">
        <h1>문서제목영역</h1>
        <button type="button" class="btn_edit" aria-label="제목편집">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_white">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_edit" />
          </svg>
        </button>
      </div>
    </div>

    <div class="global_btn_area">
      <div class="start_area">
        <button type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="첨부파일">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s20 col_white">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_file" />
          </svg>
          <span class="mark_count">2</span>
        </button>
        <button type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="참조">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_white">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_share" />
          </svg>
          <span class="mark_count">99+</span>
        </button>
        <button type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="의견">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_white">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_talk" />
          </svg>
        </button>
        <button type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="스크랩">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s20 col_white">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_scrap" />
          </svg>
        </button>
      </div>
      <div class="end_area">
        <button type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="인쇄">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24 col_white">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_print" />
          </svg>
        </button>
        <button type="button" class="btn_menu dropdown" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" data-bs-toggle="tooltip" data-bs-placement="bottom" title="더보기">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24 col_white">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_menu" />
          </svg>
        </button>
				<div class="dropdown-menu">
					<a href="javascript:;" class="dropdown-item" data-toggle="modal" data-target="#modal_documentInfo">문서정보</a>
					<a href="javascript:;" class="dropdown-item">문서이력</a>	
					<a href="javascript:;" class="dropdown-item border_bot">목차분류보기</a>
					<a href="javascript:;" class="dropdown-item">단락추가</a>
					<a href="javascript:;" class="dropdown-item">하위목차 추가</a>

					<!--S. [반응형] -->
          <a href="javascript:;" role="button" class="dropdown-item mo border_top">
            <span>첨부파일</span>
            <span class="mark_ico">
              <svg class="icoSvg i_s20 stroke" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_file" /></svg>
              <span class="mark_count">6</span>
            </span>
          </a>
          <a href="javascript:;" role="button" class="dropdown-item mo">
            <span>참조</span>
            <span class="mark_ico">
              <svg class="icoSvg i_s20 stroke" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_share" /></svg>
              <span class="mark_count">2</span>
            </span>
          </a>
          <a href="javascript:;" role="button" class="dropdown-item mo">
            <span>의견</span>
            <span class="mark_ico">
              <svg class="icoSvg i_s20 stroke" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_talk" /></svg>
              <span class="mark_count">99+</span>
            </span>
          </a> 
					<!--//E. [반응형] -->
				</div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  props: {
  },
  setup () {
    return {   
    }    
  }
}
</script>

<style lang="scss" scoped>

</style>