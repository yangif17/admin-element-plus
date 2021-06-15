<template>
  <div class="base-form">
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidth"
      :model="formObject"
      :inline="inline"
      :rules="formRules"
    >
      <el-form-item
        v-for="item in formLabel"
        :key="item.label"
        :label="item.label"
        :prop="formObject[item.prop]"
      >
        <el-input
          v-if="item.mold === 'input'"
          v-model="formObject[item.prop]"
          :type="item.type"
          :rows="item.rows"
          :disabled="item.disabled"
          :placeholder="
            item.placeholder ? item.placeholder : '请输入' + item.label
          "
          :clearable="item.clearable ? item.clearable : clearable"
          :suffix-icon="item.frontIcon"
          :prefix-icon="item.behindIcon"
        ></el-input>
        <el-select
          v-if="item.mold === 'select'"
          v-model="formObject[item.prop]"
          :disabled="item.disabled"
          :placeholder="
            item.placeholder ? item.placeholder : '请选择' + item.label
          "
          :clearable="item.clearable ? item.clearable : clearable"
          :filterable="item.filterable ? item.filterable : false"
        >
          <el-option
            v-for="term in item.options"
            :key="term.value"
            :label="term.label"
            :value="term.value"
          ></el-option>
        </el-select>
        <el-radio-group
          v-if="item.mold === 'radio'"
          v-model="formObject[item.prop]"
          :text-color="item.textColor"
          :size="item.size"
          :disabled="item.disabled"
          :fill="item.fillcolor"
        >
          <el-col :span="24" v-if="item.type === 'radioButton'">
            <el-radio-button
              v-for="term in item.options"
              :key="term.value"
              :label="term.value"
              :disabled="item.disabled"
              v-text="term.label"
            ></el-radio-button>
          </el-col>
          <el-col :span="24" v-if="item.type === 'radio'">
            <el-radio
              v-for="term in item.options"
              :key="term.value"
              :label="term.value"
              v-text="term.label"
              :disabled="term.disabled"
              :border="term.border"
              :size="term.size"
            ></el-radio>
          </el-col>
        </el-radio-group>
        <el-checkbox-group
          v-if="item.mold === 'checkbox'"
          v-model="formObject[item.prop]"
          :size="item.size"
          :disabled="item.disabled"
          :min="item.min"
          :max="item.max"
          :text-color="item.textColor"
          :fill="item.fillcolor"
          :true-label="trueValue"
          :false-label="falseValue"
        >
          <el-col :span="24" v-if="item.type === 'checkboxButton'">
            <el-checkbox-button
              v-for="term in item.options"
              :key="term.value"
              :label="term.value"
              v-text="term.label"
              :disabled="term.disabled"
              :checked="term.checked"
              :true-label="trueValue"
              :false-label="falseValue"
            ></el-checkbox-button>
          </el-col>
          <el-col :span="24" v-if="item.type === 'checkbox'">
            <el-checkbox
              v-for="term in item.options"
              :key="term.value"
              :label="term.value"
              v-text="term.label"
              :disabled="term.disabled"
            ></el-checkbox>
          </el-col>
        </el-checkbox-group>
        <el-date-picker
          v-if="item.mold === 'datePicker'"
          v-model="formObject[item.prop]"
          :type="item.type"
          :range-separator="item.separator"
          :start-placeholder="item.startText"
          :end-placeholder="item.endText"
          :disabled="item.disabled"
          :editable="item.editable"
          :clearable="item.clearable ? item.clearable : clearable"
          :size="item.size"
          :placeholder="
            item.placeholder ? item.placeholder : '请选择' + item.label
          "
          :format="item.format"
          :align="item.align"
        >
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/**
 * @description
 * @param   {String}    labelPosition   对齐方式
 * @param   {String}    labelWidth      宽度
 * @param   {Object}    formObject      form
 * @param   {Array}     formLabel       form表单表头
 * @param   {Boolean}   inline          form表单是否一排
 * @param   {Boolean}   clearable       是否可清除
 */
export default {
  name: "BaseForm",
  props: {
    labelPosition: {
      type: String,
      default: "left",
    },
    labelWidth: {
      type: String,
      default: "80px",
    },
    formObject: {
      type: Object,
      default: () => {},
    },
    formLabel: {
      type: Array,
      default: () => [],
    },
    inline: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    formRules: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.base-form {
}
</style>