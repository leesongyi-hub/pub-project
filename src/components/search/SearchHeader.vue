<template>
  <header class="header">
    <div class="d-flex align-items-center">
      <button
          type="button"
          class="button btn_filter i_s40"
          aria-label="검색결과 필터"
          @click="updateLeftOpened()"
        >
        <svg aria-hidden="true" focusable="false" class="icoSvg i_s24 col_white">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_filter" />
        </svg>
      </button>
      <h1>
        <a href="/" class="logo_area">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="44" viewBox="0 0 200 44" fill="none" aria-label="okms">
            <path fill="#fff" d="M25.307.862h-3.824C6.384.862.011 8.488 0 21.975c0 13.498 6.384 21.124 21.483 21.124h3.824c15.1 0 21.473-7.626 21.484-21.124C46.78 8.477 40.407.862 25.307.862Zm-1.7 36.833h-.424c-7.18 0-11.188-4.248-11.188-15.72 0-11.472 4.009-15.71 11.188-15.71h.425c7.18 0 11.177 4.25 11.177 15.71s-3.998 15.72-11.177 15.72ZM64.298.862h-7.92c-2.69 0-4.14 1.743-4.14 4.478V42.86h7.931c2.691 0 4.13-1.743 4.13-4.489V.862ZM77.83 16.365C78.82 15.395 95.117.862 95.117.862h-5.72c-1.71 0-2.287-.065-4.139 1.623-1.852 1.689-13.563 11.897-16.94 15.252-2.92 2.887-2.67 5.905 0 8.716 2.669 2.81 11.1 12.114 12.419 13.509 1.94 2.048 4.358 2.876 8.16 2.876h11.166c-6.787-6.635-21.625-22.508-22.878-23.739-1.1-1.013-.36-1.754.643-2.734ZM150.253.862h-5.349c-3.148 0-5.174.904-6.656 4.456l-9.674 23.248 1.765-.512-9.38-22.442c-1.678-3.944-4.075-4.75-7.169-4.75h-8.279v42.04h5.207V11.615c2.517 5.818 10.328 23.826 11.439 26.67 1.264 3.202 2.081 4.161 4.358 4.161 2.277 0 3.039-2.179 3.53-3.399l10.894-26.789v24.98c0 3.41 1.95 5.622 4.978 5.622h6.635V.862h-2.299ZM186.978 19.153h-8.585c-5.741 0-8.334-2.625-8.334-6.7 0-4.074 3.421-6.199 8.127-6.199h15.993c4.118 0 4.728-5.392 4.728-5.392h-23.412c-9.739 0-16.766 3.584-17.333 10.981-.61 7.888 4.227 12.899 11.712 12.899h11.493c4.826 0 6.537 2.636 6.537 6.537 0 3.9-3.181 6.068-7.888 6.068h-16.178c-5.12 0-5.839 5.501-5.839 5.501h24.512c11.722 0 16.93-3.704 17.431-10.894.61-8.487-3.584-12.8-12.964-12.8Z"/>
          </svg>
        </a>
      </h1>
    </div>

    <div class="search_wrap">
      <div class="inner"> 
        
        <div class="customSelect_area">
          <div
            class="customSelect button outline lg"
            tabindex="0"
            style="min-width: 97px"
            :class="{ selected: show }"
            @click="toggleShow"
          >
            <span class="customSelect_text">{{ selectedOption }}</span>
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />
            </svg>
          </div>
          <ul
            class="customSelect_list"
            :style="{ display: show ? 'block' : 'none' }"
            @click.stop
          >
            <li
              v-for="(option, index) in dropdownOptions"
              :key="index"
              class="customSelect_option"
              @click="selectOption(option)"
            >
              {{ option }}
            </li>
          </ul>
        </div>
        <!-- //customSelect_area-->

        <div
          class="search_area d-flex"
          @click.stop
          @blur="startSearch = false"
        >  
          <div class="search_input_box">
            <input
              type="search"
              class="search_input"
              placeholder="검색어를 입력해주세요"
              autocomplete="off"
              v-model="searchText"
              @focus="startSearch = true"
            />
            <div class="btn_area">
              <button
                type="button"
                class="btn_reset icoOnly"
                aria-label="검색어삭제"   
                v-if="searchText"
                @click="searchText=''"
              >
                <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_white">
                  <use xlink:href="@/assets/images/sp_svg.svg#ico_close" />
                </svg>                      
              </button>
              <button type="search" class="btn_search icoOnly md" aria-label="검색">  
                <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 stroke col_gray"><use xlink:href="@/assets/images/sp_svg.svg#ico_search"></use></svg>
              </button>
            </div>
          </div>
          <SearchLayer v-if="startSearch" />
        </div>
        <!-- //search_area -->

      </div>
      <!-- //inner -->
    </div>
    <!-- //search_wrap -->

    <div class="layout_right">
      <div class="questionBtn_area ml24">
        <a href="javascript:;" class="button">
          질의검색
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 stroke col_white ml2">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />
          </svg>
        </a>
      </div>
    
      <div class="mypage_area">
        <button type="button" class="btn_mypage dropdown dropdown-toggle" aria-label="마이페이지메뉴" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false" width="32" height="32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#1E8EB1"></circle>
            <path fill="#52E5ED" fill-rule="evenodd" d="M16 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-2.667 2A5.333 5.333 0 0 0 8 22.333 2.667 2.667 0 0 0 10.667 25h10.666A2.667 2.667 0 0 0 24 22.333 5.333 5.333 0 0 0 18.667 17h-5.334Z" clip-rule="evenodd"></path>
          </svg>
        </button>
        <MypageLayer />
      </div>
    </div>
    <!-- //maypage_area -->

  </header>
</template>

<script>
import MypageLayer from "../common/CompMypageLayer.vue";
import SearchLayer from "../common/CompSearchLayer.vue";

import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: 'SearchHeader',
  components: {
    MypageLayer,
    SearchLayer
  },
  setup(props, { emit }) {   
    
    const dropdownOptions = [
      "제목+키워드",
      "출처+문서번호",
      "전체",
      "제목",
      "내용",
      "문서요약",
      "출처",
      "등록자",
      "등록자",
      "수정자",
      "문서번호",
      "키워드"
    ];

    const show = ref(false);
    const selectedOption = ref("전체저장소");
    const toggleShow = () => {
      show.value = !show.value;
    };

    const selectOption = (option) => {
      selectedOption.value = option;
      show.value = false;
    };

    const closeDropdown = (event) => {
      if (!event.target.closest('.customSelect_area')) {
        show.value = false;
      }
    };

    const startSearch = ref(false);
    const closeSearchArea = (event) => {      
      if (!event.target.closest('.search_area') &&  startSearch.value === true ) {
        startSearch.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', closeDropdown);
      document.addEventListener('click', closeSearchArea);
    });

    onUnmounted(() => {
      document.removeEventListener('click', closeDropdown);
      document.removeEventListener('click', closeSearchArea);
    });    

    const updateLeftOpened = () => {
      return emit("updateLeftOpened");
    };

    const searchText = ref('');

    return {
      dropdownOptions,
      show,
      toggleShow,
      selectOption,
      selectedOption,      
      
      startSearch,     

      updateLeftOpened,

      searchText,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
