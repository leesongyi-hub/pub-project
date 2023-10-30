<template>

<!-- S. 의견 모달 -->
<div class="modal modal_comment fade" id="modal_comment" tabindex="-1" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog w700">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="tit">의견</h5>
        <strong class="mt8 mb2">문서명 : 100세변액연금보험(B1.0 무배당)</strong>
        <p class="sub_txt"><em>목차명</em> > 단락</p>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <div class="regist_wrap">
          <div class="d-flex mb8">
            <textarea class="form-control" id="" placeholder="의견을 남겨보세요."></textarea>
          </div>
          <div class="d-flex align-items-center mb_24">
            <div class="d-flex me-auto">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="content1_1">
                <label class="custom-control-label" for="content1_1"><span>중요의견</span></label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="content1_2">
                <label class="custom-control-label" for="content1_2"><span>작성자 비공개</span></label>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="btn_save button primary md"
              >
                <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s18 mr4 col_white">
                  <use xlink:href="@/assets/images/sp_svg.svg#ico_save" />
                </svg>
                저장
              </button>
            </div>
          </div>
        </div>
        
        <div class="comment_wrap">
          
          <!--S. 의견리스트
            Case1.중요의견
          -->
          <div class="comment_list">
            <div class="list_item fix">
              <div class="list_head">
                <div class="name">홍길동<span class="caption">2023-08-03 13:13</span></div>
                <span class="badge_state col_white bg_blue">중요의견</span>
              </div>
              <div class="list_cont">
                <div class="view_mode d-flex">
                  <div class="txt_area flex-grow-1">
                    다양한 산업과 융합을 통한 무한가치, 인간의 삶을 보다 풍요롭게 할 기술 혁신을 꿈꾸며 오늘도 NHN다이퀘스트는 최선을 다하고 있습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--//E. 의견리스트-->

          <!--S. 의견리스트
            Case2.중요의견 + 내가 쓴 의견
          -->
          <div class="comment_list">
            <div class="list_item fix edit_view">
              <div class="list_head">
                <div class="name">정승한<span class="caption">2023-08-03 13:13</span></div>
                <span class="badge_state col_white bg_blue">중요의견</span>
              </div>
              <div class="list_cont">
                <div
                  class="view_mode d-flex"
                  v-if="!isEdit"
                >
                  <div class="txt_area flex-grow-1">
                    다양한 산업과 융합을 통한 무한가치, 인간의 삶을 보다 풍요롭게 할 기술 혁신을 꿈꾸며 오늘도 NHN다이퀘스트는 최선을 다하고 있습니다.
                  </div>
                  <div class="edit_btn_box flex-shrink-0">

                    <button
                      type="button"
                      class="btn_edit button outline sm"
                      @click="showEdit"
                    >
                      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s14 mr4">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_edit" />
                      </svg>
                      <span class="label">수정</span>
                    </button>

                    <button
                      type="button"
                      class="button outline sm"
                      
                    >
                      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s14 mr4">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_del" />
                      </svg>
                      <span class="label">삭제</span>
                    </button>
                  </div>
                </div>

                <!--S. 의견 수정모드-->
                <div
                  class="edit_mode"
                  v-if="isEdit"
                >
                  <div class="d-flex align-items-center mb_24">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="content2_1">
                      <label class="custom-control-label" for="content2_1"><span>중요의견</span></label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="content2_2">
                      <label class="custom-control-label" for="content2_2"><span>작성자 비공개</span></label>
                    </div>
                  </div>
                  <div class="mt8 d-flex">
                    <div class="flex-grow-1">
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">다양한 산업과 융합을 통한 무한가치, 인간의 삶을 보다 풍요롭게 할 기술 혁신을 꿈꾸며 오늘도 NHN다이퀘스트는 최선을 다하고 있습니다.</textarea>
                    </div>
                    <div class="flex-shrink-0">
                      <div class="edit_btn_box">
                        <button
                          type="button"
                          class="btn_save button outline sm"
                        >
                          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s14 mr4">
                            <use xlink:href="@/assets/images/sp_svg.svg#ico_save" />
                          </svg>
                          저장
                        </button>

                        <button
                          type="button"
                          class="btn_save button outline sm"
                        >
                          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s14 mr4">
                            <use xlink:href="@/assets/images/sp_svg.svg#ico_del" />
                          </svg>
                          삭제
                        </button>

                        <button
                          type="button"
                          class="btn_save button outline sm"
                          @click="hideEdit"
                        >
                          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s14 mr4">
                            <use xlink:href="@/assets/images/sp_svg.svg#ico_cancel" />
                          </svg>
                          취소
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--E. 의견 수정모드-->
              </div>
            </div>
          </div>
          <!--//E. 의견리스트-->

          <!--S. 의견리스트
            Case3.기본 + 비공개
          -->
          <div class="comment_list">
            <div class="list_item">
              <div class="list_head">
                <!-- 비공개일때 addClass : private -->
                <div class="name private">비공개<span class="caption">2022-08-03 13:13</span></div>
              </div>
              <div class="list_cont">
                <div class="view_mode d-flex">
                  <div class="txt_area flex-grow-1">
                    다양한 산업과 융합을 통한 무한가치, 인간의 삶을 보다 풍요롭게 할 기술 혁신을 꿈꾸며 오늘도 NHN다이퀘스트는 최선을 다하고 있습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--//E. 의견리스트-->

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="button outline lg" data-dismiss="modal">취소</button>
        <button type="button" class="button primary lg" data-dismiss="modal">확인</button>
      </div>
    </div>
  </div>
</div>
<!-- //E. 의견 모달 -->

</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isEdit = ref();
    const showEdit = () => {
      isEdit.value = !isEdit.value;
    }

    const hideEdit = () => {
      isEdit.value = false;
    }
    
    return{
      isEdit,
      showEdit,
      hideEdit
    }
  },

};
</script>

<style scoped>
</style>