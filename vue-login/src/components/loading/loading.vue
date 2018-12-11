<template>
  <div class="pull-dialog">
    <div class="dialog-content">
      <!-- 弹窗头部 -->
      <div class="dialog-header">
        提示
      </div>
      <!-- 弹窗主体 -->
      <div class="dialog-body">
        <slot></slot>
      </div>
      <!-- 弹窗底部 -->
      <div class="dialog-footer">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
}
</script>

