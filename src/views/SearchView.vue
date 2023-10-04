<template>
    <div class="search_page">
      
      <SearchHeader />
      <SearchFilter />


      <main class="content">
        <div class="main_panel">

          <!-- 상세검색-->
          <div class="detailSearch_area">
            <div class="inner">
              <button type="button" class="btn_close" aria-label="닫기">
                <i class="icoSvg stroke i_s24">
                  <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_deleted"></use></svg>
                </i>
              </button>
              <div class="date_area d-flex flex-wrap mb20">
                <p class="label">기간</p>
                <ul class="form_area d-flex flex-wrap">
                  <li class="customSelect_area mr8">
                    <div class="customSelect button outline md w100px" tabindex="0" style="min-width:80px;">
                      <span class="customSelect_text">등록일</span>
                      <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </div>
                    <ul class="customSelect_list w100px" style="display:none;">
                      <li value="selectOption1" class="customSelect_option">등록일</li>
                      <li value="selectOption2" class="customSelect_option">수정일</li>
                    </ul>        
                    <select class="select_origin">
                      <option value="selectOption1">등록일</option>
                      <option value="selectOption1">수정일</option>
                    </select>
                  </li>
  
                  <li class="radio_tab mr8">
                    <div class="custom-control custom-radio">
                      <input type="radio" class="custom-control-input" id="radio1" name="sample2">
                      <label class="custom-control-label" for="radio1"><span>오늘</span></label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" class="custom-control-input" id="radio2" name="sample2">
                      <label class="custom-control-label" for="radio2"><span>어제</span></label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" class="custom-control-input" id="radio3" name="sample2">
                      <label class="custom-control-label" for="radio3"><span>이번주</span></label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" class="custom-control-input" id="radio4" name="sample2" checked="">
                      <label class="custom-control-label" for="radio4"><span>사용자지정</span></label>
                    </div>
                  </li>
  
                  <li class="d-flex align-items-center">
                    
                    <div class="dateInput_area">
                      <input type="input" class="form_input w140" placeholder="키워드를 입력해주세요." value="2022.12.28">
                      <button type="button" class="d-flex">
                        <i class="icoSvg stroke i_s20">
                          <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_calendar"></use></svg>
                        </i>
                      </button>
                    </div>
                    <span class="spacing">~</span>
                    <div class="dateInput_area">
                      <input type="input" class="form_input w140" placeholder="날짜 선택">
                      <button type="button" class="d-flex">
                        <i class="icoSvg stroke i_s20">
                          <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_calendar"></use></svg>
                        </i>
                      </button>
                    </div>
                  </li>
  
                </ul>
              </div>
  
              <div class="search_area d-flex flex-wrap">
                <p class="label">검색방법</p>
                <ul class="form_area flex-fill">
                  <li class="d-flex flex-wrap mb12">
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="radio5" name="sample3" checked="">
                        <label class="custom-control-label" for="radio5"><span>검색엔진</span></label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input type="radio" class="custom-control-input" id="radio6" name="sample3">
                      <label class="custom-control-label" for="radio6"><span>DB</span></label>
                    </div>
                  </li>
  
                  <li class="d-flex mb8">
                    <div class="select_box d-flex">
                      <div class="customSelect_area type_reset mr8">
                        <div class="customSelect button outline md w100px" tabindex="0" style="min-width:80px;">
                          <span class="customSelect_text">AND</span>
                          <button type="button" class="btn_reset icoOnly" aria-label="검색어삭제">
                            <i class="icoSvg i_s14 col_white">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_close"></use></svg>
                            </i>
                          </button>
                          <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                          </i>
                        </div>
                        <ul class="customSelect_list" style="display:none;">
                          <li value="selectOption1" class="customSelect_option">AND</li>
                          <li value="selectOption2" class="customSelect_option">OR</li>
                          <li value="selectOption3" class="customSelect_option">NOT</li>
                        </ul>        
                        <select class="select_origin">
                          <option value="selectOption1">AND</option>
                          <option value="selectOption2">OR</option>
                          <option value="selectOption3">NOT</option>
                        </select>
                      </div>
                      <div class="customSelect_area mr8 type_reset">
                        <div class="customSelect button outline md w150px" tabindex="0" style="min-width:80px;">
                          <span class="customSelect_text">제목 + 키워드</span>
                          <button type="button" class="btn_reset icoOnly" aria-label="검색어삭제">
                            <i class="icoSvg i_s14 col_white">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_close"></use></svg>
                            </i>
                          </button>
                          <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                          </i>
                        </div>
                        <ul class="customSelect_list" style="display:none;">
                          <li value="selectOption1" class="customSelect_option">제목 + 키워드</li>
                          <li value="selectOption2" class="customSelect_option">작성자</li>
                          <li value="selectOption3" class="customSelect_option">전체</li>
                        </ul>        
                        <select class="select_origin">
                          <option value="selectOption1">제목 + 키워드</option>
                          <option value="selectOption2">작성자</option>
                          <option value="selectOption3">전체</option>
                        </select>
                      </div>
                    </div>
                    <input id="search" class="form_input flex-fill">
                    <button type="button" class="button outline md icoOnly ml8">
                      <i class="icoSvg i_s20 col_gray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_plus"></use></svg>
                      </i>
                    </button>                  
                  </li>
  
                  <li class="d-flex mb8">
                    <div class="select_box d-flex">
                      <div class="customSelect_area type_reset mr8">
                        <div class="customSelect button outline md w100px" tabindex="0" style="min-width:80px;">
                          <span class="customSelect_text">OR</span>
                          <button type="button" class="btn_reset icoOnly" aria-label="검색어삭제">
                            <i class="icoSvg i_s14 col_white">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_close"></use></svg>
                            </i>
                          </button>
                          <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                          </i>
                        </div>
                        <ul class="customSelect_list" style="display:none;">
                          <li value="selectOption1" class="customSelect_option">AND</li>
                          <li value="selectOption2" class="customSelect_option">OR</li>
                          <li value="selectOption3" class="customSelect_option">NOT</li>
                        </ul>        
                        <select class="select_origin">
                          <option value="selectOption1">AND</option>
                          <option value="selectOption2">OR</option>
                          <option value="selectOption3">NOT</option>
                        </select>
                      </div>
                      <div class="customSelect_area mr8 type_reset">
                        <div class="customSelect button outline md w150px" tabindex="0" style="min-width:80px;">
                          <span class="customSelect_text">제목 + 키워드</span>
                          <button type="button" class="btn_reset icoOnly" aria-label="검색어삭제">
                            <i class="icoSvg i_s14 col_white">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_close"></use></svg>
                            </i>
                          </button>
                          <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                          </i>
                        </div>
                        <ul class="customSelect_list" style="display:none;">
                          <li value="selectOption1" class="customSelect_option">제목 + 키워드</li>
                          <li value="selectOption2" class="customSelect_option">작성자</li>
                          <li value="selectOption3" class="customSelect_option">전체</li>
                        </ul>        
                        <select class="select_origin">
                          <option value="selectOption1">제목 + 키워드</option>
                          <option value="selectOption2">작성자</option>
                          <option value="selectOption3">전체</option>
                        </select>
                      </div>
                    </div>
                    <input id="search" class="form_input flex-fill">
                    <button type="button" class="button outline md icoOnly ml8">
                      <i class="icoSvg i_s20 col_gray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_plus"></use></svg>
                      </i>
                    </button>                  
                  </li>
                  <li class="d-flex mb8">
                    <div class="select_box d-flex">
                      <div class="customSelect_area type_reset mr8">
                        <div class="customSelect button outline md w100px" tabindex="0" style="min-width:80px;">
                          <span class="customSelect_text">NOT</span>
                          <button type="button" class="btn_reset icoOnly" aria-label="검색어삭제">
                            <i class="icoSvg i_s14 col_white">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_close"></use></svg>
                            </i>
                          </button>
                          <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                          </i>
                        </div>
                        <ul class="customSelect_list" style="display:none;">
                          <li value="selectOption1" class="customSelect_option">AND</li>
                          <li value="selectOption2" class="customSelect_option">OR</li>
                          <li value="selectOption3" class="customSelect_option">NOT</li>
                        </ul>        
                        <select class="select_origin">
                          <option value="selectOption1">AND</option>
                          <option value="selectOption2">OR</option>
                          <option value="selectOption3">NOT</option>
                        </select>
                      </div>
                      <div class="customSelect_area mr8 type_reset">
                        <div class="customSelect button outline md w150px" tabindex="0" style="min-width:80px;">
                          <span class="customSelect_text">제목 + 키워드</span>
                          <button type="button" class="btn_reset icoOnly" aria-label="검색어삭제">
                            <i class="icoSvg i_s14 col_white">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_close"></use></svg>
                            </i>
                          </button>
                          <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                          </i>
                        </div>
                        <ul class="customSelect_list" style="display:none;">
                          <li value="selectOption1" class="customSelect_option">제목 + 키워드</li>
                          <li value="selectOption2" class="customSelect_option">작성자</li>
                          <li value="selectOption3" class="customSelect_option">전체</li>
                        </ul>        
                        <select class="select_origin">
                          <option value="selectOption1">제목 + 키워드</option>
                          <option value="selectOption2">작성자</option>
                          <option value="selectOption3">전체</option>
                        </select>
                      </div>
                    </div>
                    <input id="search" class="form_input flex-fill">
                    <button type="button" class="button outline md icoOnly ml8">
                      <i class="icoSvg i_s20 col_gray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_minus"></use></svg>
                      </i>
                    </button>
                    <button type="button" class="button outline md icoOnly ml8">
                      <i class="icoSvg i_s20 col_gray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_plus"></use></svg>
                      </i>
                    </button>                  
                  </li>
                </ul>
              </div>
  
              <div class="btn_area mt8">
                <button type="button" class="button outline md">
                  <i class="icoSvg i_s20 col_gray">
                    <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_refresh"></use></svg>
                  </i>
                  <span class="label">초기화</span>
                </button>
                <button type="button" class="button primary md ml8">
                  <span class="label">선택 적용</span>
                </button>
              </div>
            </div>

          </div>
          <!-- //상세검색 -->

          <div class="main_head">
            <div class="result_txt"><strong class="col_txt_primary">문서&nbsp;</strong>검색결과 <span class="count ml8">(총 <em class="col_txt_primary">293</em>건)</span></div>
            
            <div class="result_keywordMap">
              <div class="d-flex scrollX" data-dragX="true">
                <div class="label d-flex align-items-center">
                  <span class="tit_label">검색 이력</span>
                  <a href="javascript:;" class="">키워드</a>
                  <button type="button" class="ico_box dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i class="icoSvg stroke i_s12 ico_arr_bot">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                    </i>
                  </button>
                  <div class="result_keywordMap_layer dropdown-menu"> 
                    <div class="body">
                      <div class="listItem">
                        <div class="listItem_head">기간</div>
                        <div class="listItem_body">
                          <div class="item">
                            <span class="">등록일 기준</span>
                            <span class="label_border">2022.12.28~2022.12.29</span>
                          </div>
                        </div>
                      </div>
                      <div class="listItem">
                        <div class="listItem_head">검색방법</div>
                        <div class="listItem_body">
                          <div class="item">
                            <span class="">검색엔진</span> 
                          </div>                                           
                        </div>
                      </div>
                      <div class="listItem">
                        <div class="listItem_head">조건</div>
                        <div class="listItem_body">
                          <div class="item">
                            <span class="">제목+키워드 : 테스트키워드1테스트키워드내용이 길 경우</span>
                            <span class="label_border">AND</span>
                          </div>
                          <div class="item">
                            <span class="">내용 : 테스트키워드2 </span>
                            <span class="label_border">NOT</span>
                          </div>
                          <div class="item">
                            <span class="">등록자 : 관리자</span>
                            <span class="label_border">OR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="label d-flex align-items-center">
                  <a href="javascript:;" class="">키워드 + 키워드 + 키워드</a>
                  <button type="button" class="ico_box dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i class="icoSvg stroke i_s12 ico_arr_bot">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                    </i>
                  </button>
                  <div class="result_keywordMap_layer dropdown-menu"> 
                    <div class="body">
                      <div class="listItem">
                        <div class="listItem_head">기간</div>
                        <div class="listItem_body">
                          <div class="item">
                            <span class="">등록일 기준</span>
                            <span class="label_border">2022.12.28~2022.12.29</span>
                          </div>
                        </div>
                      </div>
                      <div class="listItem">
                        <div class="listItem_head">검색방법</div>
                        <div class="listItem_body">
                          <div class="item">
                            <span class="">검색엔진</span> 
                          </div>                                           
                        </div>
                      </div>
                      <div class="listItem">
                        <div class="listItem_head">조건</div>
                        <div class="listItem_body">
                          <div class="item">
                            <span class="">제목+키워드 : 테스트키워드1테스트키워드내용이 길 경우</span>
                            <span class="label_border">AND</span>
                          </div>
                          <div class="item">
                            <span class="">내용 : 테스트키워드2 </span>
                            <span class="label_border">NOT</span>
                          </div>
                          <div class="item">
                            <span class="">등록자 : 관리자</span>
                            <span class="label_border">OR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="label d-flex align-items-center">
                  <a href="javascript:;" class="">키워드 + 키워드 + 키워드</a>
                  <button type="button" class="ico_box dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i class="icoSvg stroke i_s12 ico_arr_bot">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                    </i>
                  </button>
                  <div class="result_keywordMap_layer dropdown-menu"> 
                    <div class="body">
                      <div class="listItem">
                        <div class="listItem_head">기간</div>
                        <div class="listItem_body">
                          <div class="item">
                            <span class="">등록일 기준</span>
                            <span class="label_border">2022.12.28~2022.12.29</span>
                          </div>
                        </div>
                      </div>
                      <div class="listItem">
                        <div class="listItem_head">검색방법</div>
                        <div class="listItem_body">
                          <div class="item">
                            <span class="">검색엔진</span> 
                          </div>                                           
                        </div>
                      </div>
                      <div class="listItem">
                        <div class="listItem_head">조건</div>
                        <div class="listItem_body">
                          <div class="item">
                            <span class="">제목+키워드 : 테스트키워드1테스트키워드내용이 길 경우</span>
                            <span class="label_border">AND</span>
                          </div>
                          <div class="item">
                            <span class="">내용 : 테스트키워드2 </span>
                            <span class="label_border">NOT</span>
                          </div>
                          <div class="item">
                            <span class="">등록자 : 관리자</span>
                            <span class="label_border">OR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
 
          </div>
          <!-- //main_head-->

          <div class="main_body">

            <ul class="nav nav-tabs nav-justified mb12" id="resultTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" data-toggle="tab" data-target="#tab1" type="button" role="tab" aria-selected="true">문서<span class="mark_count">115</span></button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" data-toggle="tab" data-target="#tab2" type="button" role="tab" aria-selected="false">목차<span class="mark_count">5</span></button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" data-toggle="tab" data-target="#tab3" type="button" role="tab" aria-selected="false">의견<span class="mark_count">52</span></button>
              </li>
              <li class="nav-item" role="presentation">

                <!-- 0개일때 addClass('dsabled') -->
                <button class="nav-link" data-toggle="tab" data-target="#tab4" type="button" role="tab" aria-selected="false">첨부파일<span class="mark_count disabled">0</span></button>
              </li>
            </ul>

            <div class="tab-content" id="resultTabCont">

              <!-- 문서탭 -->
              <div id="tab1" class="tab-pane active" role="tabpanel" tabindex="0">

                <!--툴바-->
                <div class="resultBtn_area">
                  <button type ="button" class="btn_createDoc button md outline mr8" data-toggle="modal" data-target="#modal_createDoc">샘플라벨</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editCategory">샘플라벨</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editField">샘플라벨</button>
                  <button type ="button" class="button md outline mr8 disabled">샘플라벨</button>      
                  <div class="customSelect_area mr8">
                    <div class="customSelect button outline md disabled" tabindex="0" style="min-width:97px;">
                      <span class="customSelect_text">상태변경</span>
                      <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </div>
                    <ul class="customSelect_list" style="display:none;">
                      <li value="selectOption1" class="customSelect_option">샘플옵션</li>
                      <li value="selectOption2" class="customSelect_option">샘플옵션</li>
                      <li value="selectOption3" class="customSelect_option">샘플옵션</li>
                      <li value="selectOption3" class="customSelect_option">샘플옵션</li>
                    </ul>        
                    <select class="select_origin">
                      <option value="selectOption1" class="customSelect_option">샘플옵션</option>
                      <option value="selectOption2" class="customSelect_option">샘플옵션</option>
                      <option value="selectOption3" class="customSelect_option">샘플옵션</option>
                      <option value="selectOption3" class="customSelect_option">샘플옵션</option>
                    </select>
                  </div>
      
                  <div class="customSelect_area mr8">
                    <div class="customSelect button outline md" tabindex="0" style="min-width:80px;">
                      <span class="customSelect_text">10건</span>
                      <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </div>
                    <ul class="customSelect_list" style="display:none;">
                      <li value="selectOption1" class="customSelect_option">10건</li>
                      <li value="selectOption2" class="customSelect_option">20건</li>
                      <li value="selectOption3" class="customSelect_option">30건</li>
                    </ul>        
                    <select class="select_origin">
                      <option value="selectOption1" class="customSelect_option">10건</option>
                      <option value="selectOption2" class="customSelect_option">20건</option>
                      <option value="selectOption3" class="customSelect_option">30건</option>
                    </select>
                  </div>
      
                  <button type ="button" class="btn_sort button md outline" data-toggle="modal" data-target="#modal_sortSet">
                    정렬<span class="count type_caption_sm txt_info"> (3개)</span>
                    <i class="icoSvg i_s20 col_gray ml2">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_align"></use></svg>
                    </i>
                  </button>
                  <button type="button" class="btn_more button icoOnly md dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i class="icoSvg i_s20 col_gray ml2">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more"></use></svg>
                    </i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>샘플</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>업로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>다운로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 업로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 다운로드</span></a>
                  </div>
                </div>
                <!--//툴바-->
                
                <!--리스트아이템-->
                <div class="result_wrap">

                  <!-- 리스트 0개일때 노출 -->
                  <div class="nodate">
                    검색 내역이 없습니다.
                  </div>
                  <!-- //리스트 0개일때 노출 -->

                  <ul>

                    <li class="list_item"
                      v-for="index in 4"
                      :key="index"
                    >
    
                      <h3 class="tit_area">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="list_check1">
                          <label class="custom-control-label" for="list_check1"></label>
                        </div>

                        <a href="javscript:void(0);" class="tit">
                          <span class="col_txt_blue">[샘플텍스트]</span> 샘플타이틀
                        </a>

                        <span class="txt_badge blue">badge</span>
                        <span class="txt_badge green">badge</span>
                        <span class="txt_badge yellow">badge</span>
                        <span class="txt_badge red">badge</span>
                        <span class="txt_badge gray">badge</span>
                        <span class="txt_badge mint">badge</span>
                        <span class="txt_badge navy">badge</span>
                        <span class="txt_badge purple">badge</span>
                        <span class="txt_badge pink">badge</span>
                        <span class="txt_badge orange">badge</span>

                        <!-- [반응형] 768px 이하에서 노출 -->
                        <button type="button" class="btn_more button icoOnly sm dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="icoSvg i_s16 col_lightgray ml2">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more"></use></svg>
                          </i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>원본URL</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg></i>
                         </a>
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>의견</span>
                            <span class="mark_ico">
                              <span class="mark_count">6</span>
                              <i class="icoSvg stroke i_s18">
                                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
                              </i>
                            </span>
                          </a>
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>문서</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg></i>
                          </a>
													<a href="javascript:;" class="dropdown-item justify-content-between border_bot align-items-center">
                            <span>분류등록</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg></i>
                          </a>
                          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>수정</span></a>
                          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>삭제</span></a>
												</div>
                        <!-- //[반응형] 768px 이하에서 노출 -->

                      </h3>
                      <!-- //tit_area -->
    
                      <div class="info_area">
                        <dl
                          v-for="index in 10"
                          :key="index"
                        >
                          <dt>샘플타이틀</dt>
                          <dd>샘플텍스트</dd>
                        </dl>                        
                      </div>
                      <!-- //info_area -->
    
                      <div class="preview_area">
                        샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트샘플텍스트
                      </div>
                      <!-- //preview_area -->
    
                      <div class="repoInfo_wrap">
                        <div class="repoInfo_area">
                          <div class="repoInfo_name"><span class="name">저장소명</span> 온라인 &gt; 정기/상해 &gt; 저장소명 (5)
                            <button type="button" class="ico_box dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              <i class="icoSvg stroke i_s12 ico_arr_bot">
                                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                              </i>
                            </button>
                            <div class="repoInfo_layer dropdown-menu">
                              <div class="head type_body_lg txt_bold">
                                분류 코드 정보
                              </div>
                              <div class="body">
                                <ul>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해상해상해상해상해상해상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="btn_area">
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="원문 URL">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="의견">
                            <span class="mark_count">6</span>
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="문서">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="분류등록">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg>
                            </i>
                          </a>
                          <!-- S.버튼 구분선 -->
                          <span class="division"></span>
                          <!-- //E.버튼 구분선 -->
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="수정">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_edit"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="삭제">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_del"></use></svg>
                            </i>
                          </a>
                        </div>
                      </div>
                      <!-- //repoInfo_wrap -->

                    </li>
                  </ul>
                </div>  
                <!--//리스트아이템-->

                <!--페이징-->
                <nav class="pagination mt12">
                  <ul>
                    <!--비활성 addClass 'disabled'-->
                    <li class="page_item"><button type="button" class="page_link ico btn_start disabled"><span class="skip">처음으로</span></button></li>	
                    <li class="page_item"><button type="button" class="page_link ico btn_prev disabled"><span class="skip">이전</span></button></li>
                    <!--선택됐을때 addClass 'on'-->
                    <li class="page_item on"><button type="button" class="page_link">1</button></li>
                    <li class="page_item"><button type="button" class="page_link">2</button></li>
                    <li class="page_item"><button type="button" class="page_link">3</button></li>
                    <li class="page_item"><button type="button" class="page_link">4</button></li>
                    <li class="page_item"><button type="button" class="page_link">5</button></li>
                    <li class="page_item"><button type="button" class="page_link ico btn_next"><span class="skip">다음</span></button></li>
                    <li class="page_item"><button type="button" class="page_link ico btn_end"><span class="skip">마지막으로</span></button></li>
                  </ul>
                </nav>    
                <!--//페이징-->

              </div>
              <!-- //문서탭 -->

              <!-- 목차탭 -->
              <div id="tab2" class="tab-pane" role="tabpanel" tabindex="0">

                <!--툴바-->
                <div class="resultBtn_area">
                  <button type ="button" class="btn_createDoc button md outline mr8" data-toggle="modal" data-target="#modal_createDoc">새글쓰기</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editCategory">분류수정</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editField">필드수정</button>
                  <button type ="button" class="button md outline mr8 disabled">삭제</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_copy">복사</button>
      
                  <div class="customSelect_area mr8">
                    <div class="customSelect button outline md disabled" tabindex="0" style="min-width:97px;">
                      <span class="customSelect_text">상태변경</span>
                      <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </div>
                    <ul class="customSelect_list" style="display:none;">
                      <li value="selectOption1" class="customSelect_option">상태변경</li>
                      <li value="selectOption2" class="customSelect_option">승인</li>
                      <li value="selectOption3" class="customSelect_option">반려</li>
                      <li value="selectOption3" class="customSelect_option">완료</li>
                    </ul>        
                    <select class="select_origin">
                      <option value="selectOption1" class="customSelect_option">상태변경</option>
                      <option value="selectOption2" class="customSelect_option">승인</option>
                      <option value="selectOption3" class="customSelect_option">반려</option>
                      <option value="selectOption3" class="customSelect_option">완료</option>
                    </select>
                  </div>
      
                  <div class="customSelect_area mr8">
                    <div class="customSelect button outline md" tabindex="0" style="min-width:80px;">
                      <span class="customSelect_text">10건</span>
                      <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </div>
                    <ul class="customSelect_list" style="display:none;">
                      <li value="selectOption1" class="customSelect_option">10건</li>
                      <li value="selectOption2" class="customSelect_option">20건</li>
                      <li value="selectOption3" class="customSelect_option">30건</li>
                    </ul>        
                    <select class="select_origin">
                      <option value="selectOption1" class="customSelect_option">10건</option>
                      <option value="selectOption2" class="customSelect_option">20건</option>
                      <option value="selectOption3" class="customSelect_option">30건</option>
                    </select>
                  </div>
      
                  <button type ="button" class="btn_sort button md outline" data-toggle="modal" data-target="#modal_sortSet">
                    정렬<span class="count type_caption_sm txt_info"> (3개)</span>
                    <i class="icoSvg i_s20 col_gray ml2">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_align"></use></svg>
                    </i>
                  </button>
                  <button type="button" class="btn_more button icoOnly md dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i class="icoSvg i_s20 col_gray ml2">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more"></use></svg>
                    </i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>샘플</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>업로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>다운로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 업로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 다운로드</span></a>
                  </div>
                </div>
                <!--//툴바-->

                <!--리스트아이템-->
                <div class="result_wrap">
                  <div class="nodate">
                    검색 내역이 없습니다.
                  </div>

                  <ul>
                    <li class="list_item">
    
                      <h3 class="tit_area">
                        <div class="txt_bold mb4"><span class="col_txt_blue">[강조]</span> 문서명입니다.</div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="list_check1">
                          <label class="custom-control-label" for="list_check1"></label>
                        </div>
                        <a href="javscript:void(0);" class="tit">
                          d
                        </a>
                        <span class="txt_badge blue">Text</span>

                        <!-- [반응형] 768px 이하에서 노출 -->
                        <button type="button" class="btn_more button icoOnly sm dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="icoSvg i_s16 col_lightgray ml2">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more"></use></svg>
                          </i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>원본URL</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg></i>
                         </a>
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>의견</span>
                            <span class="mark_ico">
                              <span class="mark_count">6</span>
                              <i class="icoSvg stroke i_s18">
                                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
                              </i>
                            </span>
                          </a>
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>문서</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg></i>
                          </a>
													<a href="javascript:;" class="dropdown-item justify-content-between border_bot align-items-center">
                            <span>분류등록</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg></i>
                          </a>
                          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>수정</span></a>
                          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>삭제</span></a>
												</div>
                        <!-- //[반응형] 768px 이하에서 노출 -->

                      </h3>
    
                      <div class="info_area">
                        <dl>
                          <dt>등록자</dt>
                          <dd>홍길동</dd>
                        </dl>
                        <dl>
                          <dt>등록일</dt>
                          <dd>2022-10-02</dd>
                        </dl>
                        <dl>
                          <dt>수정일</dt>
                          <dd>2022-10-02</dd>
                        </dl>
                        <dl>
                          <dt>수정자</dt>
                          <dd>홍길동</dd>
                        </dl>
                        <dl>
                          <dt>문서상태</dt>
                          <dd>0.완료</dd>
                        </dl>
                        <dl>
                          <dt>인포채터(WM)</dt>
                          <dd>N미반영</dd>
                        </dl>
                        <dl>
                          <dt>조회수</dt>
                          <dd>321</dd>
                        </dl>
                      </div>
                      <!-- //info_area -->
    
                      <div class="preview_area">
                        피의자는 2020. 7.경 서울시 중구 소재 대신파이낸스빌딩 지하 1층 상호불상 커피숍에서 고소인에게 “내가 재직 중인 회사에서 서울시청의 동작구 사당동 주차장 공사에 1조 원 정도를 투자했다.
                        피의자는 2020. 7.경 서울시 중구 소재 대신파이낸스빌딩 지하 1층 상호불상 커피숍에서 고소인에게 “내가 재직 중인 회사에서 서울시청의 동작구 사당동 주차장 공사에 1조 원 정도를 투자했다.
                      </div>
                      <!-- //preview_area -->
    
                      <div class="repoInfo_wrap">
                        <div class="repoInfo_area">
                          <div class="repoInfo_name"><span class="name">샘플텍스트</span> 샘플텍스트 &gt; 샘플텍스트 &gt; 샘플텍스트 (5)
                            <button type="button" class="ico_box dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              <i class="icoSvg stroke i_s12 ico_arr_bot">
                                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                              </i>
                            </button>
                            <div class="repoInfo_layer dropdown-menu">
                              <div class="head type_body_lg txt_bold">
                                분류 코드 정보
                              </div>
                              <div class="body">
                                <ul>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해상해상해상해상해상해상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="btn_area">
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="원문 URL">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="의견">
                            <span class="mark_count">6</span>
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="문서">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="분류등록">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg>
                            </i>
                          </a>
                          <!-- S.버튼 구분선 -->
                          <span class="division"></span>
                          <!-- //E.버튼 구분선 -->
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="수정">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_edit"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="삭제">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_del"></use></svg>
                            </i>
                          </a>
                        </div>
                      </div>
                      <!-- //repoInfo_wrap -->    
                    </li>
                  </ul>
                </div>
                <!--//리스트아이템-->

              </div>
              <!-- //목차탭 -->

              <!-- 의견탭 -->
              <div id="tab3" class="tab-pane" role="tabpanel" tabindex="0">

                <!--툴바-->
                <div class="resultBtn_area">
                  <button type ="button" class="btn_createDoc button md outline mr8" data-toggle="modal" data-target="#modal_createDoc">새글쓰기</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editCategory">분류수정</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editField">필드수정</button>
                  <button type ="button" class="button md outline mr8 disabled">삭제</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_copy">복사</button>
      
                  <div class="customSelect_area mr8">
                    <div class="customSelect button outline md disabled" tabindex="0" style="min-width:97px;">
                      <span class="customSelect_text">상태변경</span>
                      <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </div>
                    <ul class="customSelect_list" style="display:none;">
                      <li value="selectOption1" class="customSelect_option">상태변경</li>
                      <li value="selectOption2" class="customSelect_option">승인</li>
                      <li value="selectOption3" class="customSelect_option">반려</li>
                      <li value="selectOption3" class="customSelect_option">완료</li>
                    </ul>        
                    <select class="select_origin">
                      <option value="selectOption1" class="customSelect_option">상태변경</option>
                      <option value="selectOption2" class="customSelect_option">승인</option>
                      <option value="selectOption3" class="customSelect_option">반려</option>
                      <option value="selectOption3" class="customSelect_option">완료</option>
                    </select>
                  </div>
      
                  <div class="customSelect_area mr8">
                    <div class="customSelect button outline md" tabindex="0" style="min-width:80px;">
                      <span class="customSelect_text">10건</span>
                      <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </div>
                    <ul class="customSelect_list" style="display:none;">
                      <li value="selectOption1" class="customSelect_option">10건</li>
                      <li value="selectOption2" class="customSelect_option">20건</li>
                      <li value="selectOption3" class="customSelect_option">30건</li>
                    </ul>        
                    <select class="select_origin">
                      <option value="selectOption1" class="customSelect_option">10건</option>
                      <option value="selectOption2" class="customSelect_option">20건</option>
                      <option value="selectOption3" class="customSelect_option">30건</option>
                    </select>
                  </div>
      
                  <button type ="button" class="btn_sort button md outline" data-toggle="modal" data-target="#modal_sortSet">
                    정렬<span class="count type_caption_sm txt_info"> (3개)</span>
                    <i class="icoSvg i_s20 col_gray ml2">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_align"></use></svg>
                    </i>
                  </button>
                  <button type="button" class="btn_more button icoOnly md dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i class="icoSvg i_s20 col_gray ml2">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more"></use></svg>
                    </i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>샘플</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>업로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>다운로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 업로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 다운로드</span></a>
                  </div>
                </div>
                <!--//툴바-->
                
                <!--리스트아이템-->
                <div class="result_wrap">
                  <ul>
                    <li class="list_item type_comment">
    
                      <h3 class="tit_area">
                        <div class="txt_bold mb4"><span class="col_txt_blue">[강조]</span> 문서명입니다.</div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="list_check1">
                          <label class="custom-control-label" for="list_check1"></label>
                        </div>
                        <a href="javscript:void(0);" class="tit">
                          d
                        </a>
                        <span class="txt_badge blue">Text</span>

                        <!-- [반응형] 768px 이하에서 노출 -->
                        <button type="button" class="btn_more button icoOnly sm dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="icoSvg i_s16 col_lightgray ml2">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more"></use></svg>
                          </i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>원본URL</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg></i>
                         </a>
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>의견</span>
                            <span class="mark_ico">
                              <span class="mark_count">6</span>
                              <i class="icoSvg stroke i_s18">
                                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
                              </i>
                            </span>
                          </a>
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>문서</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg></i>
                          </a>
													<a href="javascript:;" class="dropdown-item justify-content-between border_bot align-items-center">
                            <span>분류등록</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg></i>
                          </a>
                          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>수정</span></a>
                          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>삭제</span></a>
												</div>
                        <!-- //[반응형] 768px 이하에서 노출 -->

                      </h3>
    
                      <div class="info_area">
                        <dl>
                          <dt>등록자</dt>
                          <dd>홍길동</dd>
                        </dl>
                        <dl>
                          <dt>등록일</dt>
                          <dd>2022-10-02</dd>
                        </dl>
                        <dl>
                          <dt>수정일</dt>
                          <dd>2022-10-02</dd>
                        </dl>
                        <dl>
                          <dt>수정자</dt>
                          <dd>홍길동</dd>
                        </dl>
                        <dl>
                          <dt>문서상태</dt>
                          <dd>0.완료</dd>
                        </dl>
                        <dl>
                          <dt>인포채터(WM)</dt>
                          <dd>N미반영</dd>
                        </dl>
                        <dl>
                          <dt>조회수</dt>
                          <dd>321</dd>
                        </dl>
                      </div>
                      <!-- //info_area -->
    
                      <div class="preview_area">
                        저의 <mark>의견</mark>은 이러이러하고 저러저러 합니다. 저의 의견은 이러이러하고 저러저러 합니다. 저의 의견은 이러이러하고 저러저러 합니다. 
                      </div>
                      <!-- //preview_area -->
    
                      <div class="repoInfo_wrap">
                        <div class="repoInfo_area">
                          <div class="repoInfo_name"><span class="name">저장소명</span> 온라인 &gt; 정기/상해 &gt; 저장소명
                            <button type="button" class="ico_box dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              <i class="icoSvg stroke i_s12 ico_arr_bot">
                                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                              </i>
                            </button>
                            <div class="repoInfo_layer dropdown-menu">
                              <div class="head type_body_lg txt_bold">
                                분류 코드 정보
                              </div>
                              <div class="body">
                                <ul>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해상해상해상해상해상해상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                  <li>온라인 &gt; 정기/상해 &gt; 상해</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="btn_area">
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="원문 URL">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="의견">
                            <span class="mark_count">6</span>
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="문서">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="분류등록">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg>
                            </i>
                          </a>
                          <!-- S.버튼 구분선 -->
                          <span class="division"></span>
                          <!-- //E.버튼 구분선 -->
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="수정">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_edit"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="삭제">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_del"></use></svg>
                            </i>
                          </a>
                        </div>
                      </div>
                      <!-- //repoInfo_wrap -->
                    </li>
                  </ul>
                </div>
                <!--//리스트아이템-->

                <!--페이징-->
                <nav class="pagination mt12">
                  <ul>
                    <!--비활성 addClass 'disabled'-->
                    <li class="page_item"><button type="button" class="page_link ico btn_start disabled"><span class="skip">처음으로</span></button></li>	
                    <li class="page_item"><button type="button" class="page_link ico btn_prev disabled"><span class="skip">이전</span></button></li>
                    <!--선택됐을때 addClass 'on'-->
                    <li class="page_item on"><button type="button" class="page_link">1</button></li>
                    <li class="page_item"><button type="button" class="page_link">2</button></li>
                    <li class="page_item"><button type="button" class="page_link">3</button></li>
                    <li class="page_item"><button type="button" class="page_link">4</button></li>
                    <li class="page_item"><button type="button" class="page_link">5</button></li>
                    <li class="page_item"><button type="button" class="page_link ico btn_next"><span class="skip">다음</span></button></li>
                    <li class="page_item"><button type="button" class="page_link ico btn_end"><span class="skip">마지막으로</span></button></li>
                  </ul>
                </nav>    
                <!--//페이징-->

              </div>
              <!-- //의견탭 -->

              <!-- 첨부파일탭 -->
              <div id="tab4" class="tab-pane" role="tabpanel" tabindex="0">

                <!--툴바-->
                <div class="resultBtn_area">
                  <button type ="button" class="btn_createDoc button md outline mr8" data-toggle="modal" data-target="#modal_createDoc">새글쓰기</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editCategory">분류수정</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editField">필드수정</button>
                  <button type ="button" class="button md outline mr8 disabled">삭제</button>
                  <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_copy">복사</button>
      
                  <div class="customSelect_area mr8">
                    <div class="customSelect button outline md disabled" tabindex="0" style="min-width:97px;">
                      <span class="customSelect_text">상태변경</span>
                      <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </div>
                    <ul class="customSelect_list" style="display:none;">
                      <li value="selectOption1" class="customSelect_option">상태변경</li>
                      <li value="selectOption2" class="customSelect_option">승인</li>
                      <li value="selectOption3" class="customSelect_option">반려</li>
                      <li value="selectOption3" class="customSelect_option">완료</li>
                    </ul>        
                    <select class="select_origin">
                      <option value="selectOption1" class="customSelect_option">상태변경</option>
                      <option value="selectOption2" class="customSelect_option">승인</option>
                      <option value="selectOption3" class="customSelect_option">반려</option>
                      <option value="selectOption3" class="customSelect_option">완료</option>
                    </select>
                  </div>
      
                  <div class="customSelect_area mr8">
                    <div class="customSelect button outline md" tabindex="0" style="min-width:80px;">
                      <span class="customSelect_text">10건</span>
                      <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </div>
                    <ul class="customSelect_list" style="display:none;">
                      <li value="selectOption1" class="customSelect_option">10건</li>
                      <li value="selectOption2" class="customSelect_option">20건</li>
                      <li value="selectOption3" class="customSelect_option">30건</li>
                    </ul>        
                    <select class="select_origin">
                      <option value="selectOption1" class="customSelect_option">10건</option>
                      <option value="selectOption2" class="customSelect_option">20건</option>
                      <option value="selectOption3" class="customSelect_option">30건</option>
                    </select>
                  </div>
      
                  <button type ="button" class="btn_sort button md outline" data-toggle="modal" data-target="#modal_sortSet">
                    정렬<span class="count type_caption_sm txt_info"> (3개)</span>
                    <i class="icoSvg i_s20 col_gray ml2">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_align"></use></svg>
                    </i>
                  </button>
                  <button type="button" class="btn_more button icoOnly md dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i class="icoSvg i_s20 col_gray ml2">
                      <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more"></use></svg>
                    </i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>샘플</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>업로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>다운로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 업로드</span></a>
                    <a href="javascript:;" class="dropdown-item justify-content-start"><span>문서분류 다운로드</span></a>
                  </div>
                </div>
                <!--//툴바-->
                
                <!--리스트아이템-->
                <div class="result_wrap">
                  <ul>
                    <li class="list_item type_file">
    
                      <h3 class="tit_area">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="list_check1">
                          <label class="custom-control-label" for="list_check1"></label>
                        </div>
                        <a href="javscript:void(0);" class="tit">

                          <!--
                            .ico_doc
                            .ico_hwp
                            .ico_ppt
                            .ico_zip
                            .ico_xls
                            .ico_pdf
                            .ico_pic
                            .ico_etc
                          -->
                          <i class="ico sp_file ico_doc"></i>
                          첨부<mark>파일</mark>명.doc<span class="col_txt_light type_caption_sm ml4">29KB</span>
                        </a>

                        <!-- [반응형] 768px 이하에서 노출 -->
                        <button type="button" class="btn_more button icoOnly sm dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="icoSvg i_s16 col_lightgray ml2">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more"></use></svg>
                          </i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>원본URL</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg></i>
                         </a>
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>의견</span>
                            <span class="mark_ico">
                              <span class="mark_count">6</span>
                              <i class="icoSvg stroke i_s18">
                                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
                              </i>
                            </span>
                          </a>
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>문서</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg></i>
                          </a>
													<a href="javascript:;" class="dropdown-item justify-content-between border_bot align-items-center">
                            <span>분류등록</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg></i>
                          </a>
                          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>수정</span></a>
                          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>삭제</span></a>
												</div>
                        <!-- //[반응형] 768px 이하에서 노출 -->

                      </h3>
                      <!-- //tit_area -->
    
                      <div class="preview_area">
                        <div class="inner">
                            1975년 우라늄협회로 출발한 세계원자력협회(WNA)는 원자력을 평화적으로 이용하는 것을 적극 지원하고, 원자력 발전과 핵연료주기 전반에 걸친 원자력 산업 발전을 위하고자 설립한 세계적 민간 기구로, 우라늄 채광부터 변환, 농축, 핵연료 제조, 원자력발전 운영, 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다 원자력 발전을 촉진하고 관...
                            1975년 우라늄협회로 출발한 세계원자력협회(WNA)는 원자력을 평화적으로 이용하는 것을 적극 지원하고, 원자력 발전과 핵연료주기 전반에 걸친 원자력 산업 발전을 위하고자 설립한 세계적 민간 기구로, 우라늄 채광부터 변환, 농축, 핵연료 제조, 원자력발전 운영, 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다 원자력 발전을 촉진하고 관...
                            1975년 우라늄협회로 출발한 세계원자력협회(WNA)는 원자력을 평화적으로 이용하는 것을 적극 지원하고, 원자력 발전과 핵연료주기 전반에 걸친 원자력 산업 발전을 위하고자 설립한 세계적 민간 기구로, 우라늄 채광부터 변환, 농축, 핵연료 제조, 원자력발전 운영, 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 기자재(설비) 제작 및 사용후핵연료 처분에 이르기까지 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다. 원자력발전의 전 주기 산업을 촉진하고 관련 정보를 지원하고 있다 원자력 발전을 촉진하고 관...
                        </div>

                        <button type="button" class="btn_more">
                          <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                          </i>
                        </button>
                      </div>
                      <!-- //preview_area -->

                      <div class="docTit_category txt_weight_md mb4">
                        <span class="col_txt_blue">[문서명 표기] </span>
                        문서명 입니다.
                        <i class="icoSvg stroke i_s16 ico_arr_right col_lightgray">
                          <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                        </i>
                        목차명 입니다.
                      </div>
                      <div class="repoInfo_wrap">
                        <div class="info_area">
                          <dl>
                            <dt>등록자</dt>
                            <dd>홍길동</dd>
                          </dl>
                          <dl>
                            <dt>등록일</dt>
                            <dd>2022-10-02</dd>
                          </dl>
                          <dl>
                            <dt>수정일</dt>
                            <dd>2022-10-02</dd>
                          </dl>
                          <dl>
                            <dt>수정자</dt>
                            <dd>홍길동</dd>
                          </dl>
                          <dl>
                            <dt>조회수</dt>
                            <dd>321</dd>
                          </dl>
                        </div>
                        <div class="btn_area">
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="원문 URL">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="의견">
                            <span class="mark_count">6</span>
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="문서">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="분류등록">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg>
                            </i>
                          </a>
                          <!-- S.버튼 구분선 -->
                          <span class="division"></span>
                          <!-- //E.버튼 구분선 -->
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="수정">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_edit"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="삭제">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_del"></use></svg>
                            </i>
                          </a>
                        </div>
                      </div>
                    </li>

                    <li class="list_item type_file">
    
                      <h3 class="tit_area">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="list_check1">
                          <label class="custom-control-label" for="list_check1"></label>
                        </div>
                        <a href="javscript:void(0);" class="tit">

                          <!--
                            .ico_doc 
                            .ico_hwp
                            .ico_ppt
                            .ico_zip
                            .ico_xls
                            .ico_pdf
                            .ico_pic
                            .ico_etc
                          -->
                          <i class="ico sp_file ico_hwp"></i>
                          첨부<mark>파일</mark>명.hwp<span class="col_txt_light type_caption_sm ml4">29KB</span>
                        </a>

                        <!-- [반응형] 768px 이하에서 노출 -->
                        <button type="button" class="btn_more button icoOnly sm dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="icoSvg i_s16 col_lightgray ml2">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_more"></use></svg>
                          </i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>원본URL</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg></i>
                         </a>
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>의견</span>
                            <span class="mark_ico">
                              <span class="mark_count">6</span>
                              <i class="icoSvg stroke i_s18">
                                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
                              </i>
                            </span>
                          </a>
													<a href="javascript:;" class="dropdown-item justify-content-between align-items-center">
                            <span>문서</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg></i>
                          </a>
													<a href="javascript:;" class="dropdown-item justify-content-between border_bot align-items-center">
                            <span>분류등록</span>
                            <i class="icoSvg stroke i_s18"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg></i>
                          </a>
                          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>수정</span></a>
                          <a href="javascript:;" class="dropdown-item justify-content-between align-items-center"><span>삭제</span></a>
												</div>
                        <!-- //[반응형] 768px 이하에서 노출 -->

                      </h3>
                      <!-- //tit_area -->
    
                      <div class="preview_area">
                        <div class="inner">
                          <div class="htext">
                            텍스트 적을때  
                          </div>                  
                        </div>
                        <button type="button" class="btn_more">
                          <i class="icoSvg stroke i_s20 ico_arr_bot col_lightgray">
                            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                          </i>
                        </button>
                      </div>
                      <!-- //preview_area -->

                      <div class="docTit_category txt_weight_md mb4">
                        <span class="col_txt_blue">[문서명 표기] </span>
                        문서명 입니다.
                        <i class="icoSvg stroke i_s16 ico_arr_right col_lightgray">
                          <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                        </i>
                        목차명 입니다.
                      </div>
                      <div class="repoInfo_wrap">
                        <div class="info_area">
                          <dl>
                            <dt>등록자</dt>
                            <dd>홍길동</dd>
                          </dl>
                          <dl>
                            <dt>등록일</dt>
                            <dd>2022-10-02</dd>
                          </dl>
                          <dl>
                            <dt>수정일</dt>
                            <dd>2022-10-02</dd>
                          </dl>
                          <dl>
                            <dt>수정자</dt>
                            <dd>홍길동</dd>
                          </dl>
                          <dl>
                            <dt>조회수</dt>
                            <dd>321</dd>
                          </dl>
                        </div>
                        <div class="btn_area">
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="원문 URL">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_url"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="의견">
                            <span class="mark_count">6</span>
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_talk"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="문서">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_list3"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="분류등록">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_class"></use></svg>
                            </i>
                          </a>
                          <!-- S.버튼 구분선 -->
                          <span class="division"></span>
                          <!-- //E.버튼 구분선 -->
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="수정">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_edit"></use></svg>
                            </i>
                          </a>
                          <a href="javascript:void(0)" class="button sm icoOnly" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="삭제">
                            <i class="icoSvg stroke i_s16">
                              <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_del"></use></svg>
                            </i>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <!--//리스트아이템-->

                <!--페이징-->
                <nav class="pagination mt12">
                  <ul>
                    <!--비활성 addClass 'disabled'-->
                    <li class="page_item"><button type="button" class="page_link ico btn_start disabled"><span class="skip">처음으로</span></button></li>	
                    <li class="page_item"><button type="button" class="page_link ico btn_prev disabled"><span class="skip">이전</span></button></li>
                    <!--선택됐을때 addClass 'on'-->
                    <li class="page_item on"><button type="button" class="page_link">1</button></li>
                    <li class="page_item"><button type="button" class="page_link">2</button></li>
                    <li class="page_item"><button type="button" class="page_link">3</button></li>
                    <li class="page_item"><button type="button" class="page_link">4</button></li>
                    <li class="page_item"><button type="button" class="page_link">5</button></li>
                    <li class="page_item"><button type="button" class="page_link ico btn_next"><span class="skip">다음</span></button></li>
                    <li class="page_item"><button type="button" class="page_link ico btn_end"><span class="skip">마지막으로</span></button></li>
                  </ul>
                </nav>    
                <!--//페이징-->

              </div>
              <!-- //첨부파일탭 -->

            </div>
            <!-- //tab-content -->

          </div>
          <!-- //main_body -->
        </div>
        <!-- //E.main_panel-->

        <SearchRightPanel />

      </main>

    </div>
    <!-- //wrap -->
</template>

<script>
import { ref } from "vue";

import SearchHeader from "../components/search/SearchHeader.vue";
import SearchFilter from "../components/search/SearchFilter.vue";
import SearchRightPanel from "../components/search/SearchRightPanel.vue";

export default {
  name:'SearchResult',
  components: {
    SearchHeader,
    SearchFilter,
    SearchRightPanel,
  },
  setup() {
    const startSearch = ref(false);

    return {
      startSearch,
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
