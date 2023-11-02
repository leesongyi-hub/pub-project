<template>
  <div class="modal modal_reference fade" id="modal_reference" tabindex="-1" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog w700">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="tit">참조</h5>
          <p class="sub_txt"><em>목차명</em> > 단락</p>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
            </svg>
          </button>
        </div>
        <div class="modal-body">

          <div class="form_group_wrap col2 d-flex right align-items-center justify-content-end right mb24">
            <div class="form_group align_left">
              <select id="category" class="form_input form-select">
                <option>목차 선택</option>
              </select>
            </div>
            <div class="form_group d-flex align-items-center ml24">
              <label class="form-label mr8" for="">문서유형</label>
              <select id="" class="form_input form-select w140">
                <option>전체</option>
              </select>
            </div>
            <div class="form_group d-flex align-items-center ml24">
              <label class="form-label mr8" for="">관계</label>
              <select id="" class="form_input form-select w140">
                <option>전체</option>
              </select>
            </div>
          </div>

          <div class="count_wrap d-flex align-items-end justify-content-between mb12">
            <p class="left">총 <span class="col_mint70">235</span>건의 참조항목이 있습니다.</p>
            <button type="button" class="right button primary md">참조추가</button>
          </div>

          <div class="list_wrap reference_wrap">
            <div class="list_item nodata">
              <p>
                참조 항목을 추가해주세요.
              </p>
            </div>
            <div class="list_item">
              <div class="list_cont">
                <div class="d-flex">
                  <div class="txt_area flex-grow-1">
                    <p class="index_subject">목차체계</p>
                    <strong class="list_tit mb10"><span class="badge_state col_blue bg_blue10 mr8">역참조</span>수사지원</strong>
                    <div class="okms_txt">수사지원보고서 > 범죄경력자료 및 수사경력자료</div>
                    <div class="d-flex align-items-center">
                      <a href="http://police.bot.diquest.com/" target="_blank" title="새창으로 열림" class="ell1">http://police.bot.diquest.comhttp://police.bot.diquest.com/http://police.bot.diquest.com/http://police.bot.diquest.com//</a>
                    </div>
                  </div>
                  <div class="edit_btn_box flex-shrink-0 ml12">
                    <button type="button" class="btn_edit button outline sm">
                      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s14 mr4">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_edit" />
                      </svg>
                      <span class="label">수정</span>
                    </button>
                    <button type="button" class="btn_edit button outline sm">
                      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s14 mr4">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_del" />
                      </svg>
                      <span class="label">삭제</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="list_item">
              <div class="list_cont">
                <div class="d-flex">
                  <div class="txt_area flex-grow-1">
                    <strong class="list_tit mb10"><span class="badge_state col_green bg_green10 mr8">참조</span>백과사전</strong>
                    <div class="d-flex align-items-center">
                      <a href="http://police.bot.diquest.com/" target="_blank" title="새창으로 열림">http://police.bot.diquest.com/</a>
                    </div>
                  </div>
                  <!-- <div class="edit_btn_box flex-shrink-0 ml12">
                    <button type="button" class="btn_edit button outline sm">
                      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s14 mr4">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_edit" />
                      </svg>
                      <span class="label">수정</span>
                    </button>
                    <button type="button" class="btn_edit button outline sm">
                      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s14 mr4">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_del" />
                      </svg>
                      <span class="label">삭제</span>
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="list_item">
              <div class="list_cont">
                <div class="d-flex">
                  <div class="txt_area flex-grow-1">
                    <strong class="list_tit mb10"><span class="badge_state col_green bg_green10 mr8">참조</span>백과사전</strong>
                    <div class="d-flex align-items-center">
                      <a href="http://police.bot.diquest.com/" target="_blank" title="새창으로 열림">http://police.bot.diquest.com/</a>
                    </div>
                  </div>
                  <div class="edit_btn_box flex-shrink-0 ml12">
                    <button type="button" class="btn_edit button outline sm">
                      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s14 mr4">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_edit" />
                      </svg>
                      <span class="label">수정</span>
                    </button>
                    <button type="button" class="btn_edit button outline sm">
                      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s14 mr4">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_del" />
                      </svg>
                      <span class="label">삭제</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BasePagination />

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