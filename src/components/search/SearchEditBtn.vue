<template>
    <div class="btn_area">
        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="원문 URL">            
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="@/assets/images/sp_svg.svg#ico_url" />
            </svg>
        </button>
        <button
            class="button sm icoOnly"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="의견" 
            data-toggle="modal"
            data-target="#modal_comment"
        >
            <span class="mark_count">12</span>
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="@/assets/images/sp_svg.svg#ico_talk" />
            </svg>
        </button>
        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="문서">            
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="@/assets/images/sp_svg.svg#ico_list3" />
            </svg>
        </button>
        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="분류등록">            
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="@/assets/images/sp_svg.svg#ico_class" />
            </svg>
        </button>

        <!-- S.버튼 구분선 -->
        <span class="division"></span>
        <!-- //E.버튼 구분선 -->

        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="수정">            
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="@/assets/images/sp_svg.svg#ico_edit" />
            </svg>
        </button>
        <button class="button sm icoOnly" data-bs-toggle="tooltip" data-bs-placement="top" title="삭제">            
            <svg class="icoSvg stroke i_s16" role="img" aria-hidden="true" focusable="false">
                <use xlink:href="@/assets/images/sp_svg.svg#ico_del" />
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
            //init tooltip
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