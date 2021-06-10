<template>
  <div class="base-dialog">
    <el-dialog
      :title="popupTitle"
      :visible.sync="dialogVisible"
      :width="popupWidth"
      :before-close="handleDialogClose"
      :modal="popupModal"
      :fullscreen="popupFullscreen"
      :close-on-click-modal="popupWindow"
      :show-close="popupClsoe"
      :destroy-on-close="popupDestroy"
      :center="popupCenter"
    >
      <slot></slot>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleDialogClose">取 消</el-button>
        <el-button type="primary" @click="handleDialogConfirm">确 认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
/**
 * @description
 * @param   {Boolean}    dialogVisible   显示隐藏弹窗
 * @param   {Boolean}    popupModal      弹窗遮罩层
 * @param   {Boolean}    popupFullscreen 弹窗是否全屏
 * @param   {Boolean}    popupWindow     弹窗点击窗口是否关闭
 * @param   {Boolean}    popupClsoe      弹窗是否显示关闭按钮
 * @param   {Boolean}    popupDestroy    弹窗关闭是否销毁
 * @param   {Boolean}    popupDestroy    弹窗关闭是否销毁
 * @param   {String}     popupCenter     弹窗是否居中
 * @param   {String}     popupTitle      弹窗标题
 */
export default {
  name: "BaseDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    popupFullscreen: {
      type: Boolean,
      default: false,
    },
    popupWindow: {
      type: Boolean,
      default: false,
    },
    popupDestroy: {
      type: Boolean,
      default: false,
    },
    popupModal: {
      type: Boolean,
      default: true,
    },
    popupClsoe: {
      type: Boolean,
      default: true,
    },
    popupCenter: {
      type: Boolean,
      default: true,
    },
    popupWidth: {
      type: String,
      default: "30%",
    },
    popupTitle: {
      type: String,
      default: "",
    },
  },
  methods: {
    // 取消
    handleDialogClose() {
      this.$emit("handleDialogClose");
    },
    // 确认
    handleDialogConfirm() {
      this.$emit("handleDialogConfirm");
    },
  },
};
</script>

<style lang="scss">
.base-dialog {
}
</style>