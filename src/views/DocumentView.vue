<template>
  <div class="document_page">
    <header class="doc_header">

    </header>
    <div class="content">
      <nav class="nav">
        <div class="nav_head">
          목차
          <button type="button" class="btn_close">
  
          </button>
        </div>
        <div class="nav_body">
          <ul class="depth1">
  
            <li>
              <a href="#idx1"><span>1</span><span>문서제목</span></a>
              <ul class="depth2">
                <li><a href="#idx1-1"><span>1</span><span>문서제목</span></a></li>
                <li><a href="#idx1-2"><span>1</span><span>문서제목</span></a></li>
              </ul>
            </li>
  
          </ul>
        </div>
      </nav>
      <main class="doc_list_wrap">
        <ul>
  
          <li class="doc_list_item">
            <div class="doc_list_head">
              <div class="tit_area">
                <button type="button" class="btn_acco"></button>
                <h2><span>1.</span> 문서타이틀</h2>
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
              <div class="view_mode">
                <div class="inner">
                  <div class="">
                    대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.
                    대법원에 대법관을 둔다. 다만, 법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다. 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다.
                  </div>
                  <button class="btn_more res"></button>
                </div>
                <div class="edit_btn_area">
                  <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="의견">
                    <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_talk" />
                    </svg>
                  </button>
                  <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="수정">            
                    <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_edit" />
                    </svg>
                  </button>
                  <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="삭제">            
                    <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                        <use xlink:href="@/assets/images/sp_svg.svg#ico_del" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="editor_mode">
                <div ref="editor"></div>
                <div class="edit_btn_box">
                  <button type="button" class="btn_save button primary md">수정</button>
                  <button type="button" class="btn_del button outline md">취소</button>
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
import { onMounted, ref } from 'vue';
import { Tooltip } from 'bootstrap';

import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default {
  name: 'DocumentPage',
  props: {
    modelValue: {
      type: String,
      required: false,
      default: '',
    },
  },

  setup(props, { emit }) {
    const editor = ref(null);
    const editorValid = ref(null);
    const testHtml = ref(null);

    // 마운트될 때 Editor 생성
    onMounted(() => {
      editorValid.value = new Editor({
        el: editor.value,
        height: '300px',
        width: '200px',
        //'wysiwyg', 'markdown' 중 택 1
        initialEditType: 'wysiwyg',
        previewStyle: 'tab',
        events: {
          change: () => emit('update:modelValue', editorValid.value.getMarkdown()),
        },
      });

      //init tooltip
      Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
      .forEach(tooltipNode => new Tooltip(tooltipNode))
    });

    // 작성한 내용을 불러와서 HTML 적용
    const testValid = () => {
      testHtml.value = editorValid.value.getHTML();
    };

    return {
      editor,
      editorValid,
      testHtml,
      testValid,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
