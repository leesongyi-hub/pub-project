<template>
  <!-- filter -->
  <div class="filter">
    <button
      type="button"
      class="ico_fold btn_fold"
      aria-label="필터 접기"
      @click="updateLeftOpened()"
    >
    </button>
    
    <div class="filter_head">
      <button
        type="button"
        class="btn_close button"
        aria-label="필터 닫기"
        @click="updateLeftOpened()"
      >
        <svg aria-hidden="true" focusable="false" class="icoSvg i_s24 col_gray">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_close" />
        </svg>
      </button>
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

      <template v-if="checkLoading">
        <CompSpinner />
      </template>

      <template v-else>
        <div class="filterComp" v-for="(list, idx) in 3" :key="idx">
          <button
            type="button"
            class="btn_aco"
            data-toggle="collapse"
            aria-expanded="true"
            :data-target="'#expanded' + idx"
            @click="toggleCollapse(idx - 1)"
            :aria-label="isCollapsed[idx - 1] ? '샘플타이틀영역 접기' : '샘플타이틀영역 펼치기'"
          >
            <h2 class="tit">샘플타이틀</h2>
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s20 ico_arr_right">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />
            </svg>
          </button>
          
          <div :id="'expanded' + idx" class="filterComp_body show">
            
            <div v-if="list === 1">
              <ul class="filterComp_list">
                <Transition name="display"
                  v-for="(item, index) in filterOptions"
                  :key="index"
                  v-show="showAllOptions[idx] || index < 5"
                >
                  <li class="filterComp_listOpt">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" :id="'check1' + index">
                      <label class="custom-control-label" :for="'check1' + index">
                        <span>{{ filterOptions[index] }}{{index + 1}}
                          <em class="count">(1,234)</em>
                        </span>
                      </label>
                    </div>
                  </li>
                </Transition>
              </ul>
            </div>
  
            <div v-else-if="list === 2">
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
                <Transition name="display"
                  v-for="(item, index) in filterOptions2"
                  :key="index"
                  v-show="showAllOptions[idx] || index < 5"
                >
                  <li class="filterComp_listOpt">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" :id="'check2' + index">
                      <label class="custom-control-label" :for="'check2' + index">
                        <span>{{ filterOptions2[index] }}{{index + 1}}
                          <em class="count">(1,234)</em>
                        </span>
                      </label>
                    </div>
                  </li>
                </Transition>
              </ul>
            </div>
            
            <div v-else-if="list === 3">
              <ul class="filterComp_list colorLabel_area">
                <Transition name="display"
                  v-for="(color, index) in labelColors"
                  :key="index"
                  v-show="showAllOptions[idx] || index < 5"
                >
                  <li class="filterComp_listOpt">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" :id="'check3' + index">
                      <label class="custom-control-label" :for="'check3' + index" title="샘플라벨샘플라벨샘플라벨샘플라벨샘플라벨샘플라벨">
                        <span class="txt_badge ellipsis" :class="labelColors[index]"><em>샘플라벨샘플라벨샘플라벨샘플라벨샘플라벨샘플라벨{{index + 1}}</em></span>
                        <em class="count">(12)</em>
                      </label>
                    </div>
                  </li>
                </Transition>
              </ul>
            </div>
  
            <button type="button" class="btn_more" @click="toggleShowAllOptions(idx)">
              <span class="label">{{ showAllOptions[idx] ? "간략보기" : "더보기" }}</span>
              <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s16 col_lightgray ml2"
                :class="showAllOptions[idx] ? 'ico_arr_top' : 'ico_arr_bot'"
              >
                <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />
              </svg>
            </button>
  
          </div>
        </div>
      </template>
    </div>
    <!-- //filter_body -->
  </div>
  <!-- //filter -->

</template>

<script>
import { ref } from 'vue';


export default {
  name:'SearchFilter',
  components: {},
  props: {
    checkLoading: Boolean,
  },
  setup(props, { emit }) {
    const labelColors =  ref([
      "green",
      "red",
      "orange",
      "navy",
      "blue",
      "gray",
      "purple",
      "yellow",
      "pink",
      "mint",
    ]);

    const filterOptions =  ref([
      "필터샘플명",
      "필터샘플명",
      "필터샘플명",
      "필터샘플명",
      "필터샘플명",
      "필터샘플명",
      "필터샘플명",
      "필터샘플명",
      "필터샘플명",
      "필터샘플명",
    ]);

    const filterOptions2 =  ref([
      "기본필터샘플명기본필터샘플명",
      "기본필터샘플명기본필터샘플명",
      "기본필터샘플명기본필터샘플명",
      "기본필터샘플명기본필터샘플명",
      "기본필터샘플명기본필터샘플명",
      "기본필터샘플명기본필터샘플명",
      "기본필터샘플명기본필터샘플명",
      "기본필터샘플명기본필터샘플명",
      "기본필터샘플명기본필터샘플명",
      "기본필터샘플명기본필터샘플명",
    ]);

    const updateLeftOpened = () => {
      return emit("updateLeftOpened");
    };

    const isMenuOpen = ref(false);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const isCollapsed = ref([]);
    const toggleCollapse = (index) => {
      isCollapsed.value[index] = !isCollapsed.value[index];
    };
    
    const showAllOptions = ref([]);
    const toggleShowAllOptions = ( index ) => {
      showAllOptions.value[index] = !showAllOptions.value[index];
    };

    return {
      labelColors,
      filterOptions,
      filterOptions2,

      updateLeftOpened,

      isMenuOpen,
      toggleMenu,

      isCollapsed,
      toggleCollapse,

      showAllOptions,
      toggleShowAllOptions,
    };
  },
}
</script>

<style scoped>
  .display-enter-active,
  .display-leave-active {transition: opacity 0.3s ease;}
  .display-enter-from {opacity: 0;}
</style>
