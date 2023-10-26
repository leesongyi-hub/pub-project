<template>
	<!-- S. 문서정보 모달-->

  <div class="modal modal_documentInfo fade show" id="modal_documentInfo" tabindex="-1" data-backdrop="static" data-keyboard="false" aria-modal="true" role="dialog" style="display:block;">
    <div class="modal-dialog w1000">
			<div class="modal-content">
				<div class="modal-body">

          <div class="table_wrap">
            <div class="responsive_table">

              <dl class="tr w100">
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
                    v-if="!isEdit"
                  >
                    <div class="d-flex">
                      <span>출처는 인포채터 3입니다.</span>
                      <button
                        btype="button"
                        class="btn_titEdit ico ico_edit i_s20 ml4"
                        @click="showEdit"
                      >
                        <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s16"><use xlink:href="@/assets/images/sp_svg.svg#ico_edit" /></svg>
                      </button>
                    </div>
                  </div>

                  <!-- 편집 모드🔻 -->
                  <div
                    class="edit_mode"
                    v-if="isEdit"
                  >
                    <div class="edit_box d-flex">
                      <input type="text" class="form_input w700" placeholder="" value="출처는 인포채터 3입니다." />
                      <button
                        type="button"
                        class="button outline md ml8"
                        @click="hideEdit"
                      >
                        저장
                      </button>
                      <button
                        type="button" class="button outline md btn_cancel ml8"
                        @click="hideEdit"
                      >
                        취소
                      </button>
                    </div>
                  </div>

                </dd>
              </dl>

              <dl class="tr w100 edit_view">
                <dt class="th"><span>원본 URL</span></dt>
                <dd class="td">
                  <!-- 보기 모드🔻 -->
                  <div
                    class="view_mode"
                    v-if="!isEdit"
                  >
                    <div class="d-flex">
                      <span>https://hansungackr-my.sharepoint.com/:p:/g/personal</span>
                      <button
                        btype="button"
                        class="btn_titEdit ico ico_edit i_s20 ml4"
                        @click="showEdit"
                      >
                        <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s16"><use xlink:href="@/assets/images/sp_svg.svg#ico_edit" /></svg>
                      </button>
                    </div>
                  </div>

                  <!-- 편집 모드🔻 -->
                  <div
                    class="edit_mode"
                    v-if="isEdit"
                  >
                    <div class="edit_box d-flex">
                      <input type="text" class="form_input w700" placeholder="" value="https://hansungackr-my.sharepoint.com/:p:/g/personal" />
                      <button
                        type="button"
                        class="button outline md ml8"
                        @click="hideEdit"
                      >
                        저장
                      </button>
                      <button
                        type="button" class="button outline md btn_cancel ml8"
                        @click="hideEdit"
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </dd>
              </dl>	
            </div>
          </div>

				</div>

			</div>
		</div>
	</div>
	<!-- //E. 문서정보 모달 -->

</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tagList = ref([
      "문서 대분류 > 문서 중분류 > 문서 소분류 > 분류1",
      "문서 대분류 > 문서 중분류 > 문서 소분류 > 분류2",
      "문서 대분류 > 문서 중분류 > 문서 소분류 > 분류3"
    ]);

    const removeTag = (index) => {
      tagList.value.splice(index, 1);
    };

    const isEdit = ref();
    const showEdit = () => {
      //내가 클릭한 버튼의 부모 요소(.edit_view) 내부에서 조작하고싶습니다.
      this.$parent.$parent.isEdit.value = !isEdit.value;
    }

    const hideEdit = () => {
      //내가 클릭한 버튼의 부모 요소(.edit_view) 내부에서 조작하고싶습니다.
      this.$parent.$parent.isEdit.value = false;
    }   

    return {
      tagList,
      removeTag,

      isEdit,
      showEdit,
      hideEdit
    };
  },
};
</script>

<style scoped>
</style>