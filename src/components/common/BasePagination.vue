
<template>
  <!--페이징-->
  <nav class="pagination mt12">
    <ul>
      <!--비활성 addClass 'disabled'-->
      <li class="page_item"><button type="button" class="page_link ico btn_start disabled"><span class="skip">처음으로</span></button></li>	
      <li class="page_item"><button type="button" class="page_link ico btn_prev disabled"><span class="skip">이전</span></button></li>
      <!--선택됐을때 addClass 'on'-->
      <li class="page_item on"><button type="button" class="page_link">1</button></li>
      <li class="page_item"><button type="button" class="page_link">2</button></li>
      <li class="page_item"><button type="button" class="page_link">3</button></li>
      <li class="page_item"><button type="button" class="page_link">4</button></li>
      <li class="page_item"><button type="button" class="page_link">5</button></li>
      <li class="page_item"><button type="button" class="page_link ico btn_next"><span class="skip">다음</span></button></li>
      <li class="page_item"><button type="button" class="page_link ico btn_end"><span class="skip">마지막으로</span></button></li>
    </ul>
  </nav>
  <!--//페이징-->
</template>