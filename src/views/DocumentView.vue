<template>
  <div class="document_page">
    <DocumentHeader />
    <div class="content">      
      <DocumentNav />
      <main class="doc_list_wrap">
        <ul >  


  
          <li class="doc_list_item" v-for="(list, index) in 3" :key="index">
            <div class="doc_list_head">
              <div class="tit_area">
                <button
                  type="button"
                  class="btn_acco"
                >
                  <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24 stroke ico_arr_bot col_lightgray">
                    <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />
                  </svg>
                </button>
                <div class="tit">국민건강보험이란</div>
                <button type="button" class="btn_edit"></button>
              </div>
    
              <ul class="edit_btn_area">
                <li>
                  <button>
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_share" />
                    </svg>
                    <span class="mark_count">6</span>
                  </button>
                </li>        
                <li class="dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <button>
                      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_more" />
                      </svg>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                    <a role="button" href="javascript:;" class="dropdown-item">목차정보</a>
                    <a role="button" href="javascript:;" class="dropdown-item border_bot">연계 질의관리</a>	
                    <a role="button" href="javascript:;" class="dropdown-item ">하위목차 추가</a>
                    <a role="button" href="javascript:;" class="dropdown-item">단락 추가</a>
                    <a role="button" href="javascript:;" class="dropdown-item">목차 삭제</a>
                  </div>
                </li>
              </ul>
            </div>
            <!-- //doc_list_head -->
  
            <div class="doc_list_body">

              <div class="doc_list_content">
                <div class="view_mode">
                  <div class="inner">
                    <div class="">
                      첫 번째로 직장 가입자 산정기준에 대해 알아보겠습니다. 기본적으로 직장가입자는 4대 보험료를 먼저 공제하고 급여(보수월액)를 수령하게 됩니다. 4대보험료 중 고용보험, 연금보험, 건강보험은 회사와 근로자가 각자 절반씩 부담하고 산재보험만 회사에서 전액 부담하고 있습니다.
                    </div>
                    <!-- <button class="btn_more res"></button> -->
                  </div>
                  <div class="edit_btn_area">
                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="의견">
                      <svg class="icoSvg i_s18" role="img" aria-hidden="true" focusable="false">
                          <use xlink:href="@/assets/images/sp_svg.svg#ico_talk" />
                      </svg>
                    </button>
                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="수정">            
                      <svg class="icoSvg i_s16" role="img" aria-hidden="true" focusable="false">
                          <use xlink:href="@/assets/images/sp_svg.svg#ico_edit" />
                      </svg>
                    </button>
                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="삭제">            
                      <svg class="icoSvg i_s18" role="img" aria-hidden="true" focusable="false">
                          <use xlink:href="@/assets/images/sp_svg.svg#ico_del" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="doc_list_content">
                <div class="editor_mode">
                  <div ref="editor" class="editor"></div>
                  <div class="edit_btn_box">
                    <button type="button" class="btn_save button primary md">수정</button>
                    <button type="button" class="btn_del button outline md">취소</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- //doc_list_body -->
          </li>
          <!-- //doc_list_item -->

          <!-- <li class="doc_list_item"> 
            <div class="doc_list_head">
              <div class="tit_area">
                <button
                  type="button"
                  class="btn_acco"
                >
                  <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24 stroke ico_arr_bot col_lightgray">
                    <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />
                  </svg>
                </button>
                <div class="tit">피부양자 자격조건</div>
                <button type="button" class="btn_edit"></button>
              </div>
    
              <ul class="edit_btn_area">
                <li>
                  <button>
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_share" />
                    </svg>
                    <span class="mark_count">6</span>
                  </button>
                </li>        
                <li class="dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <button>
                      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_more" />
                      </svg>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                    <a role="button" href="javascript:;" class="dropdown-item">목차정보</a>
                    <a role="button" href="javascript:;" class="dropdown-item border_bot">연계 질의관리</a>	
                    <a role="button" href="javascript:;" class="dropdown-item ">하위목차 추가</a>
                    <a role="button" href="javascript:;" class="dropdown-item">단락 추가</a>
                    <a role="button" href="javascript:;" class="dropdown-item">목차 삭제</a>
                  </div>
                </li>
              </ul>      
            </div>

  
            <div class="doc_list_body">
              <div class="doc_list_content">
                <div class="view_mode">
                  <div class="inner">
                    <div class="">
                      피부양자는 보험료가 면제되지만 건강보험 혜택을 동일하게 받는 사람을 말합니다. 국가는 건강보험의 국민 신뢰와 장기 지속성을 높이기 위해 2018년 7월부터 2022년까지 2단계에 걸쳐 소득 중심의 건보료 부과체계를 개편하면서 피부양자 인정기준을 한층 강화했습니다.
                    </div>

                  </div>
                  <div class="edit_btn_area">
                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="의견">
                      <svg class="icoSvg i_s18" role="img" aria-hidden="true" focusable="false">
                          <use xlink:href="@/assets/images/sp_svg.svg#ico_talk" />
                      </svg>
                    </button>
                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="수정">            
                      <svg class="icoSvg i_s16" role="img" aria-hidden="true" focusable="false">
                          <use xlink:href="@/assets/images/sp_svg.svg#ico_edit" />
                      </svg>
                    </button>
                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="삭제">            
                      <svg class="icoSvg i_s18" role="img" aria-hidden="true" focusable="false">
                          <use xlink:href="@/assets/images/sp_svg.svg#ico_del" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="doc_list_content">
                <div class="editor_mode">
                  <div ref="editor" class="editor"></div>
                  <div class="edit_btn_box">
                    <button type="button" class="btn_save button primary md">수정</button>
                    <button type="button" class="btn_del button outline md">취소</button>
                  </div>
                </div>
              </div>
            </div>

          </li> -->
          <!-- //doc_list_item -->
        </ul>
      </main>
    </div>
    <!-- //content -->
  </div>
  <!-- //document_page -->

</template>

<script>
import DocumentHeader from "../components/document/DocumentHeader.vue";
import DocumentNav from "../components/document/DocumentNav.vue";

import { onMounted, ref } from 'vue';
import { Tooltip } from 'bootstrap';

import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default {
  name: 'DocumentPage',
  components: {
    DocumentHeader,
    DocumentNav,
  },
  props: {
    modelValue: {
        type: String,
        required: false,
        default: '',
    },
  },
  setup(props, { emit }) {
    const editor = ref();
    const editorValid = ref();
    const testHtml = ref();
    // 마운트될 때 Editor 생성
    onMounted(() => {
      editorValid.value = new Editor({
        el: editor.value,
        height: '400px',
        initialEditType: 'wysiwyg',
        previewStyle: 'tab',
        events: {
          change: () => emit('update:modelValue', editorValid.value.getMarkdown()),
        },
      });
      
      //init tooltip
      Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]')).forEach(tooltipNode => new Tooltip(tooltipNode));
    });
    // 작성한 내용을 불러와서 HTML 적용
    const testValid = () => {
      testHtml.value = editorValid.value.getHTML();
    };

    // const isExpended = ref([]);
    // const toggleExpended = (index) => {
    //   isExpended.value[index] = !isExpended.value[index];
    // }
    return {
        editor,
        editorValid,
        testHtml,
        testValid,

        // isExpended,
        // toggleExpended,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
