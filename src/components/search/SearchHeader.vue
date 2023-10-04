<template>
     
     <!-- header -->
      <header class="header">
        <h1>
          <a href="../main/main.html" class="logo_area">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="44" viewBox="0 0 200 44" fill="none">
              <path fill="#fff" d="M25.307.862h-3.824C6.384.862.011 8.488 0 21.975c0 13.498 6.384 21.124 21.483 21.124h3.824c15.1 0 21.473-7.626 21.484-21.124C46.78 8.477 40.407.862 25.307.862Zm-1.7 36.833h-.424c-7.18 0-11.188-4.248-11.188-15.72 0-11.472 4.009-15.71 11.188-15.71h.425c7.18 0 11.177 4.25 11.177 15.71s-3.998 15.72-11.177 15.72ZM64.298.862h-7.92c-2.69 0-4.14 1.743-4.14 4.478V42.86h7.931c2.691 0 4.13-1.743 4.13-4.489V.862ZM77.83 16.365C78.82 15.395 95.117.862 95.117.862h-5.72c-1.71 0-2.287-.065-4.139 1.623-1.852 1.689-13.563 11.897-16.94 15.252-2.92 2.887-2.67 5.905 0 8.716 2.669 2.81 11.1 12.114 12.419 13.509 1.94 2.048 4.358 2.876 8.16 2.876h11.166c-6.787-6.635-21.625-22.508-22.878-23.739-1.1-1.013-.36-1.754.643-2.734ZM150.253.862h-5.349c-3.148 0-5.174.904-6.656 4.456l-9.674 23.248 1.765-.512-9.38-22.442c-1.678-3.944-4.075-4.75-7.169-4.75h-8.279v42.04h5.207V11.615c2.517 5.818 10.328 23.826 11.439 26.67 1.264 3.202 2.081 4.161 4.358 4.161 2.277 0 3.039-2.179 3.53-3.399l10.894-26.789v24.98c0 3.41 1.95 5.622 4.978 5.622h6.635V.862h-2.299ZM186.978 19.153h-8.585c-5.741 0-8.334-2.625-8.334-6.7 0-4.074 3.421-6.199 8.127-6.199h15.993c4.118 0 4.728-5.392 4.728-5.392h-23.412c-9.739 0-16.766 3.584-17.333 10.981-.61 7.888 4.227 12.899 11.712 12.899h11.493c4.826 0 6.537 2.636 6.537 6.537 0 3.9-3.181 6.068-7.888 6.068h-16.178c-5.12 0-5.839 5.501-5.839 5.501h24.512c11.722 0 16.93-3.704 17.431-10.894.61-8.487-3.584-12.8-12.964-12.8Z"/>
            </svg>
          </a>
        </h1>
        <div class="d-flex align-items-center flex-wrap" style="width:100%;">
          <div class="search_wrap">
            <div class="inner"> 
              
              <div class="customSelect_area">
                <div class="customSelect button outline lg" tabindex="0">
                  <span class="customSelect_text">전체저장소</span>
                  <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                    <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                  </i>
                </div>
                <ul class="customSelect_list" style="display:none;">
                  <li value="selectOption1" class="customSelect_option">제목+키워드</li>
                  <li value="selectOption2" class="customSelect_option">출처+문서번호</li>
                  <li value="selectOption3" class="customSelect_option">전체</li>
                  <li value="selectOption4" class="customSelect_option">제목</li>
                  <li value="selectOption5" class="customSelect_option">내용</li>
                  <li value="selectOption6" class="customSelect_option">문서요약</li>
                  <li value="selectOption6" class="customSelect_option">출처</li>
                  <li value="selectOption6" class="customSelect_option">등록자</li>
                  <li value="selectOption6" class="customSelect_option">수정자</li>
                  <li value="selectOption6" class="customSelect_option">문서번호</li>
                  <li value="selectOption6" class="customSelect_option">키워드</li>
                </ul>        
                <select class="select_origin">
                  <option value="selectOption1">제목+키워드</option>
                  <option value="selectOption2">출처+문서번호</option>
                  <option value="selectOption3">전체</option>
                  <option value="selectOption4">제목</option>
                  <option value="selectOption5">내용</option>
                  <option value="selectOption6">문서요약</option>
                  <option value="selectOption6">출처</option>
                  <option value="selectOption6">등록자</option>
                  <option value="selectOption6">수정자</option>
                  <option value="selectOption6">문서번호</option>
                  <option value="selectOption6">키워드</option>
                </select>
              </div>
              <!-- //customSelect_area -->
                
              <div class="search_area d-flex">  
                <div class="search_input_box">
                  <input
                    type="search"
                    class="search_input"
                    placeholder="검색어를 입력해주세요"
                    autocomplete="off"
                    @focus="startSearch = true"
                    @blur="startSearch = false"
                   />
                  <div class="btn_area">
                    <button type="button" class="btn_reset icoOnly">
                      <i class="icoSvg i_s16 col_white">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_close"></use></svg>
                      </i>
                      <span class="skip">검색어삭제</span>
                    </button>
                    <button type="search" class="btn_search icoOnly md">
                      <i class="icoSvg i_s20 stroke col_gray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_search"></use></svg>
                      </i>
                      <span class="skip">검색</span>
                    </button>
                  </div>
                </div>  
              </div>
              <!-- //search_area -->
  
              <!-- 연관검색어/최근검색어 레이어 -->
              <div
                class="search_layer"
                v-if="startSearch"
              >
  
                <!-- 최근검색어 -->
                <div class="recent_area">
                  <div class="recent_header">
                    <span>최근검색어</span>
                    <button type="button" class="btn_allDel">전체삭제</button>
                  </div>
                  <ul>
                    <li class="keyword_item">
                      <a href="javascript:;" class="keyword_box">
                        <i class="icoSvg i_s20"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_search"></use></svg></i>
                        <span class="keyword">최근검색어 키워드</span>
                      </a>
                      <button class="btn_del icoOnly i_s20">
                        <i class="icoSvg col_lightgray"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_close"></use></svg></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <!-- //최근검색어 -->
  
                <!-- 연관검색어 -->
                <div class="related_area">
                  <ul>
                    <li class="keyword_item">
                      <a href="javascript:;" class="keyword_box">
                        <i class="icoSvg i_s20"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_search"></use></svg></i>
                        <span class="keyword"><strong>연관검색어</strong> 키워드</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- //연관검색어 -->
  
              </div>
              <!-- //연관검색어/최근검색어 레이어 -->
  
            </div>
            <!-- //inner -->
          </div>
          <!-- //search_wrap -->
  
          <div class="check_area">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="content1_1">
              <label class="custom-control-label" for="content1_1"><span>결과 내 재검색</span></label>
            </div>
          </div>
  
          <div class="btn_area d-flex">
            <button type="button" class="button btn_detailSearch">
              <span class="label">상세검색 열기</span>
              <i class="icoSvg i_s20 col_white ml4">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_plus"></use></svg>
              </i>
            </button>
            <button type="button" class="button btn_filter i_s32" aria-label="검색결과 좁혀보기">
              <i class="icoSvg i_s20 col_white">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_filter"></use></svg>
              </i>
            </button>
          </div>
        </div>

        <div class="layout_right">
          <div class="questionBtn_area ml24">
            <a href="javascript:;" class="button">
              질의검색
              <i class="icoSvg i_s16 stroke col_white ml2">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
              </i>
            </a>
          </div>
        
          <div class="mypage_area">
            <div class=" dropdown dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <button type="button" class="btn_mypage">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#1E8EB1"></circle>
                  <path fill="#52E5ED" fill-rule="evenodd" d="M16 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-2.667 2A5.333 5.333 0 0 0 8 22.333 2.667 2.667 0 0 0 10.667 25h10.666A2.667 2.667 0 0 0 24 22.333 5.333 5.333 0 0 0 18.667 17h-5.334Z" clip-rule="evenodd"></path>
                </svg>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="myinfo">
                  <strong class="name">홍길동</strong><span class="position">관리자</span>
                  <span class="email">always@diquest.com</span>
                </div>
                <button type="button" class="btn_logout button outline sm">로그아웃</button>
                <div class="menu_list left">
                  <ul>
                    <li class="menu_listItem">
                      <a href="javscript:;">
                        <i class="icoSvg i_s20 col_gray">
                          <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg>
                        </i>
                        나의 활동
                      </a>
                    </li>
                    <li class="menu_listItem">
                      <a href="javscript:;">
                        <i class="icoSvg i_s20 col_gray">
                          <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more2"></use></svg>
                        </i>
                        문서 관리
                      </a>
                    </li>
                    <li class="menu_listItem">
                      <a href="javscript:;">
                        <i class="icoSvg i_s20 col_gray">
                          <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_setting"></use></svg>
                        </i>
                        관리자모드
                      </a>
                    </li>
                  </ul>
                </div>
          
              </div>
            </div>
          </div>
          <!-- //maypage_area -->
        </div>
      </header>
      <!-- header -->

    </template>


<script>

export default {
  name:'SearchHeader',
}
</script>

<style lang="scss" scoped>

</style>
