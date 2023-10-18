<template>
  <!-- S.모달 : 분류수정 -->
  <div class="modal modal_editCategory fade show" id="modal_editCategory" tabindex="-1" data-backdrop="static" data-keyboard="false" style="display:block;">
  <div class="modal-dialog w800">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="tit">문서분류 설정</h5>
        <p class="sub_txt">문서 분류정보를 이용하여 목차의 분류정보를 설정합니다.</p>
        <button type="button" class="btn-close" data-dismiss="modal">
          <i class="icoSvg stroke i_s24 col_lightgray">
            <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_deleted"></use></svg>
          </i>  
        </button>
      </div>
      <div class="modal-body">
        
        <div class="repo_select_area">
          <div class="swiper swiper_type_wAuto swiper_area">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <!--
                  선택된 버튼에 addClass('on');
                -->
                <div class="swiper-slide"><button tpye="button" class="chip rounded-max lg on" title="전체 저장소명 넣어주세요">111저장소명 최대 너비 300px까지 보여지고 그 이상은 ...처리합니다.</button></div>
                <div class="swiper-slide"><button tpye="button" class="chip rounded-max lg" title="전체 저장소명 넣어주세요">222저장소명 샘플</button></div>
                <div class="swiper-slide"><button tpye="button" class="chip rounded-max lg" title="전체 저장소명 넣어주세요">333저장소명 샘플</button></div>
                <div class="swiper-slide"><button tpye="button" class="chip rounded-max lg" title="전체 저장소명 넣어주세요">444저장소명 최대 너비 300px까지 보여지고 그 이상은 ...처리합니다.</button></div>
                <div class="swiper-slide"><button tpye="button" class="chip rounded-max lg" title="전체 저장소명 넣어주세요">555저장소명 샘플</button></div>
                <div class="swiper-slide"><button tpye="button" class="chip rounded-max lg" title="전체 저장소명 넣어주세요">666저장소명 샘플</button></div>
                <div class="swiper-slide"><button tpye="button" class="chip rounded-max lg" title="전체 저장소명 넣어주세요">777저장소명 샘플</button></div>
                <div class="swiper-slide"><button tpye="button" class="chip rounded-max lg" title="전체 저장소명 넣어주세요">666저장소명 샘플</button></div>
              </div>
              <div class="swiper-button-prev">
                <div class="inner">
                  <i class="icoSvg stroke i_s20 ico_arr_left">
                    <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                  </i>
                </div>
              </div>
              <div class="swiper-button-next">
                <div class="inner">
                  <i class="icoSvg stroke i_s20">
                    <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                  </i>
                </div>
              </div>

            </div>

          </div>
          <!-- 선택된 저장소없으면 미노출 -->
          <div class="repo_select_label mt8">
            <span>저장소</span>
            <strong class="col_txt_primary ml4">저장소명 전체출력</strong>
          </div>
        </div>

        <div class="form_group_wrap col2 d-flex right align-items-center justify-content-end right mb24">
          <div class="form_group d-flex align-items-center">
            <label class="form-label mr8" for="category">대분류</label>					
            <select id="category" class="form_input form-select">
              <option>선택하세요.</option>
            </select>
          </div>
          <div class="form_group d-flex align-items-center ml24">
            <label class="form-label mr8" for="search">검색어</label>
            <input id="search" class="form_input" placeholder="회원을 찾아보세요.">
          </div>
          <button type="button" class="button primary md ml8"><i class="ico ico_search_white i_s20"></i><span class="label">찾기</span></button>
        </div>

        <!--S. category_wrap-->
        <div class="category_wrap include_tab d-flex">

          <!--//S. category_tree-->
          <div class="category_tree">
            
            <!--S. Tab Navi-->
            <ul class="nav nav-tabs nav-justified nav_type2" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" data-toggle="tab" data-target="#categoryTree" type="button" role="tab" aria-selected="false">분류선택</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" data-toggle="tab" data-target="#categorySearch" type="button" role="tab" aria-selected="false">검색결과</button>
              </li>
            </ul>
            <!--//E. Tab Navi-->
            
            <!--S. Tab Contents-->
            <div div="" class="tab-content" id="myTabContent">

              <!--S. 분류선택 탭-->
              <div id="categoryTree" class="tab-pane active" role="tabpanel" tabindex="0">
                <ul>
                  <!--li에 'on' 클래스 있으면 펼침-->
                  <li class="on">
                    <div class="tree">
                      <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                      <a href="javascript:;" title="문서 대분류">1 문서 대분류</a>
                    </div>		
                    <ul>
                      <li>
                        <div class="tree">																					
                          <a href="javascript:;" title="문서 대분류 > 문서 중분류">1.1 문서 대분류 &gt; 문서 중분류</a>
                        </div>
                      </li>										
                      <li>
                        <div class="tree">	
                          <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                          <a href="javascript:;" title="문서 대분류 > 문서 중분류">1.2 문서 대분류 &gt; 문서 중분류</a>
                        </div>
                        <ul>
                          <li>
                            <div class="tree">	
                              <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>													
                              <a href="javascript:;" title="문서 대분류 > 문서 중분류 > 문서 소분류">1.2.1 문서 대분류 &gt; 문서 중분류 &gt; 문서 소분류</a>
                            </div>
                            <ul>
                              <li>
                                <div class="tree">																
                                  <a href="javascript:;" title="문서 대분류 > 문서 중분류 > 문서 소분류 > 문서 분류">1.2.1.1 문서 대분류 &gt; 문서 중분류 &gt; 문서 소분류 &gt; 문서 분류</a>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div class="tree">
                      <a href="javascript:;">2 문서 대분류</a>
                    </div>
                  </li>
                </ul>
              </div>
              <!--//E. 분류선택 탭-->

              <!--S. 검색결과 탭-->
              <div id="categorySearch" class="tab-pane" role="tabpanel" tabindex="0">

                <!--Case2. 기본화면-->
                <div class="nodata align_center">
                  <i class="ico ico_cancel i_s20"></i>
                  <p class="caption_body">검색결과가 없습니다.</p>
                </div>
                <!--Case2. 기본화면-->

                <!--Case2. 검색결과 없음-->
                <div class="nodata align_center">
                  <i class="ico ico_search_gray i_s20"></i>
                  <p class="caption_body">검색어를 입력해 주세요.</p>
                </div>
                <!--Case2. 검색결과 없음-->

                <!--Case3. 검색결과 있음-->
                <div class="search_mode">
                  <ul>
                    <li>
                      <div class="tree">
                        <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                        <a href="javascript:;" title="1.1 문서 대분류 > 문서 중분류">1.1 문서 대분류 &gt; 문서 중분류</a>
                      </div>
                    </li>
                    <li>
                      <div class="tree">
                        <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                        <a href="javascript:;" title="1.1.1 문서 대분류 > 문서 중분류 > 문서 중분류">1.1.1 문서 대분류 &gt; 문서 중분류 &gt; 문서 중분류</a>
                      </div>
                    </li>
                    <li>
                      <div class="tree">
                        <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                        <a href="javascript:;" title="1.1.1.1 문서 대분류 > 문서 중분류 > 문서 중분류 > 문서 분류">1.1.1.1 문서 대분류 &gt; 문서 중분류 &gt; 문서 중분류 &gt; 문서 분류</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <!--//Case3. 검색결과 있음-->

              </div>
              <!--//E. 검색결과 탭 -->
              
            </div>
            <!--//E. Tab Contents-->

          </div>
          <!--//E. category_tree-->

          <div class="category_content">
            <div class="dou_list">
              <span class="col_txt_800 mb8">문서명</span>
              <ul>
                <li>수사결과보고서수사결과보고서수사결과보고서수사결과보고서수사결과보고서수사결과보고서</li>
                <li>보험 가이드</li>
                <li>보험 설명서</li>
              </ul>
            </div>
            <div class="select_dou_list">
              <div class="d-flex justify-content-between align-items-center mb8">
                <span class="col_txt_800">선택한 분류 명</span>
                <button type="button" class="button outline md mb8">전체삭제</button>
              </div>
              <div class="add_tag_list flex-grow-1">
                <div class="add_tag d-flex">
                  <span class="txt">문서 대분류 &gt; 문서 중분류 &gt; 문서 소분류 &gt; 분류1</span>
                  <button type="button" class="ico ico_close_gray i_s20"><span class="skip">삭제</span></button>
                </div>		
                <div class="add_tag d-flex">
                  <span class="txt">문서 대분류 &gt; 문서 중분류 &gt; 문서 소분류 &gt; 분류1</span>
                  <button type="button" class="ico ico_close_gray i_s20"><span class="skip">삭제</span></button>
                </div>
                <div class="add_tag d-flex">
                  <span class="txt">문서 대분류 &gt; 문서 중분류 &gt; 문서 소분류 &gt; 분류1</span>
                  <button type="button" class="ico ico_close_gray i_s20"><span class="skip">삭제</span></button>
                </div>				
              </div>
            </div>
          </div>

        </div>
        <!--//E. category_wrap-->

      </div>
      <div class="modal-footer">
        <button type="button" class="button outline lg" data-dismiss="modal">취소</button>
        <button type="button" class="button primary lg" data-dismiss="modal">저장</button>
      </div>
    </div>
  </div>
  </div>
  <!-- E.모달 : 분류수정 -->
</template>

<script>
</script>

<style>
</style>
