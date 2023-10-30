<template>
	<!-- S. 문서설정 모달(문서정보 탭) > 상태 이력 모달 -->
	<div class="modal modal_type2 modal_documentSet fade" id="modal_documentSet" tabindex="-1" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog w400 max_h700">
      <div class="modal-content"> 

        <div class="modal-header">
          <h5 class="tit">주요항목 설정</h5>
					<button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
						<svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
							<use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
						</svg>
					</button>
        </div>

        <div class="modal-body">
					<ul class="repoList_area">
						<li class="repoList_item">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="check1" checked="checked">
								<label class="custom-control-label" for="check1"><span>저장소명</span></label>
							</div>
						</li>
						<li class="repoList_item">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="check2" checked="checked">
								<label class="custom-control-label" for="check2"><span>저장소명</span></label>
							</div>
						</li>
						<li class="repoList_item">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="check3" checked="checked">
								<label class="custom-control-label" for="check3"><span>저장소명</span></label>
							</div>
						</li>
						<li class="repoList_item">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="check4" checked="checked">
								<label class="custom-control-label" for="check4"><span>저장소명</span></label>
							</div>
						</li>
						<li class="repoList_item">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="check5">
								<label class="custom-control-label" for="check5"><span>저장소명</span></label>
							</div>
						</li>
					</ul>
        </div>

        <div class="modal-footer">
          <button type="button" class="button outline lg" data-dismiss="modal">취소</button>
          <button type="button" class="button primary lg" data-dismiss="modal">확인</button>
        </div>
      </div>
    </div>
	</div>
	<!-- //E. 문서설정 모달(문서정보 탭) > 상태 이력 모달 -->





</template>

<script>
// import { ref } from "vue";

export default {
  setup() {
    
  }
};
</script>

<style>
.modal.show + .modal.show{
  z-index:1053;
}
.modal-backdrop + .modal-backdrop{
  z-index: 1052 !important;
}
</style>