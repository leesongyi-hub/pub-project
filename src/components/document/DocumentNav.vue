<template>
<nav class="nav">
  <div class="nav_head">
    목차
    <button type="button" class="btn_close">

    </button>
  </div>
  <div class="nav_body">
    <ul class="depth1">

      <li>
        <a href="#idx1"><span>1</span><span>문서제목</span></a>
        <ul class="depth2">
          <li><a href="#idx1-1"><span>1</span><span>문서제목</span></a></li>
          <li><a href="#idx1-2"><span>1</span><span>문서제목</span></a></li>
        </ul>
      </li>

    </ul>
  </div>
</nav>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>