<template>
  <div class="document_page">
    <DocumentHeader />
    <div class="content">
      <nav class="doc_nav">
        <div class="nav_head">
          <h2>목차</h2>
          <button type="button" class="btn_close">
          </button>
        </div>
        <div class="nav_body">
          <ul 
            v-for="(item, index) in titles"
            :key="index"
          >
            <li><a :href="'/#/document/#idx' + index">{{ titles[index] }}</a></li>
          </ul>
        </div>
      </nav>
      <main class="doc_list_wrap">
        <ul v-for="(item, index) in titles" :key="index">  
          <li class="doc_list_item" :id="'idx' + index"> 
            <div class="doc_list_head" :aria-expanded="isExpended[index] ? 'true' : 'false'">
              <div class="tit_area">
                <button
                  type="button"
                  class="btn_acco"
                  @click="toggleExpended(index)"
                >
                  <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24 stroke ico_arr_bot col_lightgray">
                    <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />
                  </svg>
                </button>
                <div class="tit">
                  <span
                    v-if="!isEdit[index]"
                  >
                    {{ titles[index] }}
                  </span>
                  <div
                    class="d-flex flex-fill"
                    v-if="isEdit[index]"
                  >
                    <input type="text" :value="titles[index]" class="form_input w100" />                    
                    <button type="button" class="btn_del button outline md ml6" @click="showEdit(index)">저장</button>
                    <button type="button" class="btn_del button outline md ml6" @click="showEdit(index)">취소</button>
                  </div>
                  <button
                    type="button"
                    class="btn_edit"
                    @click="showEdit(index)"
                    v-if="!isEdit[index]"
                  >
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s18 col_gray">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_edit"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <ul class="edit_btn_area">
                <li>
                  <button class="box_s24" data-bs-toggle="tooltip" data-bs-placement="top" title="파일">                    
                    <svg class="icoSvg stroke" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_file" /></svg>
                    <span class="mark_count">6</span>
                  </button>
                </li>
                <li>
                  <button class="box_s24" data-bs-toggle="tooltip" data-bs-placement="top" title="참조">                    
                    <svg class="icoSvg" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_share" /></svg>
                    <span class="mark_count">2</span>
                  </button>
                </li>
                <li>
                  <button class="box_s24" data-bs-toggle="tooltip" data-bs-placement="top" title="의견">                    
                    <svg class="icoSvg" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_talk" /></svg>
                    <span class="mark_count">99+</span>
                  </button>
                </li>
                <li class="btn_scrap_area">
                  <button
                    class="box_s24"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="스크랩"
                    @click="btnToggleClass(index)"
                    :class="isToggleClass[index] ? 'btn_scrap on' : 'btn_scrap'"
                  >
                    <svg class="icoSvg i_s20 stroke" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_scrap" /></svg>
                  </button>
                </li>

                <li class="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <button class="box_s24" data-bs-toggle="tooltip" data-bs-placement="top" title="더보기">
                    <svg class="icoSvg i_s20 stroke" role="img" aria-hidden="true" focusable="false">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_more" />
                    </svg>
                  </button>										
                  <div class="dropdown-menu dropdown-menu-right">

                    <!--S. [반응형] -->
                    <a href="javascript:;" role="button" class="dropdown-item mo">
                      <span>첨부파일</span>
                      <span class="ico_mask">
                        <svg class="icoSvg i_s20 stroke" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_file" /></svg>
                        <span class="mark_count">6</span>
                      </span>
                    </a>
                    <a href="javascript:;" role="button" class="dropdown-item mo">
                      <span>참조</span>
                      <span class="ico_mask">
                        <svg class="icoSvg i_s20 stroke" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_share" /></svg>
                        <span class="mark_count">2</span>
                      </span>
                    </a>
                    <a href="javascript:;" role="button" class="dropdown-item mo border_bot">
                      <span>의견</span>
                      <span class="ico_mask">
                        <svg class="icoSvg i_s20 stroke" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_talk" /></svg>
                        <span class="mark_count">99+</span>
                      </span>
                    </a>                    
                    <!--//E. [반응형] -->

                    <a href="javascript:;" role="button" class="dropdown-item"><span>목차정보</span></a>
                    <a href="javascript:;" role="button" class="dropdown-item border_bot"><span>연계 질의관리</span></a>
                    <a href="javascript:;" role="button" class="dropdown-item "><span>하위목차 추가</span></a>
                    <a href="javascript:;" role="button" class="dropdown-item"><span>단락 추가</span></a>
                    <a href="javascript:;" role="button" class="dropdown-item"><span>목차 삭제</span></a>
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
                      국민건강보험, 줄여서 건보(健保)는 한국의 사회보장제도(social insurance)의 하나로, <a href="javascript:;" class="outlink" targtet="_blank" title="새창열림">공공의료보험</a>(public health care)에 속한다. (해당 제도에 대한 전반적인 설명과 타국의 의료보험 제도는 의료보험 문서를 참조.) 모든 제도가 그러하듯 단점도 있지만[1], 그만큼 국민에게 큰 혜택을 주는 제도이고, 이런 장점 덕분에 국민건강보험은 지금도 각광받는 사회보장제도 중 하나로 남아있다.
                      적용근거는 국민건강보험법에 따르며, <mark>보건복지부</mark> 산하 국민건강보험공단과 건강보험심사평가원이 운영한다. 건강보험료 납입과 지출의 재정관리는 국민건강보험공단이 하고  <a href="javascript:;" class="outlink" targtet="_blank" title="새창열림">의료기관 관리</a> 및 진료비 심사는 건강보험심사평가원(심평원)에서 맡고 있다. 본래부터 이전 의료보험조합의 역할은 통합된 건강보험공단이 가지고, 이전 의료보험조합연합회의 심사 권한은 심사평가원이 이어 받은 것이다.
                    </div>
                    <button class="btn_more res dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg class="icoSvg i_s18" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_more" /></svg>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">     
                        <a href="javascript:;" role="button" class="dropdown-item border_bot">
                          <span>의견</span>
                          <span class="ico_mask">
                            <svg class="icoSvg i_s18" role="img" aria-hidden="true" focusable="false">
                              <use xlink:href="@/assets/images/sp_svg.svg#ico_talk" />
                            </svg>
                            <span class="mark_count">99+</span>
                          </span>
                        </a>
                        <a href="javascript:;" role="button" class="dropdown-item"><span>수정</span></a>
                        <a href="javascript:;" role="button" class="dropdown-item"><span>삭제</span></a>
                    </div>
                  </div>

                  <div class="edit_btn_area">
                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="의견">
                      <svg class="icoSvg i_s18" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_talk" /></svg>
                      <span class="mark_count">99+</span>
                    </button>
                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="수정">
                      <svg class="icoSvg i_s18" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_edit" /></svg>
                    </button>
                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="삭제">
                      <svg class="icoSvg i_s18" role="img" aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_del" /></svg>
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
        </ul>
      </main>
    </div>
    <!-- //content -->
  </div>
  <!-- //document_page -->

</template>

<script>
import DocumentHeader from "../components/document/DocumentHeader.vue";

import { onMounted, ref } from 'vue';

import { Tooltip } from 'bootstrap';

import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default {
  name: 'DocumentPage',
  components: {
    DocumentHeader,
  },
  setup()
  {
    const editor = ref([]);
    const editorValid = ref([]);
    const testHtml = ref();

    const titles = ref([
      '국민건강보험이란',
      '자격정지 및 자격정지의 해제',
      '법률에 의한 강제 가입',
      '비급여 대상',
    ])

    onMounted(() => { 
      for( const item of editor.value ){
        const newEditor = 
        new Editor({
          el: item,
          height: '400px',
          initialEditType: 'wysiwyg',
          previewStyle: 'tab',
        });
        editorValid.value.push(newEditor);
      }

      //init tooltip      
      Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]')).forEach(tooltipNode => new Tooltip(tooltipNode, {
        trigger: 'hover'
      }));

      //앵커 태그에 대한 이벤트 리스너 등록
      const anchorLinks = document.querySelectorAll('.nav_body a');
      anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', () => {
          const targetId = anchor.getAttribute('href');
          const targetFragment = targetId.split('document/#')[1]; 
          if (targetFragment) {
            const targetElement = document.querySelector(`#${targetFragment}`);
            const targetHead = targetElement.querySelector('.doc_list_head');
            targetHead.setAttribute('aria-expanded', 'true');
            targetHead.classList.add('active');
            setTimeout(() => {
              targetHead.classList.remove('active');
            }, 3000);
          }
        });
      });

    });

    // 작성한 내용을 불러와서 HTML 적용
    const testValid = () => {
      testHtml.value = editorValid.value.getHTML();
    };

    const isExpended = ref([]);
    for (let i = 0; i < 4; i++) {
      isExpended.value.push(true);
    }

    const toggleExpended = (index) => {      
      isExpended.value[index] = !isExpended.value[index];
    }

    const toggleAllExpanded = () => {
      for (let i = 0; i < isExpended.value.length; i++) {
        isExpended.value[i] = !isExpended.value[i];
      }
    }

    const isToggleClass = ref([true]);
    const btnToggleClass = (index) => {
      isToggleClass.value[index] = !isToggleClass.value[index];
    }

    const handleClick = () => {
      toggleAllExpanded();
      btnToggleClass();
    };

    const isEdit = ref([true]);
    const showEdit = (index) => {
      isEdit.value[index] = !isEdit.value[index];
    }

    const hideEdit = (index) => {
      isEdit.value[index] = false;
    }

    return {
      editor,
      editorValid,
      testHtml,
      testValid,

      isExpended,
      toggleExpended,
      toggleAllExpanded,

      handleClick,

      isToggleClass,
      btnToggleClass,

      isEdit,
      showEdit,
      hideEdit,

      titles
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
