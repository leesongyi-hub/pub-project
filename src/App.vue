<template>
  <div class="">
    <router-view />
    <!-- svgicon 컴포넌트 -->
    <BaseIcon />
    <!-- // svgicon 컴포넌트 -->
  </div>

</template>

<script>
import BaseIcon from "@/components/common/BaseIcon.vue";

export default {
  name: 'App',
  components: {
    BaseIcon
  }
}
</script>

