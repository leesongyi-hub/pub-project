<template>

      <!-- filter -->
      <div class="filter" :class="isMenuOpen ? 'isOpen' : ''">
        <button type="button" class="ico_fold btn_fold" aria-label="필터 접기" @click="toggleMenu"></button>        
        
        <div class="filter_head">

          <!-- [반응형] 1024px 이하에서 노출 -->
          <button type="button" class="btn_close button" aria-label="필터 닫기">
            <i class="icoSvg i_s24 col_gray">
              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_close"></use></svg>
            </i>
          </button>
          <!-- //[반응형] 1024px 이하에서 노출 -->

          <button type="button" class="button primary md btn_apply flex-fill">
            <span class="label">선택 적용</span>
          </button>
          <button type="button" class="button outline md btn_refresh icoOnly ml8 mr8" aria-label="초기화">
            <i class="icoSvg i_s20 col_gray">
              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_refresh"></use></svg>
            </i>
          </button>
          <button type="button" class="button outline md btn_setting icoOnly" data-toggle="modal" data-target="#modal_filterSet" aria-label="결과좁혀보기 설정">
            <i class="icoSvg i_s20 col_gray">
              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_setting"></use></svg>
            </i>
          </button>
        </div>
        <!-- //filter_head -->

        <div class="filter_body">
          
          <div class="filterComp">

            <button type="button"
              class="btn_aco"
              data-toggle="collapse"
              data-target="#expanded1"
              aria-expanded="false"
            >
              <h3 class="tit">샘플타이틀</h3>
              <i class="icoSvg stroke i_s20 ico_arr_right">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
              </i>
            </button>
            
            <div
              class="filterComp_body show" id="expanded1"
            >
              <ul class="filterComp_list">
                <li
                  class="filterComp_listOpt"
                  v-for="index in 5"
                  :key="index"
                >
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="filter2-1">
                    <label class="custom-control-label" for="filter2-1"><span>샘플라벨<em class="count">(1,234)</em></span></label>
                  </div>
                </li>
              </ul>
              <!--//filterComp_list-->
            </div>
            <!-- //filterComp_body -->
          </div>
          <!-- //filterComp -->  
  
          <div class="filterComp">
            <button
              type="button"
              class="btn_aco"
              data-toggle="collapse" href="#expanded2" role="button" aria-expanded="true" aria-controls="collapseExample"            
            >
              <h3 class="tit">샘플타이틀</h3>
              <i class="icoSvg stroke i_s20 ico_arr_right">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
              </i>
            </button>
            <div class="filterComp_body show" id="expanded2">
              <div class="control_area">
                <ul class="control_tab">
                  <li><button type="button" class="on">기본분류</button></li>
                  <li><button type="button">상세분류</button></li>
                </ul>
                <div class="form_switch">
                  <input type="checkbox" id="switch1" checked="">
                  <label for="switch1"><span class="label_txt">미분류</span><i class="btn_switch"></i></label>
                </div>
              </div>
              <ul class="filterComp_list">
                <li
                  class="filterComp_listOpt"
                  v-for="index in 5"
                  :key="index"
                >
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="filter2-1">
                    <label class="custom-control-label" for="filter2-1"><span>샘플라벨<em class="count">(1,234)</em></span></label>
                  </div>
                </li>
              </ul>
              <!-- //filterComp_list -->
            </div>
            <!-- //filterComp_body -->
          </div>
          <!-- //filterComp -->  
          
          <div class="filterComp">
            <button
              type="button"
              class="btn_aco"
              data-toggle="collapse" href="#expanded3" role="button" aria-expanded="true" aria-controls="collapseExample"            
            >
              <h3 class="tit">샘플타이틀</h3>
              <i class="icoSvg stroke i_s20 ico_arr_right">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
              </i>
            </button>
            <div class="filterComp_body show" id="expanded3">
              <div class="control_area">
                <ul class="control_tab">
                  <li><button type="button">기본분류</button></li>
                  <li><button type="button" class="on">상세분류</button></li>
                </ul>                

                <div class="form_switch">
                  <input type="checkbox" id="switch1" checked="">
                  <label for="switch1"><span class="label_txt">미분류</span><i class="btn_switch"></i></label>
                </div>

              </div>
              <Tree
                :nodes="data"
                :use-checkbox="true"
                :use-icon="true"
                @nodeExpanded="onNodeExpanded"
                @update="onUpdate"
              >                          
                <template v-slot:checkbox="{ node }">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" :id="node.id" v-model="node.checked" @click="toggleCheckbox(node)" />
                      <label class="custom-control-label" :for="node.id">
                        <span>{{ node.label }}</span>
                    </label>
                  </div>
                </template>              
              </Tree>
            </div>
            <!-- //filterComp_body -->
          </div>
          <!-- //filterComp --> 
        </div>
        <!-- //filter_body -->        
      </div>
      <!-- //filter -->
</template>











<script>
import { ref } from 'vue';
import Tree from "vue3-tree";


export default {
  name:'SearchFilter',
  components: {
    Tree
  },
  setup() {
    const data = ref([
      {
        id: 1,
        label: "대분류",
        nodes: [
          {
            id: 1-1,
            label: "중분류",
          },
          {
            id: 1-2,
            label: "중분류",
            nodes: [
              {
                id: 1-2-1,
                label: "소분류1",
              },
              {
                id: 1-2-2,
                label: "소분류2",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "대분류",
        nodes: [
          {
            id: 2-1,
            label: "중분류",
          },
          {
            id: 2-2,
            label: "중분류",
            nodes: [
              {
                id: 2-2-1,
                label: "소분류1",
              },
              {
                id: 2-2-2,
                label: "소분류2",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        label: "대분류",
      },
      {
        id: 4,
        label: "대분류",
      },
    ]);

    const isMenuOpen = ref(true);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
   
    const onNodeExpanded = (node, state) => {
      console.log("state: ", state);
      console.log("node: ", node);
    };

    const onUpdate = (nodes) => {
      console.log("nodes:", nodes);
    };

    const toggleCheckbox = (node) => {
      // 토글된 체크박스 상태를 변경
      node.checked = !node.checked;

      // 모든 하위 노드를 재귀적으로 체크
      function checkChildren(node) {
        if (node.nodes) {
          node.nodes.forEach(child => {
            child.checked = node.checked;
            checkChildren(child);
          });
        }
      }

      checkChildren(node);
    };

    // 컴포넌트에서 사용할 데이터와 메서드를 반환합니다.
    return {
      isMenuOpen,
      toggleMenu,
      data,
      onNodeExpanded,
      onUpdate,
      toggleCheckbox

    };
  },
}
</script>

<style scoped>
  [aria-expanded="true"] .ico_arr_right{
    transform:rotate(90deg);
  }
  [aria-expanded="true"] .ico_arr_right{
    transform:rotate(90deg);
  }
</style>
