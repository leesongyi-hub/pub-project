<template>
  <div class="modal modal_type_system modal_alert fade" id="modal_alert" tabindex="-1" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog w400">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="tit">타이틀 영역</h5>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <p>alert 메세지를 입력해주세요.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="button primary lg" data-dismiss="modal">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>