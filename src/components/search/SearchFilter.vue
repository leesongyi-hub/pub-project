<template>
  <!-- filter -->
  <div class="filter" :class="isMenuOpen ? 'isOpen' : ''">
    <button type="button" class="ico_fold btn_fold" aria-label="필터 접기" @click="toggleMenu"></button>        
    
    <div class="filter_head">

      <!-- [반응형] 1024px 이하에서 노출 -->
      <button type="button" class="btn_close button" aria-label="필터 닫기">
        <svg aria-hidden="true" focusable="false" class="icoSvg i_s24 col_gray">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_close" />
        </svg>
      </button>
      <!-- //[반응형] 1024px 이하에서 노출 -->

      <button type="button" class="button primary md btn_apply flex-fill">
        <span class="label">선택 적용</span>
      </button>
      <button type="button" class="button outline md btn_refresh icoOnly ml8 mr8" aria-label="초기화">
        <svg aria-hidden="true" focusable="false" class="icoSvg i_s20 col_gray">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_refresh" />
        </svg>
      </button>
      <button type="button" class="button outline md btn_setting icoOnly" data-toggle="modal" data-target="#modal_filterSet" aria-label="필터">
        <svg aria-hidden="true" focusable="false" class="icoSvg i_s20 col_gray">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_setting" />
        </svg>
      </button>
    </div>
    <!-- //filter_head -->

    <div class="filter_body">
      <div class="filterComp" v-for="index in 3" :key="index">
        <button
          type="button"
          class="btn_aco"
          data-toggle="collapse"
          aria-expanded="true"
          :data-target="'#expanded' + index"
          @click="toggleCollapse(index - 1)"
          :aria-label="isCollapsed[index - 1] ? '샘플타이틀영역 접기' : '샘플타이틀영역 펼치기'"
        >
          <h2 class="tit">샘플타이틀</h2>
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s20 ico_arr_right">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />
          </svg>
        </button>
        
        <div :id="'expanded' + index" class="filterComp_body show">
          <!-- 각 섹션의 내용을 데이터 배열에서 동적으로 렌더링 -->
          <div v-if="index === 1">
            <ul class="filterComp_list">
              <li
                class="filterComp_listOpt"
                v-for="index in 5"
                :key="index"
              >
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" :id="'check1' + index">
                  <label class="custom-control-label" :for="'check1' + index">
                    <span>샘플라벨
                      <em class="count">(1,234)</em>
                    </span>
                  </label>
                </div>
              </li>
            </ul>
            <!--//filterComp_list-->
          </div>
          <div v-else-if="index === 2">
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
                  <input type="checkbox" class="custom-control-input" :id="'check2' + index">
                  <label class="custom-control-label" :for="'check2' + index">
                    <span>샘플라벨
                      <em class="count">(1,234)</em>
                    </span>
                  </label>
                </div>
              </li>
            </ul>
            <!-- //filterComp_list -->
          </div>
          <div v-else-if="index === 3">
            <!-- 기타 섹션의 내용 -->
            <div class="control_area">
              <ul class="control_tab">
                <li><button type="button">기본분류</button></li>
                <li><button type="button" class="on">상세분류</button></li>
              </ul>

              <div class="form_switch">
                <input type="checkbox" id="switch2" checked="">
                <label for="switch2"><span class="label_txt">미분류</span><i class="btn_switch"></i></label>
              </div>

            </div>            
          
          </div>
        </div>
      </div>
    </div>
    <!-- //filter_body -->        
  </div>
  <!-- //filter -->
  
</template>

<script>
import { ref } from 'vue';


export default {
  name:'SearchFilter',
  components: {

  },
  setup() {
    const isMenuOpen = ref(true);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const isCollapsed = ref([true, true, true]); 

    const toggleCollapse = (index) => {
      isCollapsed.value[index] = !isCollapsed.value[index];
    };

    return {
      isMenuOpen,
      toggleMenu,
      isCollapsed,
      toggleCollapse,
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
