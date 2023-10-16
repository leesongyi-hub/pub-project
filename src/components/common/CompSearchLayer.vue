<template>

  <div class="search_layer">
    <div class="recent_area">
      <div class="recent_header">
        <span>최근검색어</span>
        <button type="button"
          class="btn_allDel"
          v-if="keywordList.length > 0"
        >
          전체삭제          
        </button>
      </div>
      <ul>
        <li class="keyword_item"
          v-for="item in keywordList"                      
          :key="item"
        >
          <a href="javascript:;" class="keyword_box">
            <svg class="icoSvg i_s20" role="img" aria-hidden="true" focusable="false">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_search" />
            </svg>
            <span class="keyword">{{ item }}</span>
          </a>
          <button
            class="btn_del icoOnly i_s20"
            @click="removeKeyword()"
          >
            <svg class="icoSvg col_lightgray" role="img" aria-hidden="true" focusable="false">
              <use xlink:href="@/assets/images/sp_svg.svg#ico_close" />              
            </svg>
          </button>
        </li>
      </ul>

      <!-- 최근 검색어 0개 일때 노출 -->
      <div class="nodata"
        v-if="keywordList.length === 0"
      >
        최근 검색어 내역이 없습니다.
      </div>

    </div>
  </div>

</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const keywordList = ref([
      "최근검색어1",
      "최근검색어2",
      "최근검색어최근검색어최근검색어최근검색어최근검색어최근검색어"
    ]);

    const removeKeyword = (index) => {
      keywordList.value.splice(index, 1);
    };

    return {
      keywordList,
      removeKeyword
    };
  },
}
</script>

<style lang="scss" scoped>

</style>