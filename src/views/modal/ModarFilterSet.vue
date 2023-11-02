<template>
  <div class="modal modal_type2 modal_filterSet fade" id="modal_filterSet" tabindex="-1" data-backdrop="static" data-keyboard="false" aria-modal="true">
    <div class="modal-dialog w400 max_h700">
      <div class="modal-content"> 
        <div class="modal-header">
          <h5 class="tit">결과좁혀보기 설정</h5>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb24">
            <p class="txt_bold mb6">분류표현 타입</p>
            <div class="d-flex flex-wrap">
              <div class="custom-control custom-radio">
                  <input type="radio" class="custom-control-input" id="filterSetSample1" name="filterSetSample" checked="">
                  <label class="custom-control-label" for="filterSetSample1"><span>하이라키</span></label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="filterSetSample2" name="filterSetSample">
                <label class="custom-control-label" for="filterSetSample2"><span>플랫</span></label>
              </div>
            </div>
          </div>
          <div>
            <p class="txt_bold mb6">노출 저장소 선택</p>
            <div class="allCheck_comp">
              <div class="allCheck_list all">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="filter_check1">
                  <label class="custom-control-label" for="filter_check1"><span>전체</span></label>
                </div>
              </div>
              <div class="allCheck_list">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="filter_check2" checked>
                  <label class="custom-control-label" for="filter_check2"><span>인기검색어TOP10 <em class="col_txt_required type_caption_sm">(필수)</em></span></label>
                </div>
                <div class="allCheck_list">
                  <button type="button" class="i_s20">
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_sequence-up" />
                    </svg>
                  </button>
                  <button type="button" class="i_s20">
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_sequence-down" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="allCheck_list">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="filter_check3" checked>
                  <label class="custom-control-label" for="filter_check3"><span>인기검색어TOP5 <em class="col_txt_required type_caption_sm">(필수)</em></span></label>
                </div>
                <div class="d-flex">
                  <button type="button" class="i_s20">
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_sequence-up" />
                    </svg>
                  </button>
                  <button type="button" class="i_s20">
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_sequence-down" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 미체크 시 addClss('disabled') -->
              <div class="allCheck_list disabled">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="filter_check4">
                  <label class="custom-control-label" for="filter_check4"><span>미체크 시 화살표 아이콘비활성화</span></label>
                </div>

                <div class="d-flex">
                  <button type="button" class="i_s20">
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_sequence-up" />
                    </svg>
                  </button>
                  <button type="button" class="i_s20">
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_sequence-down" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <!-- //allCheck_comp -->
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