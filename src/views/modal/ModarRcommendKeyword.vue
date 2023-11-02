<template>
	<div class="modal modal_recommendKeyword fade" id="modal_recommendKeyword" tabindex="-1" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog w800">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="tit">키워드 추천</h5>
					<p class="sub_txt">DISA 엔진에 학습된 개체명 데이터를 이용해 키워드를 추출합니다.</p>
					<p class="sub_txt">나타난 키워드는 DISA에 학습된 개체명 정보임을 안내합니다.</p>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
            </svg>
          </button>
				</div>
				<div class="modal-body">

					<div class="form_group_wrap flex-nowrap d-flex align-items-center mb24">
						<div class="form_group d-flex align-items-center">
							<select id="category" class="form_input form-select">
								<option value="">분석대상항목 선택</option>
								<option value="">사용자 직접 입력</option>
								<option value="">문서 전체 (하위목차 포함)</option>
								<option value="">문서 요약</option>
								<option value="">목차1</option>
								<option value="">목차1-1</option>
							</select>											
						</div>
						<button type="button" class="button primary md ml8"><span class="label">키워드 분석</span></button>
					</div>

					<!--S. Case 분석된 키워드항목-->
					<div class="section mt32">
						<div class="d-flex align-items-end justify-content-between mb12">
							<p class="h2 mb0">분석된 키워드 항목</p>
							<button type="button" class="button outline md ml8">아래 키워드를 문서 키워드로 등록</button>
						</div>						
						<div class="list_wrap2">
							<div class="list_item default">
								<div class="add_tag_list">
									<div class="add_tag">
										<span class="txt">샘플라벨</span>
                    <button type="button" aria-label="삭제">
                      <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
                      </svg>
                    </button>
									</div>
									<div class="add_tag">
										<span class="txt">샘플라벨</span>
                    <button type="button" aria-label="삭제">
                      <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
                      </svg>
                    </button>
									</div>									
									<div class="add_tag">
										<span class="txt">샘플라벨</span>
                    <button type="button" aria-label="삭제">
                      <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
                      </svg>
                    </button>
									</div>									
									<div class="add_tag">
										<span class="txt">샘플라벨</span>
                    <button type="button" aria-label="삭제">
                      <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
                      </svg>
                    </button>
									</div>									
								</div>
							</div>
						</div>
					</div>
					<!--//E. Case 분석된 키워드항목-->

					<!--S. Case 문서요약 선택했을 때-->
					<div class="section mt32">
						<p class="h2 mb12">키워드 분석 대상 (문서 요약)</p>						
						<textarea class="form-control" id="" placeholder="의견을 남겨보세요." style="height:200px;" readonly>피의자는 2020. 7.경 서울시 중구 소재 대신파이낸스빌딩 지하 1층 상호불상 커피숍에서 고소인에게 “내가 재직 중인 회사에서 서울시청의 동작구 사당동 주차장 공사에 1조 원 정도를 투자했다. 그 공사만 승인이 나면 내가 한 달내로 10배로 돌려줄 수 있으니, 일단 서울시청 소속 공무원들을 만나는 데 필요한 경비 1,500만 원을 빌려달라.”라고 거짓말하였고, 2020. 9.경 위와 같은 장소에서 “내가 법인을 인수해서 그 법인을 이용해서 부산에 있는 700억 원 상당 외환을 받을 수 있는데, 법인을 인수하는데 돈이 당장 필요하다. 그 공사만 승인이 나면 내가 한 달내로 10배로 돌려줄 수 있으니, 일단 서울시청 소속 공무원들을 만나는 데 필요한 경비 1,500만 원을 빌려달라.”라고 거짓말하였고, 2020. 9.경 위와 같은 장소에서 “내가 법인을 인수해서 그 법인을 이용해서 부산에 있는 700억 원 상당 외환을 받을 수 있는데, 법인을 인수하는데 돈이 당장 필요하다.   일단 서울시청 소속 공무원들을 만나는 데 필요한 경비 1,500만 원을 빌려달라.”라고 거짓말하였고, 2020. 9.경 위와 같은 장소에서 “내가 법인을 인수해서 그 법인을 이용해서 부산에 있는 700억 원 상당 외환을 받을 수 있는데, 법인을 인수하는데 돈이 당장 필요하다.</textarea>
					</div>
					<!--//E. Case 문서요약 선택했을 때-->

					<!--S. Case 문서 전체 선택했을 때-->
					<div class="section mt32">
						<p class="h2 mb12">키워드 분석 대상 (문서 전체)</p>
						<div class="border_box">
							<span class="col_mint70">{수사결과 보고서}</span>에 등록된 모든 내용을 대상으로 합니다.
						</div>
					</div>
					<!--//E. Case 문서 전체 선택했을 때-->

					<!--S. Case 사용자 직접입력 선택했을 때-->
					<div class="section mt32">
						<p class="h2 mb12">키워드 분석 대상 (사용자 직접 입력)</p>
						<textarea class="form-control" id="" placeholder="키워드 분석대상을 입력해주세요." style="height:200px;"></textarea>
					</div>
					<!--//E. Case 사용자 직접입력 선택했을 때-->

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
export default {};
</script>

<style scoped>
</style>