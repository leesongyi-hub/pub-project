<template>

  <!--툴바-->
  <div class="resultBtn_area">
    <button type ="button" class="btn_createDoc button md outline mr8" data-toggle="modal" data-target="#modal_createDoc"
    @click="showModal"
    >샘플라벨</button>
    <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editCategory">샘플라벨</button>
    <button type ="button" class="button md outline mr8" data-toggle="modal" data-target="#modal_editField">샘플라벨</button>
    <button type ="button" class="button md outline mr8 disabled">샘플라벨</button>      


    <button type ="button" class="btn_sort button md outline" data-toggle="modal" data-target="#modal_sortSet">
      정렬<span class="count type_caption_sm txt_info"> (3개)</span>
      <i class="icoSvg i_s20 col_gray ml2">
        <svg aria-hidden="true" focusable="false"><use xlink:href="@/assets/images/sp_svg.svg#ico_align"></use></svg>
      </i>
    </button>
    <button type="button" class="btn_more button icoOnly md dropdown dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" aria-label="메뉴더보기">
      <svg role="img" aria-hidden="true" focusable="false" class="icoSvg i_s20 col_gray ml2">
        <use xlink:href="@/assets/images/sp_svg.svg#ico_more"></use>
      </svg>
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

</template>

<script>

export default {
  name:'SearchToolbar',
  setup(props, { emit }) {

    const showModal = () => {
      emit('sendShow', true);
    };

    return {
      showModal,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
