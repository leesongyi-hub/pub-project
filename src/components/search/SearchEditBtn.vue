<template>
    <div class="btn_area">
        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="원문 URL">            
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="#ico_url"></use>
            </svg>
        </button>
        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="의견">
            <span class="mark_count">12</span>
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="#ico_talk"></use>
            </svg>
        </button>
        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="문서">            
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="#ico_list3"></use>
            </svg>
        </button>
        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="분류등록">            
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="#ico_class"></use>
            </svg>
        </button>

        <!-- S.버튼 구분선 -->
        <span class="division"></span>
        <!-- //E.버튼 구분선 -->

        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="수정">            
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="#ico_edit"></use>
            </svg>
        </button>
        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="삭제">            
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="#ico_del"></use>
            </svg>
        </button>

    </div>
</template>

<script>
import { onMounted  } from "vue";
import { Tooltip } from 'bootstrap'

export default {
  name:'SearchEditBtn',
  components: {
  },
  setup() {

    onMounted(() => {  
       //inti tooltip
       Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
      .forEach(tooltipNode => new Tooltip(tooltipNode))
    });

    return {
    };    
  },
}
</script>

<style lang="scss" scoped>

</style>