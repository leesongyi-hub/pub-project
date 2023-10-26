<template>
	<div class="modal modal_manager fade" id="modal_manager" tabindex="-1" data-backdrop="static" data-keyboard="false" >
		<div class="modal-dialog w800">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="tit">담당자 지정</h5>
					<p class="sub_txt">서브타이틀이 들어가는 곳입니다.</p>
					<button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
          </svg>
        </button>
				</div>
				<div class="modal-body">
					<div class="form_group_wrap d-flex align-items-center justify-content-end right mb24">
						<div class="form_group">
							<label class="form-label mr8" for="search">회원검색</label>
							<input id="search" class="form_input" placeholder="회원을 찾아보세요." autocomplete="off">
						</div>
						<button type="button" class="button primary md ml8"><i class="ico ico_search_white i_s20"></i><span class="label">찾기</span></button>
					</div>
					<div class="table_wrap">
						<table class="table">
							<colgroup>
								<col style="width:135px">
								<col style="width:105px">
								<col>
								<col style="width:179px">
								<col style="width:55px">
							</colgroup>
							<thead>
								<tr> 
									<th scope="col">아이디</th>
									<th scope="col">이름</th>
									<th scope="col">이메일</th>
									<th scope="col">가입일</th>
									<th scope="col">선택</th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="(item, index) in 10"
									:key="item"
								>
									<td>gomapsun</td>
									<td>홍길동</td>
									<td>gomapsun@diquest.com</td>
									<td>2022-03-19 16:32</td>
									<td>
										<div class="custom-control custom-radio justify-content-center">
											<input type="radio" class="custom-control-input" :id="'sampleRadio' + index" name="sampleRadio">
											<label class="custom-control-label" :for="'sampleRadio' + index"></label>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<BasePagination />

				</div>
				<div class="modal-footer">
					<button type="button" class="button outline lg" data-dismiss="modal">취소</button>
					<button type="button" class="button primary lg" data-dismiss="modal">저장</button>
				</div>
			</div>
		</div>
	</div>

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