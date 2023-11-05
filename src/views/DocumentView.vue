<template>
  <div class="document_page">
    <DocumentHeader />
    <div class="content">      
      <DocumentNav />
      <main class="doc_list_wrap">
        <ul >  
          <li class="doc_list_item" v-for="(item, index) in 3" :key="index"> 
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
                <div class="tit">국민<mark>건강보험</mark>이란</div>
                <button type="button" class="btn_edit"></button>
              </div>
            </div>
            <!-- //doc_list_head -->
  
            <div class="doc_list_body" v-show="isExpended[index]" :aria-hidden="isExpended[index] ? 'true' : 'false'">

              <div class="doc_list_content">
                <div class="view_mode">
                  <div class="inner">
                    <div class="">
                      첫 번째로 직장 가입자 산정기준에 대해 알아보겠습니다. 기본적으로 직장가입자는 4대 보험료를 먼저 공제하고 급여(보수월액)를 수령하게 됩니다. 4대보험료 중 고용보험, 연금보험, <mark>건강보험</mark>은 회사와 근로자가 각자 절반씩 부담하고 산재보험만 회사에서 전액 부담하고 있습니다.
                    </div>
                    <!-- <button class="btn_more res"></button> -->
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
  setup()
  {
    const editor = ref([]);
    const editorValid = ref([]);
    const testHtml = ref();

    onMounted(() => 
    { 
      // for (let i=0; i < editor.value.length; i++) 
      // {
      //   const newEditor = 
      //   new Editor({
      //     el: editor.value[i],
      //     height: '400px',
      //     initialEditType: 'wysiwyg',
      //     previewStyle: 'tab',
      // });

      //   editorValid.value[i] = newEditor;
      // }

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
      Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]')).forEach(tooltipNode => new Tooltip(tooltipNode));
    });
    // 작성한 내용을 불러와서 HTML 적용
    const testValid = () => {
      testHtml.value = editorValid.value.getHTML();
    };

    const isExpended = ref([]);

    for (let i=0; i<3; i++) {
      isExpended.value.push(true);
    }

    const toggleExpended = (index) => {      
      isExpended.value[index] = !isExpended.value[index];
    }
    
    return {
        editor,
        editorValid,
        testHtml,
        testValid,

        isExpended,
        toggleExpended,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
