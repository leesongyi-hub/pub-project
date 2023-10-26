<template>
	<!-- S. 문서정보 모달-->

  <div class="modal modal_documentInfo fade" id="modal_documentInfo" tabindex="-1" data-backdrop="static" data-keyboard="false" aria-modal="true" role="dialog">
    <div class="modal-dialog w1000">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="tit">문서명 표시</h5>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
          </svg>
        </button>
				</div>
				<div class="modal-body">

          <!--S. 1. 문서정보-->
          <div class="tab-pane">
            <div class="section">
              <div class="tit_area d-flex align-items-end justify-content-between mb12">
                <p class="h2">문서정보</p>
                <div class="custom-control custom-checkbox form-check">
                  <input type="checkbox" id="" class="custom-control-input" checked />
                  <label class="custom-control-label" for=""><span>중요문서</span></label>
                </div>
              </div>
              <div class="table_wrap">
                <div class="responsive_table">
                  <dl class="tr">
                    <dt class="th"><span>상태</span></dt>
                    <dd class="td">
                      <a href="javscript:;" data-toggle="modal" data-target="#modal_stateHistory" ><span class="dot_state"><i class="mark bg_mint70"></i>등록</span></a>
                      <!-- <a href="javscript:;" data-toggle="modal" data-target="#modal_stateHistory"><span class="dot_state"><i class="mark bg_yellow"></i>수정</span></a>
                      <a href="javscript:;" data-toggle="modal" data-target="#modal_stateHistory"><span class="dot_state"><i class="mark bg_blue"></i>완료</span></a>
                      <a href="javscript:;" data-toggle="modal" data-target="#modal_stateHistory"><span class="dot_state"><i class="mark bg_red"></i>반려</span></a>
                      <a href="javscript:;" data-toggle="modal" data-target="#modal_stateHistory"><span class="dot_state"><i class="mark bg_green"></i>승인</span></a> -->
                    </dd>
                  </dl>
                  <dl class="tr">
                    <dt class="th"><span>조회수</span></dt>
                    <dd class="td">23,893</dd>
                  </dl>
                  <dl class="tr">
                    <dt class="th"><span>등록자</span></dt>
                    <dd class="td">정동진</dd>
                  </dl>
                  <dl class="tr">
                    <dt class="th"><span>등록일시</span></dt>
                    <dd class="td">2021.08.29 19:27:32</dd>
                  </dl>
                  <dl class="tr">
                    <dt class="th"><span>수정자</span></dt>
                    <dd class="td">정동진</dd>
                  </dl>
                  <dl class="tr">
                    <dt class="th"><span>수정일시</span></dt>
                    <dd class="td">2021.08.29 19:27:32</dd>
                  </dl>

                  <dl class="tr">
                    <dt class="th"><span>게시일</span></dt>
                    <dd class="td">
                      <div class="d-flex align-items-center">
                        <span>2021.08.29</span><button type="button" class="button outline md ml8">수정</button>
                      </div>
                      <appdate-picker
                        :full-month-name="true"
                        input-class="customClass"
                        placeholder="YYYY-MM-DD"
                        :typeable="true"
                        :hideInput="false"
                      >
                      </appdate-picker>


                    </dd>
                  </dl>

                  <dl class="tr">
                    <dt class="th"><span>담당자</span></dt>
                    <dd class="td">
                      <div class="d-flex align-items-center">
                        <span>홍길동</span>
                        <button
                          type="button"
                          class="button outline md ml8"
                          data-toggle="modal"
                          data-target="#modal_manager"
                        >수정</button>
                      </div>
                    </dd>
                  </dl>

                  <dl class="tr w100 edit_view">
                    <dt class="th"><span>문서분류</span></dt>
                    <dd class="td">
                      <div class="d-flex">	
                        
                        <div
                          class="add_tag_list flex-grow-1 mr8"
                          v-show="tagList.length > 0"
                        >
                          <div
                            class="add_tag d-flex"
                            v-for="tag in tagList"
                            :key="tag"
                          >
                            <span class="txt">{{ tag }}</span>
                            <button
                              type="button"
                              aria-label="삭제"
                              @click="removeTag"
                            >
                              <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20">
                                <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
                              </svg>
                            </button>
                          </div>

                        </div>

                        <div class="flex-shrink-0">
                          <button type="button" class="button outline md" data-toggle="modal" data-target="#modal_categoryRegist">추가</button>
                        </div>
                      </div>
                    </dd>
                  </dl>

                  <dl class="tr w100 edit_view">
                    <dt class="th"><span>출처</span></dt>
                    <dd class="td">

                      <!-- 보기 모드🔻 -->
                      <div
                        class="view_mode"
                        v-if="!isSourceEdit"
                      >
                        <div class="d-flex">
                          <span>출처는 인포채터 3입니다.</span>
                          <button
                            btype="button"
                            class="btn_titEdit ico ico_edit i_s20 ml4"
                            @click="showSourceEdit"
                          >
                            <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s16"><use xlink:href="@/assets/images/sp_svg.svg#ico_edit" /></svg>
                          </button>
                        </div>
                      </div>

                      <!-- 편집 모드🔻 -->
                      <div
                        class="edit_mode"
                        v-if="isSourceEdit"
                      >
                        <div class="edit_box d-flex">
                          <input type="text" class="form_input w700" placeholder="" value="출처는 인포채터 3입니다." />
                          <button
                            type="button"
                            class="button outline md ml8"
                            @click="isSourceEdit = false"
                          >
                            저장
                          </button>
                          <button
                            type="button" class="button outline md btn_cancel ml8"
                            @click="isSourceEdit = false"
                          >
                            취소
                          </button>
                        </div>
                      </div>

                    </dd>
                  </dl>

                  <dl class="tr w100 edit_view">
                    <dt class="th"><span>키워드</span></dt>
                    <dd class="td">
                      <div class="edit_box d-flex">
                        <input type="text" class="form_input" placeholder="키워드를 입력해주세요" v-model="newTag" @keyup.enter="addTag">
                        <button type="button" class="button outline md ml8" @click="addTag">추가</button>
                        <button type="button" class="button primary md ml8">추천키워드 등록</button>
                      </div>                      

                      <div class="add_tag" v-for="(tag, index) in tags" :key="index">
                        <span class="txt">{{ tag }}</span>
                        <button type="button" class="d-flex" aria-label="삭제" @click="removeTag2(index)">
                          <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20">
                            <use xlink:href="static/img/sp_svg.4e495612.svg#ico_deleted"></use>
                          </svg>
                        </button>
                      </div>

                    </dd>
                  </dl>

                  <dl class="tr w100 edit_view">
                    <dt class="th"><span>원본 URL</span></dt>
                    <dd class="td">
                      <!-- 보기 모드🔻 -->
                      <div
                        class="view_mode"
                        v-if="!isUrlEdit"
                      >
                        <div class="d-flex">
                          <span>https://hansungackr-my.sharepoint.com/:p:/g/personal</span>
                          <button
                            btype="button"
                            class="btn_titEdit ico ico_edit i_s20 ml4"
                            @click="showUrlEdit"
                          >
                            <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s16"><use xlink:href="@/assets/images/sp_svg.svg#ico_edit" /></svg>
                          </button>
                        </div>
                      </div>

                      <!-- 편집 모드🔻 -->
                      <div
                        class="edit_mode"
                        v-if="isUrlEdit"
                      >
                        <div class="edit_box d-flex">
                          <input type="text" class="form_input w700" placeholder="" value="https://hansungackr-my.sharepoint.com/:p:/g/personal" />
                          <button
                            type="button"
                            class="button outline md ml8"
                            @click="isUrlEdit = false"
                          >
                            저장
                          </button>
                          <button
                            type="button" class="button outline md btn_cancel ml8"
                            @click="isUrlEdit = false"
                          >
                            취소
                          </button>
                        </div>
                      </div>
                    </dd>
                  </dl>	
                </div>
              </div>
              <!--//E. table_wrap-->
            </div>
            <!--//E. section-->

            <div class="section mt32">
              <p class="h2 mb12">부가정보 설정</p>
              <div class="table_wrap">
                <div class="responsive_table">

                  <!--S. 22.10.12 노데이터 케이스 추가-->
                  <dl class="tr w100 nodata">
                    <p>데이터가 없습니다.</p>
                  </dl>
                  <!--//E. 22.10.12 노데이터 케이스 추가-->

                  <dl class="tr w100">
                    <dt class="th"><span class="essential">셀렉트박스</span></dt>
                    <dd class="td">
                      <div class="edit_box d-flex">
                        <select class="form_input form-select">
                          <option value="">선택하세요</option>
                          <option value="">선택하세요</option>
                        </select>
                        <button type="button" class="button outline md ml8">추가</button>
                      </div>
                    </dd>
                  </dl>
                  <dl class="tr w100 align-items-center">
                    <dt class="th"><span class="essential">라디오</span></dt>
                    <dd class="td">
                      <div class="d-flex flex-wrap">
                        <div class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" id="radio1" name="sample" checked>
                            <label class="custom-control-label" for="radio1"><span>Label</span></label>
                        </div>
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="radio2" name="sample" disabled>
                          <label class="custom-control-label" for="radio2"><span>Label</span></label>
                        </div>
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="radio3" name="sample">
                          <label class="custom-control-label" for="radio3"><span>Label</span></label>
                        </div>
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="radio4" name="sample">
                          <label class="custom-control-label" for="radio4"><span>Label</span></label>
                        </div>
                      </div>
                    </dd>
                  </dl>
                  <dl class="tr w100 align-items-center">
                    <dt class="th"><span>체크박스</span></dt>
                    <dd class="td">
                      <div class="d-flex flex-wrap">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="check1" checked>
                            <label class="custom-control-label" for="check1"><span>Label</span></label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="check2" disabled>
                          <label class="custom-control-label" for="check2"><span>Label</span></label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="check3">
                          <label class="custom-control-label" for="check3"><span>Label</span></label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="check4">
                          <label class="custom-control-label" for="check4"><span>Label</span></label>
                        </div>
                      </div>
                    </dd>
                  </dl>
                  <dl class="tr w100">
                    <dt class="th"><span>입력박스</span></dt>
                    <dd class="td">
                      <div class="edit_box d-flex">
                        <input type="text" class="form_input" placeholder="placeholder" value="" />
                        <button type="button" class="button outline md ml8">추가</button>
                      </div>
                    </dd>
                  </dl>
                  <dl class="tr w100">
                    <dt class="th"><span>textarea</span></dt>
                    <dd class="td">
                      <div class="d-flex">
                        <textarea class="form-control" id="" placeholder="내용을 입력하세요." style="height:100px;"></textarea>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <!--//E. 1. 문서정보-->

				</div>
				<div class="modal-footer">
					<button type="button" class="button outline lg" data-dismiss="modal">취소</button>
					<button type="button" class="button primary lg" data-dismiss="modal">확인</button>
				</div>
			</div>
		</div>
	</div>
	<!-- //E. 문서정보 모달 -->




</template>

<script>


import { ref } from "vue";

export default {
  components: {
    
  },
  setup() {
    const tagList = ref([
      "문서 대분류 > 문서 중분류 > 문서 소분류 > 분류1",
      "문서 대분류 > 문서 중분류 > 문서 소분류 > 분류2",
      "문서 대분류 > 문서 중분류 > 문서 소분류 > 분류3"
    ]);
    const removeTag = (index) => {
      tagList.value.splice(index, 1);
    };

    const isSourceEdit = ref();
    const showSourceEdit = () => {
      isSourceEdit.value = !isSourceEdit.value;
    }

    const isUrlEdit = ref();
    const showUrlEdit = () => {
      isUrlEdit.value = !isUrlEdit.value;
    }

    const newTag = ref('');
    const tags = ref([
      '샘플키워드',
    ]);
    const addTag = () => {
      if (newTag.value.trim() !== '') {
        tags.value.push(newTag.value);
        newTag.value = '';
      }
    };
    const removeTag2 = (index) => {
      tags.value.splice(index, 1);
    }


    return {
      tagList,
      removeTag,

      isSourceEdit,
      showSourceEdit,

      isUrlEdit,
      showUrlEdit,

      newTag,
      tags,
      addTag,
      removeTag2,
    };
  }
};
</script>

<style>

.modal.show ~ .modal.show{
  z-index:1053;
}
.modal-backdrop + .modal-backdrop{
  z-index: 1052 !important;
}
</style>