<template>
  <div class="right_panel">

    <template v-if="checkLoading">
      <CompSpinner />
    </template>

    <template v-else>
      <div class="side_item popularKeyword" >
        <p class="type_body_lg txt_bold mb12">샘플타이틀</p>
        <div class="nodata align_center">
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_lightgray">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_cancel"></use>
          </svg>
          <p class="caption_body mt4">문서가 없습니다.</p>
        </div>
      </div>
  
      <div class="side_item popularKeyword">
        <p class="type_body_lg txt_bold mb12">샘플타이틀</p>
        <ul>
          <li
            v-for="index in 10"
            :key="index">
              <a href="javascript:;">샘플텍스트</a>
          </li>
        </ul>
      </div>
  
      <div class="side_item popularDoc">
        <p class="type_body_lg txt_bold mb12">샘플타이틀</p>
        <ul>
          <li
            v-for="index in 10"
            :key="index">
            <span class="list_index">{{ index }}</span>
            <a href="javascript:;" class="list_name">샘플텍스트</a>
            <span class="list_count">(20)</span>
          </li>
        </ul>
      </div>
  
      <div class="setting_area mt8">
        <button tpye="button" class="btn_setting" data-toggle="modal" data-target="#modal_sideSet">
          사이드메뉴 설정
          <svg role="img" aria-hidden="true" focusable="false" class="icoSvg stroke i_s20 ml4">
            <use xlink:href="@/assets/images/sp_svg.svg#ico_setting" />
          </svg>
        </button>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name:'SearchRightPanel',
  props: {
    checkLoading: Boolean,
  },
}
</script>

<style lang="scss" scoped>

</style>
