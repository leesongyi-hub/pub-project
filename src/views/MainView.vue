<template>

  <main class="main_page">
    <div class="content">
      <div class="mypage_area">
        <div class=" dropdown dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <button type="button" class="btn_mypage">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#1E8EB1"></circle>
              <path fill="#52E5ED" fill-rule="evenodd" d="M16 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-2.667 2A5.333 5.333 0 0 0 8 22.333 2.667 2.667 0 0 0 10.667 25h10.666A2.667 2.667 0 0 0 24 22.333 5.333 5.333 0 0 0 18.667 17h-5.334Z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <MypageLayer />
        </div>
      </div>
      <!-- //maypage_area -->

      <div class="logo_area">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OKMS" width="200" height="44" viewBox="0 0 200 44" fill="none">
          <path fill="#333" d="M25.307.862h-3.824C6.384.862.011 8.488 0 21.975c0 13.498 6.384 21.124 21.483 21.124h3.824c15.1 0 21.473-7.626 21.484-21.124C46.78 8.477 40.407.862 25.307.862Zm-1.7 36.833h-.424c-7.18 0-11.188-4.248-11.188-15.72 0-11.472 4.009-15.71 11.188-15.71h.425c7.18 0 11.177 4.25 11.177 15.71s-3.998 15.72-11.177 15.72ZM64.298.862h-7.92c-2.69 0-4.14 1.743-4.14 4.478V42.86h7.931c2.691 0 4.13-1.743 4.13-4.489V.862ZM77.83 16.365C78.82 15.395 95.117.862 95.117.862h-5.72c-1.71 0-2.287-.065-4.139 1.623-1.852 1.689-13.563 11.897-16.94 15.252-2.92 2.887-2.67 5.905 0 8.716 2.669 2.81 11.1 12.114 12.419 13.509 1.94 2.048 4.358 2.876 8.16 2.876h11.166c-6.787-6.635-21.625-22.508-22.878-23.739-1.1-1.013-.36-1.754.643-2.734ZM150.253.862h-5.349c-3.148 0-5.174.904-6.656 4.456l-9.674 23.248 1.765-.512-9.38-22.442c-1.678-3.944-4.075-4.75-7.169-4.75h-8.279v42.04h5.207V11.615c2.517 5.818 10.328 23.826 11.439 26.67 1.264 3.202 2.081 4.161 4.358 4.161 2.277 0 3.039-2.179 3.53-3.399l10.894-26.789v24.98c0 3.41 1.95 5.622 4.978 5.622h6.635V.862h-2.299ZM186.978 19.153h-8.585c-5.741 0-8.334-2.625-8.334-6.7 0-4.074 3.421-6.199 8.127-6.199h15.993c4.118 0 4.728-5.392 4.728-5.392h-23.412c-9.739 0-16.766 3.584-17.333 10.981-.61 7.888 4.227 12.899 11.712 12.899h11.493c4.826 0 6.537 2.636 6.537 6.537 0 3.9-3.181 6.068-7.888 6.068h-16.178c-5.12 0-5.839 5.501-5.839 5.501h24.512c11.722 0 16.93-3.704 17.431-10.894.61-8.487-3.584-12.8-12.964-12.8Z"/>
        </svg>
      </div>

      <div class="search_wrap">
        <div class="inner">
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

      <div class="documentSet_area">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" fill="none" role="img" focusable="false">
          <circle cx="40" cy="40.834" r="40" fill="#E6F4F4"/>
          <path fill="#A4DCDF" d="M13.47 29.908a3.66 3.66 0 0 1 3.66-3.66h13.54v29.275H17.13a3.66 3.66 0 0 1-3.66-3.66V29.908Z"/>
          <g fill="#fff" clip-path="url(#a)">
            <path d="M19.073 38.752c.46 0 .832-.378.832-.844a.838.838 0 0 0-.832-.845.838.838 0 0 0-.833.845c0 .466.373.844.833.844ZM23.941 37.761c.744 0 1.347-.611 1.347-1.365s-.603-1.365-1.347-1.365c-.743 0-1.346.611-1.346 1.365s.603 1.365 1.346 1.365ZM22.141 46.322c.744 0 1.347-.61 1.347-1.365 0-.754-.603-1.365-1.347-1.365-.743 0-1.346.611-1.346 1.365s.603 1.365 1.346 1.365Z"/>
            <path fill-rule="evenodd" d="M19.792 38.333a.843.843 0 0 1-.295.301l1.106 1.117a1.615 1.615 0 0 0-.287 1.013l-1.701.344a.975.975 0 0 0-.906-.623.981.981 0 0 0-.975.988c0 .545.437.988.975.988a.98.98 0 0 0 .973-.937l1.711-.345c.195.6.729 1.044 1.372 1.1l.076 1.347a1.336 1.336 0 0 1 .42-.028l-.075-1.34a1.6 1.6 0 0 0 1.286-1.37h2.154v-.207a1.022 1.022 0 0 0 1.016 1.007c.56 0 1.015-.46 1.015-1.03 0-.568-.454-1.03-1.015-1.03-.554 0-1.004.45-1.016 1.008v-.17h-2.154a1.61 1.61 0 0 0-.743-1.16l.797-1.611a1.334 1.334 0 0 1-.365-.186l-.01-.006-.807 1.63a1.564 1.564 0 0 0-1.457.306l-1.095-1.106Z" clip-rule="evenodd"/>
          </g>
          <path fill="#fff" d="M30.669 26.249h32.933a3.66 3.66 0 0 1 3.66 3.659v21.955a3.66 3.66 0 0 1-3.66 3.66H30.67V26.249Z"/>
          <rect width="23.951" height="2.927" x="36.988" y="33.201" fill="#D3EFF0" rx="1.464"/>
          <rect width="23.951" height="2.927" x="36.988" y="39.788" fill="#D3EFF0" rx="1.464"/>
          <rect width="16.467" height="2.927" x="36.988" y="46.375" fill="#D3EFF0" rx="1.464"/>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M16.48 35.03h11.18v11.292H16.48z"/>
            </clipPath>
          </defs>
        </svg>
        <p class="tit">샘플타이틀</p>
        <p class="txt">샘플텍스트</p>
        <button type="button" class="button primary lg" data-toggle="modal" data-target="#modal_documentSet">샘플라벨</button>
      </div>
      <!-- //documentSet_area -->

      <div class="repository">
        <swiper
          class="repo_wrap swiper-wrapper"
          :slides-per-view="1"
          :space-between="8"
          navigation
          :breakpoints="{
            '1024': {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }"
        >
          <swiper-slide class="repo_area swiper-slide"
            v-for="(item, index) in 4"
            :key="index"
          >
            <div v-if="item === 1">
              <div class="repo_head">
                <div class="tit_box">
                  <div class="tit">기본 리스트</div>
                  <span class="repo_name type_caption_md">샘플텍스트</span>
                </div>
                <div class="repo_filter"
                  @click="toggleRepositoryList(index)"
                  :class="repositoryList[index] ? 'on' : '' "
                >
                  <div class="chip_area">
  
                    <!-- 선택된 저장소 addClass('on') -->
                    <button tpye="button" class="chip on">샘플저장소</button>
                    <button tpye="button" class="chip">샘플저장소</button>
                    <button tpye="button" class="chip">샘플저장소</button>
                    <button tpye="button" class="chip">샘플저장소</button>
                  </div>
  
                  <button type="button" class="btn_more button outline icoOnly md" aria-label="전체보기">
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 stroke col_gray ico_arr_bot">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />                    
                    </svg>
                  </button>
                </div>
              </div>
  
              <div class="repo_body">
                <div class="doc_list">
                  <ul>
                    <li class="doc_listItem" 
                      v-for="(item, index) in 10"
                      :key="item"
                    >
                      <span class="rank">{{ index + 1}}</span>
                      <a href="javascript:;">샘플텍스트 샘플텍스트 샘플텍스트 샘플텍스트</a>
                      <span class="sub_info date">2022-03-19</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else-if="item === 2">
              <div class="repo_head">
                <div class="tit_box">
                  <div class="tit">인기검색어 리스트</div>
                  <span class="repo_name type_caption_md">샘플텍스트</span>
                </div>
                <div class="repo_filter"
                  @click="toggleRepositoryList(index)"
                  :class="repositoryList[index] ? 'on' : '' "
                >
                  <div class="chip_area">
                    <span class="chip">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr4">
                        <g id="ph:crown-simple-fill">
                        <path id="Vector" d="M15.4606 5.57189L13.1481 12.655C13.1249 12.7264 13.0858 12.7916 13.0339 12.8459C12.982 12.9001 12.9185 12.942 12.8482 12.9683C12.7779 12.9947 12.7026 13.0049 12.6278 12.9981C12.553 12.9914 12.4807 12.9679 12.4162 12.9294C12.4019 12.9206 10.8037 12 7.99875 12C5.19375 12 3.59562 12.9206 3.58 12.93C3.51556 12.9682 3.44338 12.9913 3.36879 12.9979C3.2942 13.0044 3.21909 12.9941 3.14902 12.9677C3.07895 12.9413 3.0157 12.8995 2.96394 12.8453C2.91219 12.7912 2.87325 12.7262 2.85 12.655L0.538748 5.57001C0.492179 5.42818 0.488591 5.27575 0.528433 5.13189C0.568276 4.98802 0.649771 4.85915 0.762667 4.76149C0.875563 4.66382 1.01482 4.60172 1.16292 4.583C1.31102 4.56428 1.46135 4.58976 1.595 4.65626L4.73187 6.21876L7.35187 1.86501C7.41922 1.75334 7.51428 1.66096 7.62784 1.59684C7.74139 1.53272 7.86959 1.49902 8 1.49902C8.13041 1.49902 8.2586 1.53272 8.37216 1.59684C8.48571 1.66096 8.58077 1.75334 8.64812 1.86501L11.2681 6.21876L14.4062 4.65626C14.5401 4.58967 14.6906 4.56421 14.8388 4.58312C14.9871 4.60202 15.1264 4.66443 15.2393 4.76246C15.3521 4.8605 15.4333 4.98976 15.4727 5.13394C15.5121 5.27811 15.5079 5.43073 15.4606 5.57251V5.57189Z" fill="#FFAD0D"></path>
                        </g>
                      </svg>
                      <strong>5월</strong> 인기 검색어
                    </span>
                  </div>
                </div>
              </div>
  
              <div class="repo_body">
                <div class="doc_list">
                    <ul>
                      <li class="doc_listItem">
                        <span class="rank">1</span>
                        <a href="javascript:;">샘플키워드</a>
                        <span class="sub_info col_txt_red">
                          3↑
                        </span>
                      </li>
                      <li class="doc_listItem">
                        <span class="rank">2</span>
                        <a href="javascript:;">샘플키워드</a>
                        <span class="sub_info col_txt_blue">
                          2↓
                        </span>
                      </li>
                      <li class="doc_listItem">
                        <span class="rank">3</span>
                        <a href="javascript:;">샘플키워드</a>
                        <span class="sub_info noChange"></span>
                      </li>
                      <li class="doc_listItem">
                        <span class="rank">4</span>
                        <a href="javascript:;">샘플키워드</a>
                        <span class="sub_info col_txt_red">
                          3↑
                        </span>
                      </li>
                      <li class="doc_listItem">
                        <span class="rank">5</span>
                        <a href="javascript:;">샘플키워드</a>
                        <span class="sub_info txt_badge red">New</span>
                      </li>
                      <li class="doc_listItem">
                        <span class="rank">6</span>
                        <a href="javascript:;">샘플키워드</a>
                        <span class="sub_info txt_badge red">New</span>
                      </li>
                      <li class="doc_listItem">
                        <span class="rank">7</span>
                        <a href="javascript:;">샘플키워드</a>
                        <span class="sub_info txt_badge red">New</span>
                      </li>
                      <li class="doc_listItem">
                        <span class="rank">8</span>
                        <a href="javascript:;">샘플키워드</a>
                        <span class="sub_info col_txt_blue">
                          1↓
                        </span>
                      </li>
                      <li class="doc_listItem">
                        <span class="rank">9</span>
                        <a href="javascript:;">샘플키워드</a>
                        <span class="sub_info txt_badge red">New</span>
                      </li>
                      <li class="doc_listItem">
                        <span class="rank">10</span>
                        <a href="javascript:;">샘플키워드</a>
                        <span class="sub_info col_txt_red">
                          1↑
                        </span>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
            <div v-else-if="item === 3">
              <div class="repo_head">
                <div class="tit_box">
                  <div class="tit">리스트 없을 경우</div>
                  <span class="repo_name type_caption_md">샘플텍스트샘플텍스트샘플텍스트샘플텍스트</span>
                </div>
                <div class="repo_filter"
                  @click="toggleRepositoryList(index)"
                  :class="repositoryList[index] ? 'on' : '' "
                >
                  <div class="chip_area">
  
                    <!-- 선택된 저장소 addClass('on') -->
                    <button tpye="button" class="chip on">샘플저장소</button>
                    <button tpye="button" class="chip">샘플저장소</button>
                    <button tpye="button" class="chip">샘플저장소</button>
                    <button tpye="button" class="chip">샘플저장소</button>
                  </div>
  
                  <button type="button" class="btn_more button outline icoOnly md" aria-label="전체보기">
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 stroke col_gray ico_arr_bot">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />                    
                    </svg>
                  </button>
                </div>
              </div>
  
              <div class="repo_body">
                <div class="nodata align_center">
                  <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_lightgray">
                    <use xlink:href="@/assets/images/sp_svg.svg#ico_cancel"></use>                 
                  </svg>
                  <p class="caption_body mt8">문서가 없습니다.</p>
                </div>
              </div>
            </div>
            <div v-else-if="item === 4">
              <div class="repo_head">
                <div class="tit_box">
                  <div class="tit">기본 리스트</div>
                  <span class="repo_name type_caption_md">샘플텍스트</span>
                </div>
                <div class="repo_filter"
                  @click="toggleRepositoryList(index)"
                  :class="repositoryList[index] ? 'on' : '' "
                >
                  <div class="chip_area">
  
                    <!-- 선택된 저장소 addClass('on') -->
                    <button tpye="button" class="chip on">샘플저장소</button>
                    <button tpye="button" class="chip">샘플저장소</button>
                    <button tpye="button" class="chip">샘플저장소</button>
                    <button tpye="button" class="chip">샘플저장소</button>
                  </div>
  
                  <button type="button" class="btn_more button outline icoOnly md" aria-label="전체보기">
                    <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 stroke col_gray ico_arr_bot">
                      <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />                    
                    </svg>
                  </button>
                </div>
              </div>
  
              <div class="repo_body">
                <div class="doc_list">
                  <ul>
                    <li class="doc_listItem" 
                      v-for="(item, index) in 10"
                      :key="item"
                    >
                      <span class="rank">{{ index + 1}}</span>
                      <a href="javascript:;">샘플텍스트 샘플텍스트 샘플텍스트 샘플텍스트</a>
                      <span class="sub_info date">2022-03-19</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- //repository -->

      <div class="setting_area">
        <button tpye="button" class="btn_setting" data-toggle="modal" data-target="#modal_documentSet">
          주요항목 설정
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s20">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_setting"></use>
          </svg>
        </button>
      </div>
      <!-- //setting_area -->
      
    </div>
    <!-- //content -->
  </main>

  <ModalDocumentSet />

</template>

<script>
import MypageLayer from "../components/common/CompMypageLayer.vue";
import SearchLayer from "../components/common/CompSearchLayer.vue";

import ModalDocumentSet from "./modal/ModalDocumentSet.vue";

import SwiperCore, { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination]);

import { ref, onMounted, onUnmounted } from "vue";

export default {
  name:'MainView',
  components: {
      Swiper,
      SwiperSlide,
      MypageLayer,
      SearchLayer,
      ModalDocumentSet
    },  
  setup(props, { emit }) {

    const repositoryList = ref([false, false, false, false]);

    const toggleRepositoryList = (index) => {
      repositoryList.value[index] = !repositoryList.value[index];
    }

    const startSearch = ref(false);

    const closeSearchArea = (event) => {
      // 클릭된 요소가 search_area 내부에 있는 요소인지 확인
      if (!event.target.closest('.search_area')) {
        startSearch.value = false;
      }
    };

    onMounted(() => {
      // 컴포넌트가 마운트될 때 document 클릭 이벤트 리스너를 추가
      document.addEventListener('click', closeSearchArea);
    });

    onUnmounted(() => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
      document.removeEventListener('click', closeSearchArea);
    });

    const searchText = ref('');

    const updateLeftOpened = () => {
      return emit("updateLeftOpened");
    };

    const updateLeftOpenedTest = () => {
      return emit("updateLeftOpenedTest");
    };

    const showModal = () => {
      emit('sendShow', true);
    };


    return {
      repositoryList,
      toggleRepositoryList,

      startSearch,
      searchText,
      updateLeftOpened,
      updateLeftOpenedTest,
      showModal
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
