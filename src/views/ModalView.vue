<template>
  <section class="inner">

    <article class="modal-area">
      <h2 class="typo_heading_lg mb16">모달팝업 모음</h2>
      <p class="mb8">👇🏻 아래 버튼을 클릭하시면 해당 모달을 확인하실 수 있습니다</p>
      <button type ="button" class="button lg outline" data-toggle="modal" data-target="#modal_alert">공통모달 - alert</button>
      <button type ="button" class="button lg outline" data-toggle="modal" data-target="#modal_confirm">공통모달 - confirm</button>
      <button type ="button" class="button lg outline" data-toggle="modal" data-target="#modal_documentInfo">문서상세모달</button>
      <button type ="button" class="button lg outline" data-toggle="modal" data-target="#modal_comment">의견모달</button>
      <button type ="button" class="button lg outline" data-toggle="modal" data-target="#modal_stateHistory">문서상태이력모달</button>
      <button type ="button" class="button lg outline" data-toggle="modal" data-target="#modal_manager">관리자설정모달</button>
      <button type ="button" class="button lg outline" data-toggle="modal" data-target="#modal_recommendKeyword">추천키워드모달</button>
      <button type ="button" class="button lg outline" data-toggle="modal" data-target="#modal_fileDown">파일다운로드모달</button>
      <button type ="button" class="button lg outline" data-toggle="modal" data-target="#modal_reference">참조모달</button>
      <button type ="button" class="button lg outline" data-toggle="modal" data-target="#modal_filterSet">결과좁혀보기 설정</button>
    </article>

    <article  class="btn-area">
      <h2 class="typo_heading_lg mb16">Button</h2>
      <div>
        <div class="mb12">
          <button type="button" class="button primary lg mr8">버튼라벨</button>
          <button type="button" class="button primary md mr8">버튼라벨</button>
          <button type="button" class="button primary sm mr8">버튼라벨</button>
          <button type="button" class="button primary lg mr8 disabled">버튼라벨</button>
          <button type="button" class="button primary md mr8 disabled">버튼라벨</button>
          <button type="button" class="button primary sm mr8 disabled">버튼라벨</button>
        </div>

        <div class="mb24">
          <button type="button" class="button primary lg mr8">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_white mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button primary lg mr8 disabled">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_white mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button primary md mr8">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_white mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button primary md mr8 disabled">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_white mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button primary sm mr8">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_white mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button primary sm mr8 disabled">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_white mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
        </div>

        <div class="mb12">
          <button type="button" class="button secondary lg mr8">버튼라벨</button>
          <button type="button" class="button secondary md mr8">버튼라벨</button>
          <button type="button" class="button secondary sm mr8">버튼라벨</button>
          <button type="button" class="button secondary lg mr8 disabled">버튼라벨</button>
          <button type="button" class="button secondary md mr8 disabled">버튼라벨</button>
          <button type="button" class="button secondary sm mr8 disabled">버튼라벨</button>
        </div>

        <div class="mb24">
          <button type="button" class="button secondary lg mr8">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_primary mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button secondary lg mr8 disabled">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_primary mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button secondary md mr8">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_primary mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button secondary md mr8 disabled">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_primary mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button secondary sm mr8">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_primary mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button secondary sm mr8 disabled">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 col_primary mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
        </div>

        <div class="mb12">
          <button type="button" class="button outline lg mr8">버튼라벨</button>
          <button type="button" class="button outline md mr8">버튼라벨</button>
          <button type="button" class="button outline sm mr8">버튼라벨</button>
          <button type="button" class="button outline lg mr8 disabled">버튼라벨</button>
          <button type="button" class="button outline md mr8 disabled">버튼라벨</button>
          <button type="button" class="button outline sm mr8 disabled">버튼라벨</button>
        </div>

        <div class="mb12">
          <button type="button" class="button outline lg mr8">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button outline lg mr8 disabled">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button outline md mr8">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button outline md mr8 disabled">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button outline sm mr8">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
          <button type="button" class="button outline sm mr8 disabled">
            <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s16 mr4">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            아이콘 + 버튼라벨
          </button>
        </div>

      </div>
    </article>

    <article>
      <h2 class="typo_heading_lg mb16">input / select</h2>
      <div>
        <div class="form_group d-flex align-items-center mb12">
          <select id="category" class="form_input form-select w100">
            <option value="">select option</option>
            <option value="">select option</option>
          </select>
        </div>
        <div class="form_group d-flex align-items-center mb12">
          <select id="category" class="form_input form-select w100" disabled>
            <option value="">select option</option>
            <option value="">select option</option>
          </select>
        </div>
        <div class="mb12">
          <input type="text" class="form_input w100" placeholder="placeholder" value="">
        </div>
        <div class="mb12">
          <input type="text" class="form_input w100" placeholder="disabled" value="" disabled>
        </div> 
        <div class="mb12">
          <div class="form_group w100 position-relative error">
            <input type="text" class="form_input w100" placeholder="placeholder" value="error">
            <p class="state_txt mt4">에러메세지</p>
          </div>
        </div>
        <div class="mb12">
          <div class="form_group w100 position-relative success">
            <input type="text" class="form_input w100" placeholder="placeholder" value="success">
            <p class="state_txt mt4">성공메세지</p>
          </div>
        </div>
      </div>
    </article>

    <article>
      <h2 class="typo_heading_lg mb16">Checkbox / Radio</h2>
      <div>
        <div class="mb12">

          <div class="d-flex flex-wrap mb12">
            <div class="custom-control custom-radio form-check">
              <input type="radio" id="radio1" name="radio" class="custom-control-input" checked>
              <label class="custom-control-label" for="radio1"><span>Radio</span></label>
            </div>
            <div class="custom-control custom-radio form-check">
              <input type="radio" id="radio2" name="radio" class="custom-control-input">
              <label class="custom-control-label" for="radio2"><span>Radio</span></label>
            </div>
            <div class="custom-control custom-radio form-check">
              <input type="radio" id="radio3" name="radio" class="custom-control-input" disabled>
              <label class="custom-control-label" for="radio3"><span>Radio</span></label>
            </div>
          </div>

          <div class="d-flex flex-wrap">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="checkbox1" checked>
              <label class="custom-control-label" for="checkbox1">
                <span>Checkbox</span>
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="checkbox2">
              <label class="custom-control-label" for="checkbox2">
                <span>Checkbox</span>
              </label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="checkbox3" disabled>
              <label class="custom-control-label" for="checkbox3">
                <span>Checkbox</span>
              </label>
            </div>
          </div>

        </div>
      </div>
    </article>

    <article>
      <h2 class="typo_heading_lg mb16">Badge / Mark</h2>
      <div>
        <span class="txt_badge blue mr8">badge</span>
        <span class="txt_badge green mr8">badge</span>
        <span class="txt_badge yellow mr8">badge</span>
        <span class="txt_badge red mr8">badge</span>
        <span class="txt_badge gray mr8">badge</span>
        <span class="txt_badge mint mr8">badge</span>
        <span class="txt_badge navy mr8">badge</span>
        <span class="txt_badge purple mr8">badge</span>
        <span class="txt_badge pink mr8">badge</span>
        <span class="txt_badge orange mr8">badge</span>
      </div>
      <div>
        <span class="mark_count mr8">1</span>
        <span class="mark_count mr8">123</span>
        <span class="mark_count disabled mr8">123</span>
      </div>
    </article>

    <article class="icon-area">
      <h2 class="typo_heading_lg mb16">Icon</h2>
      <div>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24 stroke">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_double-arrow" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_align" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_calendar" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_cancel" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_class" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24 stroke">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_clip" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_del" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_close" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_double-arr_left" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_double-arr_right" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_edit" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_filter" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_history" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_info" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_list" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_logout" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_menu" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_menu-close" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_menu-open" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_minus" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_more" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_my" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_mylist" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_plus" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_print" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_refresh" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_save" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_sequence-down" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_sequence-up" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_setting" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_share" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_talk" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_up" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_url" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_warning" />
        </svg>
        <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s24">
          <use xlink:href="@/assets/images/sp_svg.svg#ico_home" />
        </svg>
      </div>
    </article>

    <article>
      <h2 class="typo_heading_lg mb16">Tag</h2>
      <div class="add_tag_list flex-grow-1 mr8">
        <div class="add_tag d-flex">
          <span class="txt">block tag</span>
          <button type="button" aria-label="삭제">
            <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
            </svg>
          </button>
        </div>
        <div class="add_tag d-flex">
          <span class="txt">block tag</span>
          <button type="button" aria-label="삭제">
            <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
            </svg>
          </button>
        </div>
        <div class="add_tag d-flex">
          <span class="txt">block tag</span>
          <button type="button" aria-label="삭제">
            <svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_deleted" />
            </svg>
          </button>
        </div>
        <div class="add_tag d-flex">
          <span class="txt">block tag</span>
        </div>
        <div class="add_tag d-flex">
          <span class="txt">block tag</span>
        </div>
      </div>
      <div class="add_tag"><span class="txt">inline tag</span><button type="button" class="d-flex" aria-label="삭제"><svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20"><use xlink:href="static/img/sp_svg.370050b6.svg#ico_deleted"></use></svg></button></div>
      <div class="add_tag"><span class="txt">inline tag</span><button type="button" class="d-flex" aria-label="삭제"><svg role="img" aria-hidden="true" focusable="false" class="ico col_lightgray i_s20"><use xlink:href="static/img/sp_svg.370050b6.svg#ico_deleted"></use></svg></button></div>
      <div class="add_tag"><span class="txt">inline tag</span></div>
      <div class="add_tag"><span class="txt">inline tag</span></div>
    </article>

    <article>
      <h2 class="typo_heading_lg mb16">chip</h2>
      <div class="chip_area">
        <button tpye="button" class="chip on mr8">active chip</button>
        <button tpye="button" class="chip mr8">chip</button>
        <button tpye="button" class="chip mr8">chip</button>
        <button tpye="button" class="chip mr8">chip</button>
      </div>
    </article>

    <article>
      <h2 class="typo_heading_lg mb16">paging</h2>
      <!--페이징-->
      <nav class="pagination mt12">
        <ul>
          <li class="page_item">
            <button type="button" class="page_link ico btn_prev disabled" aria-label="첫 페이지">       
              <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s16 ico_arr_left">
                <use xlink:href="@/assets/images/sp_svg.svg#ico_double-arrow"></use>
              </svg>
            </button>
          </li>
          <li class="page_item">        
            <button type="button" class="page_link ico btn_prev disabled" aria-label="이전 페이지">       
              <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s16 ico_arr_left">
                <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow"></use>
              </svg>
            </button>
          </li>

          <!--현재페이지 addClass('on')'-->
          <li class="page_item on"><button type="button" class="page_link">1</button></li>
          <li class="page_item"><button type="button" class="page_link">2</button></li>
          <li class="page_item"><button type="button" class="page_link">3</button></li>
          <li class="page_item"><button type="button" class="page_link">4</button></li>
          <li class="page_item"><button type="button" class="page_link">5</button></li>
          <li class="page_item">
            <button type="button" class="page_link ico btn_next" aria-label="다음 페이지">
              <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s16">
                <use xlink:href="@/assets/images/sp_svg.svg#ico_arrow"></use>
              </svg>
            </button>
          </li>
          <li class="page_item">
            <button type="button" class="page_link ico btn_next" aria-label="마지막 페이지">
              <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s16">
                <use xlink:href="@/assets/images/sp_svg.svg#ico_double-arrow"></use>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      <!--//페이징-->
    </article>
  </section>

  <ModalComment />
  <ModalDocInfo />
  <ModalStatus />
  <ModalManager />
  <ModalAlert />
  <ModalConfirm />
  <ModarRcommendKeyword />
  <ModarFileDownload />
  <ModarReference />
  <ModarFilterSet />

</template>

<script>
import ModalComment from "./modal/ModalComment.vue";
import ModalDocInfo from "./modal/ModalDocInfo.vue";
import ModalStatus from "./modal/ModalStatus.vue";
import ModalManager from "./modal/ModalManager.vue";
import ModalAlert from "./modal/ModalAlert.vue";
import ModalConfirm from "./modal/ModalConfirm.vue";
import ModarRcommendKeyword from "./modal/ModarRcommendKeyword.vue";
import ModarFileDownload from "./modal/ModarFileDownload.vue";
import ModarReference from "./modal/ModarReference.vue";
import ModarFilterSet from "./modal/ModarFilterSet.vue";

export default {

  name:'ModalView',
  components: {
    ModalComment,
    ModalDocInfo,
    ModalStatus,
    ModalManager,
    ModalAlert,
    ModalConfirm,
    ModarRcommendKeyword,
    ModarFileDownload,
    ModarReference,
    ModarFilterSet
  },
}
</script>

<style scoped>
.inner{padding:60px 16px;max-width:1024px;margin:0 auto;}
article{padding:20px;border:1px solid #eee;margin-bottom:40px;border-radius: 4px;}
.modal-area .button{margin:0 8px 8px 0;}
.btn-area .button{margin:0 8px 8px 0;}

.icon-area .icoSvg{margin-right:12px;margin-bottom:12px;}
</style>
