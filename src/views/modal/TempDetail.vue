<template>
  <div>
    
    <!-- // S.모달 : 템플릿 전체보기 -->
    <div class="modal modal_tempDetail fade show" id="modal_tempDetail" tabindex="-1" data-backdrop="static" data-keyboard="false" aria-modal="true" style="display:block;">
      <div class="modal-dialog w400">
        <div class="modal-content"> 
  
          <div class="modal-header">
            <h5 class="tit">상세 팝업</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="닫기">
              <i class="icoSvg stroke i_s24 col_lightgray">
                <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_deleted"></use></svg>
              </i>
            </button>
          </div>
  
          <div class="modal-body">
            <div class="template_list d-flex">
  
                <div class="template_listItem on">
                  <div class="list_item">
                    <p class="tit">템플릿 선택</p>
                    <div class="view_tree">
                      <ul>
                        <li>
                          <p><span>1</span><em>문서기본정보</em></p>
                          <ul>
                            <li>
                              <p><span>1.1</span><em>Lorem Ipsum is</em></p>
                              <ul>
                                <li>
                                  <p><span>1.1.1</span><em>中國語 回復の兆しが一向に見えなくて<i class="icoSvg stroke i_s16"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_link"></use></svg></i></em></p>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <p><span>2</span><em>하위목차 없을때<i class="icoSvg stroke i_s16"><svg aria-hidden="true" focusable="false"><use xlink:href="#ico_link"></use></svg></i></em></p>
                        </li>
                        <li>
                          <p><span>3</span><em>가로 스크롤 없는 트리 구조는 텍스트가 내려갑니다. 가로 스크롤 없는 트리 구조는 텍스트가 내려갑니다.</em></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>                 
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- // E.모달 : 템플릿 전체보기 -->
  
    <div class="modal-backdrop fade show modal-stack" style="z-index: 1039;"></div>
  </div>
</template>

<script>

export default {
  name:'tempDetail',
  components: {

    },  
  setup() {
    return {      
      
    };
  },
}
</script>

<style lang="scss" scoped>

</style>
