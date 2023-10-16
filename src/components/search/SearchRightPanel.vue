<template>
     

  <div class="right_panel">
    <div class="side_item popularKeyword">
      <p class="type_body_lg txt_bold mb12">샘플타이틀</p>

      <div class="nodata align_center">
        <i class="ico ico_cancel i_s20"></i>
        <p class="caption_body">Empty State UI</p>
      </div>

    </div>

    <div class="side_item popularKeyword">
      <p class="type_body_lg txt_bold mb12">샘플타이틀</p>
      <ul>
        <li
            v-for="index in 10"
          :key="index">
            <a href="javascript:void(0)">샘플텍스트</a>
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
        <i class="icoSvg stroke i_s20">
          <svg aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_setting"></use></svg>
        </i>
      </button>
    </div>
  </div>

</template>

<script>

export default {
  name:'SearchRightPanel',
}
</script>

<style lang="scss" scoped>

</style>
