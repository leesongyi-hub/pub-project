<template>
	<!-- S. 문서설정 모달(문서정보 탭) > 상태 이력 모달 -->
	<div class="modal modal_stateHistory fade" @show="handleModalShow" id="modal_stateHistory" tabindex="-1" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog w600">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="tit">상태이력</h5>
					<p class="sub_txt">서브타이틀이 들어가는 곳입니다.</p>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
            </svg>
          </button>
				</div>
				<div class="modal-body">
					<div class="table_wrap">
						<table class="table noScroll">
							<colgroup>
								<col style="width:33.333%">
								<col style="width:33.333%">
								<col style="width:33.333%">
							</colgroup>
							<thead>
								<tr>
									<th scope="col">상태</th>
									<th scope="col">이름</th>
									<th scope="col">편집날짜</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span class="dot_state"><i class="mark bg_mint70"></i>등록</span>
									</td>
									<td>홍길동</td>
									<td>2022.08.14 19:12:22</td>
								</tr>
								<tr>
									<td>
										<span class="dot_state"><i class="mark bg_yellow"></i>수정</span>
									</td>
									<td>홍길동</td>
									<td>2022.08.14 19:12:22</td>
								</tr>
								<tr>
									<td>
										<span class="dot_state"><i class="mark bg_blue"></i>완료</span>
									</td>
									<td>홍길동</td>
									<td>2022.08.14 19:12:22</td>
								</tr>
								<tr>
									<td>
										<span class="dot_state"><i class="mark bg_red"></i>반려</span>
									</td>
									<td>홍길동</td>
									<td>2022.08.14 19:12:22</td>
								</tr>
								<tr>
									<td>
										<span class="dot_state"><i class="mark bg_green"></i>승인</span>
									</td>
									<td>홍길동</td>
									<td>2022.08.14 19:12:22</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="modal-footer">
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