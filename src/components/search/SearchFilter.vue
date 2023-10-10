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

            <button type="button" class="btn_aco">
              <h3 class="tit">저장소</h3>
              <i class="icoSvg stroke i_s20 ico_arr_right">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
              </i>
            </button>
            
            <div class="filterComp_body">
              <ul class="filterComp_list">
                <li
                  class="filterComp_listOpt"
                  v-for="item, index in items" :key="item"
                >                
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" :id="'filter1-' + index">
                    <label class="custom-control-label" :for="'filter1-' + index"><span>샘플라벨<em class="count">(1,234)</em></span></label>
                  </div>
                </li>
              </ul>
              <!--//filterComp_list-->
              <button type="button" class="btn_more" @click="addItem">
                <span class="label">더보기</span>
                <svg aria-hidden="true" focusable="false" class="icoSvg stroke i_s14 col_lightgray ico_arr_bot ml2"><use xlink:href="#ico_arrow"></use></svg>
              </button>
            </div>
            <!-- //filterComp_body -->
          </div>
          <!-- //filterComp -->  
  
          <div class="filterComp">
            <button type="button" class="btn_aco">
              <h3 class="tit">의도분류</h3>
              <i class="icoSvg stroke i_s20 ico_arr_right">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
              </i>
            </button>
            <div class="filterComp_body">
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
                <li class="filterComp_listOpt">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="filter2-1">
                    <label class="custom-control-label" for="filter2-1"><span>의도분류명1<em class="count">(1,234)</em></span></label>
                  </div>
                </li>
                <li class="filterComp_listOpt">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="filter2-2">
                    <label class="custom-control-label" for="filter2-2"><span>의도분류명2<em class="count">(1,234)</em></span></label>
                  </div>
                </li>
              </ul>
              <!-- //filterComp_list -->
              <button type="button" class="btn_more">
                <span class="label">더보기</span>
                <i class="icoSvg stroke i_s14 col_lightgray ico_arr_bot ml2">
                  <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                </i>
              </button>
            </div>
            <!-- //filterComp_body -->
          </div>
          <!-- //filterComp -->
  
          <div class="filterComp">
            <button type="button" class="btn_aco">
              <h3 class="tit">문서분류</h3>
              <i class="icoSvg stroke i_s20 ico_arr_right">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
              </i>
            </button>
            
            <div class="filterComp_body">
              <div class="control_area">
                <ul class="control_tab">
                  <li><button type="button">기본분류</button></li>
                  <li><button type="button" class="on">상세분류</button></li>
                </ul>

                <div class="form_switch">
                  <input type="checkbox" id="switch2">
                  <label for="switch2"><span class="label_txt">미분류</span><i class="btn_switch"></i></label>
                </div>

              </div>
              <ul class="tree_list filterComp_list">
                <li class="tree_listItem on">

                  <div class="btn_doc">
                    <div class="custom-control custom-checkbox ">
                      <input type="checkbox" class="custom-control-input" id="allCheck1" name="chk">
                      <label class="custom-control-label" for="allCheck1"><span>문서분류명1<em class="count">(1,234)</em></span></label>
                    </div>
                    <button type="button" class="btn_arr i_s24">
                      <i class="icoSvg stroke i_s14 col_lightgray ico_arr_bot">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </button>
                  </div>
  
                  <div class="treeComp">
                    <ul>
                      <!--li에 'on' 클래스 있으면 펼침-->
                      <li class="on">
                        <div class="tree">
                          <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="" name="chk">
                            <label class="custom-control-label" for=""><span>대분류<em class="count">(1,234)</em></span></label>
                          </div>
                        </div>		
                        <ul>
                          <li>
                            <div class="tree">

                              <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                              <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                              
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                          </li>										
                          <li>
                            <div class="tree">
                              <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                            <ul>
                              <li>
                                <div class="tree">

                                  <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                                  <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                                  
                                  <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="" name="chk">
                                    <label class="custom-control-label" for=""><span>소분류<em class="count">(1,234)</em></span></label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <!--- //treeComp -->
                </li>
                <!-- //tree_list -->

                <li class="tree_listItem">

                  <div class="btn_doc">
                    <div class="custom-control custom-checkbox ">
                      <input type="checkbox" class="custom-control-input" id="allCheck2" name="chk2">
                      <label class="custom-control-label" for="allCheck2"><span>문서분류명2<em class="count">(1,234)</em></span></label>
                    </div>
                    <button type="button" class="btn_arr i_s24">
                      <i class="icoSvg stroke i_s14 col_lightgray ico_arr_bot">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </button>
                  </div>
  
                  <div class="treeComp">
                    <ul>
                      <!--li에 'on' 클래스 있으면 펼침-->
                      <li class="on">
                        <div class="tree">
                          <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="" name="chk2">
                            <label class="custom-control-label" for=""><span>대분류<em class="count">(1,234)</em></span></label>
                          </div>
                        </div>		
                        <ul>
                          <li>
                            <div class="tree">

                              <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                              <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                              
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk2">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                          </li>										
                          <li>
                            <div class="tree">
                              <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk2">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                            <ul>
                              <li>
                                <div class="tree">

                                  <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                                  <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                                  
                                  <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="" name="chk2">
                                    <label class="custom-control-label" for=""><span>소분류<em class="count">(1,234)</em></span></label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <!--- //treeComp -->
                </li>
                <!-- //tree_list -->

                <li class="tree_listItem">

                  <div class="btn_doc">
                    <div class="custom-control custom-checkbox ">
                      <input type="checkbox" class="custom-control-input" id="allCheck3" name="chk3">
                      <label class="custom-control-label" for="allCheck3"><span>문서분류명3<em class="count">(1,234)</em></span></label>
                    </div>
                    <button type="button" class="btn_arr i_s24">
                      <i class="icoSvg stroke i_s14 col_lightgray ico_arr_bot">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </button>
                  </div>
  
                  <div class="treeComp">
                    <ul>
                      <!--li에 'on' 클래스 있으면 펼침-->
                      <li class="on">
                        <div class="tree">
                          <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="" name="chk3">
                            <label class="custom-control-label" for=""><span>대분류<em class="count">(1,234)</em></span></label>
                          </div>
                        </div>		
                        <ul>
                          <li>
                            <div class="tree">

                              <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                              <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                              
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk3">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                          </li>										
                          <li>
                            <div class="tree">
                              <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk3">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                            <ul>
                              <li>
                                <div class="tree">

                                  <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                                  <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                                  
                                  <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="" name="chk3">
                                    <label class="custom-control-label" for=""><span>소분류<em class="count">(1,234)</em></span></label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <!--- //treeComp -->
                </li>
                <!-- //tree_list -->

                <li class="tree_listItem">

                  <div class="btn_doc">
                    <div class="custom-control custom-checkbox ">
                      <input type="checkbox" class="custom-control-input" id="allCheck4" name="chk4">
                      <label class="custom-control-label" for="allCheck4"><span>문서분류명4<em class="count">(1,234)</em></span></label>
                    </div>
                    <button type="button" class="btn_arr i_s24">
                      <i class="icoSvg stroke i_s14 col_lightgray ico_arr_bot">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </button>
                  </div>
  
                  <div class="treeComp">
                    <ul>
                      <!--li에 'on' 클래스 있으면 펼침-->
                      <li class="on">
                        <div class="tree">
                          <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="" name="chk4">
                            <label class="custom-control-label" for=""><span>대분류<em class="count">(1,234)</em></span></label>
                          </div>
                        </div>		
                        <ul>
                          <li>
                            <div class="tree">

                              <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                              <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                              
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk4">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                          </li>										
                          <li>
                            <div class="tree">
                              <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk4">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                            <ul>
                              <li>
                                <div class="tree">

                                  <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                                  <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                                  
                                  <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="" name="chk4">
                                    <label class="custom-control-label" for=""><span>소분류<em class="count">(1,234)</em></span></label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <!--- //treeComp -->
                </li>
                <!-- //tree_list -->

                <li class="tree_listItem">

                  <div class="btn_doc">
                    <div class="custom-control custom-checkbox ">
                      <input type="checkbox" class="custom-control-input" id="allCheck5" name="chk5">
                      <label class="custom-control-label" for="allCheck5"><span>문서분류명5<em class="count">(1,234)</em></span></label>
                    </div>
                    <button type="button" class="btn_arr i_s24">
                      <i class="icoSvg stroke i_s14 col_lightgray ico_arr_bot">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </button>
                  </div>
  
                  <div class="treeComp">
                    <ul>
                      <!--li에 'on' 클래스 있으면 펼침-->
                      <li class="on">
                        <div class="tree">
                          <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="" name="chk5">
                            <label class="custom-control-label" for=""><span>대분류<em class="count">(1,234)</em></span></label>
                          </div>
                        </div>		
                        <ul>
                          <li>
                            <div class="tree">

                              <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                              <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                              
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk5">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                          </li>										
                          <li>
                            <div class="tree">
                              <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk5">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                            <ul>
                              <li>
                                <div class="tree">

                                  <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                                  <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                                  
                                  <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="" name="chk5">
                                    <label class="custom-control-label" for=""><span>소분류<em class="count">(1,234)</em></span></label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <!--- //treeComp -->
                </li>
                <!-- //tree_list -->

                <li class="tree_listItem">

                  <div class="btn_doc">
                    <div class="custom-control custom-checkbox ">
                      <input type="checkbox" class="custom-control-input" id="allCheck6" name="chk6">
                      <label class="custom-control-label" for="allCheck6"><span>문서분류명6<em class="count">(1,234)</em></span></label>
                    </div>
                    <button type="button" class="btn_arr i_s24">
                      <i class="icoSvg stroke i_s14 col_lightgray ico_arr_bot">
                        <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                      </i>
                    </button>
                  </div>
  
                  <div class="treeComp">
                    <ul>
                      <!--li에 'on' 클래스 있으면 펼침-->
                      <li class="on">
                        <div class="tree">
                          <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="" name="chk6">
                            <label class="custom-control-label" for=""><span>대분류<em class="count">(1,234)</em></span></label>
                          </div>
                        </div>		
                        <ul>
                          <li>
                            <div class="tree">

                              <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                              <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                              
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk6">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                          </li>										
                          <li>
                            <div class="tree">
                              <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="" name="chk6">
                                <label class="custom-control-label" for=""><span>중분류<em class="count">(1,234)</em></span></label>
                              </div>
                            </div>	
                            <ul>
                              <li>
                                <div class="tree">

                                  <!-- 📢개발전달사항 : 하위목차없을때 펼침 버튼 미노출 -->
                                  <!-- <button type="button" class="btn_acco ico ico_arrR"><span class="skip">펼치기</span></button> -->
                                  
                                  <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="" name="chk6">
                                    <label class="custom-control-label" for=""><span>소분류<em class="count">(1,234)</em></span></label>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <!--- //treeComp -->
                </li>
                <!-- //tree_list -->
              </ul>
              <button type="button" class="btn_more">
                <span class="label">더보기</span>
                <i class="icoSvg stroke i_s14 col_lightgray ico_arr_bot ml2">
                  <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_arrow"></use></svg>
                </i>
              </button>
            </div>
            <!-- //filterComp_body -->
          </div>
          <!--//filterComp-->
        </div>
        <!-- //filter_body -->        
      </div>
      <!-- //filter -->
</template>


<script>
import { ref } from 'vue';

export default {
  name:'SearchFilter',

  setup() {
    // 데이터 상태를 ref 함수를 사용하여 정의합니다.
    const items = ref([
      '샘플라벨1',
      '샘플라벨2',
      '샘플라벨3',
      '샘플라벨4',
      '샘플라벨5',
      '샘플라벨6',
      '샘플라벨7',
      '샘플라벨8',
      '샘플라벨9',
      '샘플라벨10',
    ]);

    // 데이터를 조작하는 함수를 setup 내에서 정의합니다.
    const addItem = () => {
      const newItem = { id: items.value.length + 1, name: `Item ${items.value.length + 1}` };
      items.value.push(newItem);
    };

    const isMenuOpen = ref(true);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };


    // 컴포넌트에서 사용할 데이터와 메서드를 반환합니다.
    return {
      items,
      isMenuOpen,
      addItem,
      toggleMenu,
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
