<template>
  <div class="modal modal_fileDown fade" id="modal_fileDown" tabindex="-1" data-backdrop="static" data-keyboard="false" aria-modal="true">
    <div class="modal-dialog w700">
      <div class="modal-content"> 
        <div class="modal-header">
          <h5 class="tit">파일 다운로드</h5>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="form_group d-flex align-items-center mb16">
            <label class="form-label mr8 w100px" for="search">분류</label>                
            <div>전체</div>
          </div>

          <div class="form_group d-flex align-items-center mb16">
            <label class="form-label mr8 w100px flex-shrink-0" for="search">검색어</label>
            <div class="d-flex w-100">
              <select class="form_input form-select w140 mr8">
                <option value="">전체</option>
              </select>
              <input type="text" class="form_input flex-fill" placeholder="검색어 입력" value="">
            </div>
          </div>

          <div class="form_group d-flex align-items-center mb16">
            <label class="form-label mr8 w100px" for="search">상태</label>
            <select class="form_input form-select flex-fill">
              <option value="">전체</option>
            </select>
          </div>

          <div class="form_group d-flex align-items-center mb16">
            <label class="form-label mr8 w100px" for="search">인포채터 상태</label>
            <select class="form_input form-select flex-fill">
              <option value="">전체</option>
            </select>
          </div>
      
          <div class="form_group d-flex align-items-center">
            <label class="form-label mr8 w100px" for="search">다운로드 사유</label>
            <input type="text" class="form_input flex-fill" placeholder="파일 다운로드 시 사유 확인이 반드시 필요합니다." value="">
          </div>

        </div>

        <div class="modal-footer">
          <button type="button" class="button outline lg" data-dismiss="modal">취소</button>
          <button type="button" class="button primary lg" data-dismiss="modal">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {}
};
</script>

<style scoped>
</style>