<template>
<div class="modal-dialog w800">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="tit">부트스트랩4 모달</h5>
      <button type="button" class="btn-close" @click="closeModal" aria-label="닫기">
        <i class="icoSvg stroke i_s24 col_lightgray">
          <svg aria-hidden="true" focusable="false"><use xlink:href="#ico_deleted"></use></svg>
        </i>
      </button>
    </div>
    <div class="modal-body">
      <slot></slot>
    </div>
    <div class="modal-footer">
        <button type="button" class="button outline lg" data-dismiss="modal" @click="closeModal">취소</button>
        <button type="button" class="button primary lg" data-dismiss="modal">저장</button>
      </div>
  </div>
</div>
</template>

<script>

export default {
  setup(props, { emit }) {

    const closeModal = () => {
      emit('sendClose', false);
    };

    return {
      closeModal,
    };
  },
};
</script>

<style scoped>
.modal.show{display:block;}
</style>